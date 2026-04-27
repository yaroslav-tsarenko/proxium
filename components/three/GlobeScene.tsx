"use client";

import dynamic from "next/dynamic";
import { cn } from "@/lib/utils/cn";

const SceneWrapper = dynamic(
  () => import("@/components/three/SceneWrapper"),
  { ssr: false },
);
const NetworkGlobe = dynamic(
  () => import("@/components/three/NetworkGlobe"),
  { ssr: false },
);
const DataFlowLines = dynamic(
  () => import("@/components/three/DataFlowLines"),
  { ssr: false },
);

interface GlobeSceneProps {
  className?: string;
}

export default function GlobeScene({ className }: GlobeSceneProps) {
  return (
    <SceneWrapper className={cn("h-[600px] w-full", className)}>
      <ambientLight intensity={0.5} />
      <NetworkGlobe />
      <DataFlowLines />
    </SceneWrapper>
  );
}
