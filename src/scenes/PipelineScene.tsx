import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Scene } from './Scene';

function Stations() {
  const positions = useMemo(
    () => [-4.5, -2.25, 0, 2.25, 4.5].map((x) => new THREE.Vector3(x, 0, 0)),
    [],
  );
  const colors = ['#5b9bff', '#a78bfa', '#fb923c', '#34d399', '#facc15'];

  return (
    <group>
      {positions.map((p, i) => (
        <group key={i} position={p}>
          <mesh>
            <torusGeometry args={[0.55, 0.06, 16, 64]} />
            <meshStandardMaterial color={colors[i]} emissive={colors[i]} emissiveIntensity={0.6} />
          </mesh>
          <mesh>
            <circleGeometry args={[0.5, 32]} />
            <meshBasicMaterial color={colors[i]} transparent opacity={0.06} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Travelers() {
  const count = 8;
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const offsets = useMemo(() => Array.from({ length: count }, () => Math.random()), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    refs.current.forEach((m, i) => {
      if (!m) return;
      const phase = (t * 0.15 + offsets[i]) % 1;
      m.position.x = -5 + phase * 10;
      m.scale.setScalar(0.8 + Math.sin(phase * Math.PI) * 0.4);
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
          <icosahedronGeometry args={[0.12, 0]} />
          <meshStandardMaterial color="#ffffff" emissive="#8ab4ff" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </>
  );
}

function Track() {
  const points = [new THREE.Vector3(-5, 0, 0), new THREE.Vector3(5, 0, 0)];
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <primitive
      object={
        new THREE.Line(
          geo,
          new THREE.LineBasicMaterial({ color: '#5b9bff', transparent: true, opacity: 0.25 }),
        )
      }
    />
  );
}

export function PipelineScene() {
  return (
    <Scene cameraPosition={[0, 2.2, 7]} cameraFov={48}>
      <Track />
      <Stations />
      <Travelers />
    </Scene>
  );
}
