import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './Scene';

function Dome() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.1;
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.08 + Math.sin(performance.now() * 0.001) * 0.04;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.6, 64, 64]} />
      <meshBasicMaterial color="#34d399" wireframe transparent opacity={0.1} />
    </mesh>
  );
}

function Core() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.3;
  });
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#34d399" emissive="#10b981" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[0.45, 0.45, 0.45]} />
        <meshStandardMaterial color="#5b9bff" emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.45, 0.45, 0.45]} />
        <meshStandardMaterial color="#c084fc" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function Threats() {
  const count = 16;
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((m, i) => {
      if (!m) return;
      const offset = (i / count) * Math.PI * 2;
      const phase = (t * 0.3 + offset) % (Math.PI * 2);
      const r = 4 - (phase / (Math.PI * 2)) * 2.5;
      m.position.x = Math.cos(offset + t * 0.1) * r;
      m.position.y = Math.sin(offset + t * 0.1) * r * 0.5;
      m.position.z = Math.sin(offset * 1.3 + t * 0.1) * r * 0.5;
    });
  });

  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
        >
          <icosahedronGeometry args={[0.06, 0]} />
          <meshStandardMaterial color="#f87171" emissive="#dc2626" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </>
  );
}

export function ShieldScene() {
  return (
    <Scene cameraPosition={[0, 0.4, 7]} cameraFov={50}>
      <Dome />
      <Core />
      <Threats />
    </Scene>
  );
}
