"use client";

import { Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { cn } from "@/lib/utils/cn";

interface SceneWrapperProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
}

export default function SceneWrapper({
  children,
  className,
  fallback,
}: SceneWrapperProps) {
  return (
    <div className={cn("h-full w-full", className)}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={fallback ?? null}>
          {children}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
