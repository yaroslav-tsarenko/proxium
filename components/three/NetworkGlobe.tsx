"use client";

import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { QuadraticBezierLine } from "@react-three/drei";
import * as THREE from "three";

/* ---------- helpers ---------- */

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

/* ---------- city data ---------- */

const CITIES: [string, number, number][] = [
  ["New York", 40.7, -74],
  ["London", 51.5, -0.1],
  ["Tokyo", 35.7, 139.7],
  ["Sydney", -33.9, 151.2],
  ["São Paulo", -23.5, -46.6],
  ["Mumbai", 19.1, 72.9],
  ["Singapore", 1.3, 103.8],
  ["Dubai", 25.2, 55.3],
  ["Berlin", 52.5, 13.4],
  ["Toronto", 43.7, -79.4],
  ["Seoul", 37.6, 127],
  ["Moscow", 55.8, 37.6],
  ["Lagos", 6.5, 3.4],
  ["Nairobi", -1.3, 36.8],
  ["Mexico City", 19.4, -99.1],
  ["Shanghai", 31.2, 121.5],
  ["Paris", 48.9, 2.3],
  ["Amsterdam", 52.4, 4.9],
  ["Stockholm", 59.3, 18.1],
  ["Cape Town", -33.9, 18.4],
];

const GLOBE_RADIUS = 2;

/* ---------- Arc sub-component ---------- */

interface ArcData {
  id: number;
  start: THREE.Vector3;
  mid: THREE.Vector3;
  end: THREE.Vector3;
}

function AnimatedArc({ arc }: { arc: ArcData }) {
  const [opacity, setOpacity] = useState(0);
  const elapsed = useRef(0);
  const duration = 2.5; // seconds

  useFrame((_, delta) => {
    elapsed.current += delta;
    const t = elapsed.current / duration;
    // fade in first half, fade out second half
    const o = t < 0.5 ? t * 2 : 2 - t * 2;
    setOpacity(Math.max(0, Math.min(1, o)));
  });

  if (opacity <= 0.01) return null;

  return (
    <QuadraticBezierLine
      start={arc.start}
      end={arc.end}
      mid={arc.mid}
      lineWidth={1.5}
      color="#22C55E"
      opacity={opacity}
      transparent
    />
  );
}

/* ---------- NetworkGlobe ---------- */

export default function NetworkGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const [arcs, setArcs] = useState<ArcData[]>([]);
  const arcIdRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Pre-compute city positions
  const cityPositions = useMemo(
    () => CITIES.map(([, lat, lng]) => latLngToVector3(lat, lng, GLOBE_RADIUS)),
    [],
  );

  // Dot geometry + material (shared)
  const dotGeo = useMemo(() => new THREE.SphereGeometry(0.02, 6, 6), []);
  const dotMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: "#22C55E" }),
    [],
  );

  // Spawn arcs on interval
  const spawnArc = useCallback(() => {
    const a = Math.floor(Math.random() * cityPositions.length);
    let b = a;
    while (b === a) b = Math.floor(Math.random() * cityPositions.length);

    const start = cityPositions[a];
    const end = cityPositions[b];
    const mid = new THREE.Vector3()
      .addVectors(start, end)
      .multiplyScalar(0.5)
      .normalize()
      .multiplyScalar(GLOBE_RADIUS * 1.5);

    const id = arcIdRef.current++;
    setArcs((prev) => [...prev.slice(-4), { id, start, mid, end }]);
  }, [cityPositions]);

  useEffect(() => {
    spawnArc();
    const interval = setInterval(spawnArc, 3000);
    return () => clearInterval(interval);
  }, [spawnArc]);

  // Track mouse for parallax
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Auto-rotate & mouse parallax
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.001;
    // Subtle tilt toward mouse
    groupRef.current.rotation.x +=
      (-mouseRef.current.y * 0.15 - groupRef.current.rotation.x) * 0.02;
    groupRef.current.rotation.z +=
      (mouseRef.current.x * 0.1 - groupRef.current.rotation.z) * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshBasicMaterial
          color="#22C55E"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* City dots */}
      {cityPositions.map((pos, i) => (
        <mesh key={i} geometry={dotGeo} material={dotMat} position={pos} />
      ))}

      {/* Animated arcs */}
      {arcs.map((arc) => (
        <AnimatedArc key={arc.id} arc={arc} />
      ))}
    </group>
  );
}
