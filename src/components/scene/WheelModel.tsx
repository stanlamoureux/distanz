"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

const damp = (current: number, target: number, lambda: number, dt: number) =>
  current + (target - current) * (1 - Math.exp(-lambda * dt));

function TireTread({ radius, count }: { radius: number; count: number }) {
  const blocks = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2;
        return {
          position: [Math.cos(a) * radius, Math.sin(a) * radius, 0] as const,
          rotation: [0, 0, a] as const,
        };
      }),
    [count, radius],
  );

  return (
    <group>
      {blocks.map((block, i) => (
        <mesh key={i} position={block.position} rotation={block.rotation} castShadow>
          <boxGeometry args={[0.07, 0.16, 0.24]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.96} metalness={0} />
        </mesh>
      ))}
    </group>
  );
}

export function WheelModel({
  progress,
  reducedMotion,
}: {
  progress: RefObject<number>;
  reducedMotion: boolean;
}) {
  const group = useRef<Group>(null);
  const rotor = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!group.current || reducedMotion) return;
    const p = progress.current ?? 0;

    group.current.rotation.y = damp(
      group.current.rotation.y,
      0.4 + p * Math.PI * 1.6,
      4,
      delta,
    );
    group.current.rotation.x = damp(
      group.current.rotation.x,
      -0.06 + p * 0.2,
      4,
      delta,
    );
    group.current.position.y = damp(group.current.position.y, -p * 0.32, 4, delta);
    group.current.position.z = damp(group.current.position.z, -p * 0.65, 4, delta);

    if (rotor.current) {
      rotor.current.rotation.x = p * Math.PI * 8;
    }
  });

  return (
    <group ref={group} scale={1.62} position={[1.02, -0.08, 0]}>
      <group ref={rotor} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.78, 0.16, 32, 96]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.88} metalness={0.06} />
        </mesh>
        <TireTread radius={0.91} count={24} />
        <mesh>
          <torusGeometry args={[0.63, 0.05, 20, 72]} />
          <meshStandardMaterial color="#d9dee6" metalness={0.92} roughness={0.18} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.57, 0.57, 0.08, 48]} />
          <meshStandardMaterial color="#3a4048" metalness={0.75} roughness={0.28} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.34, 0.34, 0.24, 48]} />
          <meshStandardMaterial color="#22262c" metalness={0.82} roughness={0.22} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[0.2, 0.2, 0.28, 40]} />
          <meshStandardMaterial color="#121417" metalness={0.86} roughness={0.2} />
        </mesh>
        <mesh>
          <torusGeometry args={[0.29, 0.02, 12, 56]} />
          <meshStandardMaterial
            color="#c8f542"
            emissive="#c8f542"
            emissiveIntensity={3.2}
            roughness={0.25}
          />
        </mesh>
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i / 8) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(a) * 0.45, Math.sin(a) * 0.45, 0.13]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <cylinderGeometry args={[0.02, 0.02, 0.03, 8]} />
              <meshStandardMaterial color="#e6eaef" metalness={0.95} roughness={0.16} />
            </mesh>
          );
        })}
        <mesh position={[0, 0, 0.15]}>
          <cylinderGeometry args={[0.075, 0.075, 0.06, 24]} />
          <meshStandardMaterial color="#c8f542" emissive="#c8f542" emissiveIntensity={2} />
        </mesh>
      </group>

      <mesh position={[-0.21, 0.44, 0]} rotation={[0, 0, 0.2]} castShadow>
        <boxGeometry args={[0.06, 0.86, 0.1]} />
        <meshStandardMaterial color="#2a2e34" metalness={0.78} roughness={0.26} />
      </mesh>
      <mesh position={[0.21, 0.44, 0]} rotation={[0, 0, -0.2]} castShadow>
        <boxGeometry args={[0.06, 0.86, 0.1]} />
        <meshStandardMaterial color="#2a2e34" metalness={0.78} roughness={0.26} />
      </mesh>
      <mesh position={[0, 0.2, 0]} castShadow>
        <boxGeometry args={[0.44, 0.08, 0.1]} />
        <meshStandardMaterial color="#3a4048" metalness={0.74} roughness={0.24} />
      </mesh>
      <mesh position={[0, 0.9, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.44, 16]} />
        <meshStandardMaterial color="#e2e7ee" metalness={0.94} roughness={0.14} />
      </mesh>
      <mesh position={[0.17, 0.64, 0]} castShadow>
        <boxGeometry args={[0.2, 0.4, 0.16]} />
        <meshStandardMaterial color="#1c1f24" metalness={0.5} roughness={0.38} />
      </mesh>
      <mesh position={[0.17, 0.64, 0.085]}>
        <boxGeometry args={[0.13, 0.3, 0.012]} />
        <meshStandardMaterial color="#c8f542" emissive="#c8f542" emissiveIntensity={2.4} />
      </mesh>
      <mesh position={[0, 1.14, 0.03]} rotation={[0.3, 0, 0]} castShadow>
        <boxGeometry args={[0.3, 0.1, 0.44]} />
        <meshStandardMaterial color="#1a1d22" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0, 1.2, 0.2]} rotation={[0.12, 0, 0]} castShadow>
        <boxGeometry args={[0.22, 0.05, 0.18]} />
        <meshStandardMaterial color="#dfe4ea" metalness={0.9} roughness={0.18} />
      </mesh>
    </group>
  );
}
