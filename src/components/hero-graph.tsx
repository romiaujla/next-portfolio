"use client";

import { Html } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useSyncExternalStore } from "react";
import * as THREE from "three";

/* ── Theme hook ──────────────────────────────────────────── */

function subscribeToTheme(callback: () => void) {
  const el = document.documentElement;
  const observer = new MutationObserver(callback);
  observer.observe(el, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getIsDarkSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function useIsDark() {
  return useSyncExternalStore(subscribeToTheme, getIsDarkSnapshot, () => false);
}

/* ── Static graph data ───────────────────────────────────── */

type NodeDef = {
  id: number;
  base: [number, number, number];
  accent?: boolean;
  label: string;
};
type EdgeDef = [number, number];

const NODES: NodeDef[] = [
  { id: 0, base: [-1.2, 0.9, 0], accent: true, label: "React" },
  { id: 1, base: [0.0, 1.3, 0.3], label: "Node.js" },
  { id: 2, base: [1.3, 0.7, -0.2], accent: true, label: "TypeScript" },
  { id: 3, base: [-0.8, -0.2, 0.4], label: "AWS" },
  { id: 4, base: [0.5, 0.0, -0.3], label: "REST APIs" },
  { id: 5, base: [1.1, -0.7, 0.1], accent: true, label: "Docker" },
  { id: 6, base: [-0.3, -1.1, -0.2], label: "PostgreSQL" },
];

const EDGES: EdgeDef[] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [4, 2],
  [4, 5],
  [3, 6],
  [6, 5],
  [1, 4],
];

/* ── Animated node ───────────────────────────────────────── */

function GraphNode({
  base,
  accent,
  label,
  accentColor,
  neutralColor,
  time,
  seed,
}: {
  base: [number, number, number];
  accent?: boolean;
  label: string;
  accentColor: string;
  neutralColor: string;
  time: React.RefObject<number>;
  seed: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current || time.current === undefined) return;
    const t = time.current;
    /* Gentle breathing drift unique per node */
    ref.current.position.x = base[0] + Math.sin(t * 0.4 + seed * 2.1) * 0.06;
    ref.current.position.y = base[1] + Math.cos(t * 0.35 + seed * 1.7) * 0.07;
    ref.current.position.z = base[2] + Math.sin(t * 0.3 + seed * 3.3) * 0.04;
  });

  return (
    <group ref={ref} position={base}>
      <Html
        center
        distanceFactor={5}
        style={{ pointerEvents: "none", userSelect: "none" }}
      >
        <span
          className="rounded-full border px-2 py-0.5 text-[10px] font-medium whitespace-nowrap"
          style={{
            color: accent ? accentColor : neutralColor,
            borderColor: accent ? accentColor : neutralColor,
            backgroundColor: "var(--background)",
            opacity: 0.9,
          }}
        >
          {label}
        </span>
      </Html>
    </group>
  );
}

/* ── Single animated edge ────────────────────────────────── */

function GraphEdge({
  a,
  b,
  lineColor,
  time,
}: {
  a: number;
  b: number;
  lineColor: string;
  time: React.RefObject<number>;
}) {
  const ref = useRef<THREE.BufferGeometry>(null);
  const positions = useRef(new Float32Array(6));

  useFrame(() => {
    if (!ref.current || time.current === undefined) return;
    const t = time.current;
    const nA = NODES[a];
    const nB = NODES[b];
    const buf = positions.current;

    buf[0] = nA.base[0] + Math.sin(t * 0.4 + a * 2.1) * 0.06;
    buf[1] = nA.base[1] + Math.cos(t * 0.35 + a * 1.7) * 0.07;
    buf[2] = nA.base[2] + Math.sin(t * 0.3 + a * 3.3) * 0.04;
    buf[3] = nB.base[0] + Math.sin(t * 0.4 + b * 2.1) * 0.06;
    buf[4] = nB.base[1] + Math.cos(t * 0.35 + b * 1.7) * 0.07;
    buf[5] = nB.base[2] + Math.sin(t * 0.3 + b * 3.3) * 0.04;

    const attr = ref.current.getAttribute("position") as THREE.BufferAttribute;
    attr.array.set(buf);
    attr.needsUpdate = true;
  });

  const nA = NODES[a];
  const nB = NODES[b];
  const initial = new Float32Array([...nA.base, ...nB.base]);

  return (
    <line>
      <bufferGeometry ref={ref}>
        <bufferAttribute
          attach="attributes-position"
          args={[initial, 3]}
          count={2}
        />
      </bufferGeometry>
      <lineBasicMaterial color={lineColor} transparent opacity={0.3} />
    </line>
  );
}

/* ── All edges ───────────────────────────────────────────── */

function GraphEdges({
  lineColor,
  time,
}: {
  lineColor: string;
  time: React.RefObject<number>;
}) {
  return (
    <>
      {EDGES.map(([a, b]) => (
        <GraphEdge
          key={`${a}-${b}`}
          a={a}
          b={b}
          lineColor={lineColor}
          time={time}
        />
      ))}
    </>
  );
}

/* ── Scene root ──────────────────────────────────────────── */

function Graph() {
  const isDark = useIsDark();
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);
  const { pointer } = useThree();

  const accentColor = isDark ? "#818cf8" : "#6366f1";
  const neutralColor = isDark ? "#a1a1aa" : "#71717a";
  const lineColor = isDark ? "#3f3f46" : "#d4d4d8";

  useFrame((_state, delta) => {
    timeRef.current += delta;

    if (!groupRef.current) return;
    /* Slow auto-rotation */
    groupRef.current.rotation.y += delta * 0.06;
    /* Subtle mouse parallax */
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      pointer.y * 0.08,
      0.03,
    );
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      -pointer.x * 0.05,
      0.03,
    );
  });

  return (
    <group ref={groupRef}>
      {NODES.map((node) => (
        <GraphNode
          key={node.id}
          base={node.base}
          accent={node.accent}
          label={node.label}
          accentColor={accentColor}
          neutralColor={neutralColor}
          time={timeRef}
          seed={node.id}
        />
      ))}
      <GraphEdges lineColor={lineColor} time={timeRef} />
    </group>
  );
}

/* ── Exported wrapper ────────────────────────────────────── */

export function HeroGraph() {
  return (
    <div className="pointer-events-none h-[320px] w-full sm:h-[380px] md:h-[420px]">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 3, 5]} intensity={0.6} />
        <Graph />
      </Canvas>
    </div>
  );
}
