"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
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

const GLOBE_RADIUS = 2;

/* ---------- flow routes ---------- */

const ROUTES: [number, number, number, number][] = [
  [40.7, -74, 51.5, -0.1],     // New York -> London
  [35.7, 139.7, -33.9, 151.2], // Tokyo -> Sydney
  [19.1, 72.9, 1.3, 103.8],    // Mumbai -> Singapore
  [52.5, 13.4, 37.6, 127],     // Berlin -> Seoul
];

/* number of points along each curve */
const CURVE_SEGMENTS = 64;
/* particles per route */
const PARTICLES_PER_ROUTE = 3;

interface FlowRoute {
  curve: THREE.QuadraticBezierCurve3;
  points: THREE.Vector3[];
}

/* ---------- Particle ---------- */

function Particle({
  curve,
  offset,
  speed,
}: {
  curve: THREE.QuadraticBezierCurve3;
  offset: number;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = ((clock.getElapsedTime() * speed + offset) % 1 + 1) % 1;
    const pos = curve.getPointAt(t);
    ref.current.position.copy(pos);
    // Fade near endpoints
    const fade = Math.sin(t * Math.PI);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = fade * 0.9;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.018, 4, 4]} />
      <meshBasicMaterial color="#06B6D4" transparent opacity={0} />
    </mesh>
  );
}

/* ---------- DataFlowLines ---------- */

export default function DataFlowLines() {
  const routes = useMemo<FlowRoute[]>(() => {
    return ROUTES.map(([lat1, lng1, lat2, lng2]) => {
      const start = latLngToVector3(lat1, lng1, GLOBE_RADIUS);
      const end = latLngToVector3(lat2, lng2, GLOBE_RADIUS);
      const mid = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(GLOBE_RADIUS * 1.4);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(CURVE_SEGMENTS);
      return { curve, points };
    });
  }, []);

  return (
    <group>
      {/* Static faint lines */}
      {routes.map((route, i) => (
        <Line
          key={i}
          points={route.points}
          color="#22C55E"
          lineWidth={1}
          transparent
          opacity={0.12}
        />
      ))}

      {/* Travelling particles */}
      {routes.map((route, ri) =>
        Array.from({ length: PARTICLES_PER_ROUTE }).map((_, pi) => (
          <Particle
            key={`${ri}-${pi}`}
            curve={route.curve}
            offset={pi / PARTICLES_PER_ROUTE}
            speed={0.08 + ri * 0.015}
          />
        )),
      )}
    </group>
  );
}
