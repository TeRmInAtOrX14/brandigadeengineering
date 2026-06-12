'use client';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface InstrumentProps {
  color?: string;
  position?: [number, number, number];
  speed?: number;
}

function RotatingInstrument({ color = '#0066FF', position = [0, 0, 0], speed = 0.5 }: InstrumentProps) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * speed;
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    }
  });
  return (
    <mesh ref={mesh} position={position} scale={1.2}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial color={color} metalness={0.85} roughness={0.15} emissive={color} emissiveIntensity={0.05} />
    </mesh>
  );
}

export default function Showcase3D() {
  return (
    <section id="showcase" className="py-24 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase mb-3">Interactive</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
          >
            Precision in Motion
          </h2>
          <p className="mt-4 text-[#888] text-lg max-w-2xl mx-auto">
            Our instruments are built with engineering excellence. Watch them come alive.
          </p>
        </motion.div>

        <div className="h-[500px] rounded-2xl overflow-hidden" style={{ background: 'radial-gradient(ellipse at center, #0d1a2e 0%, #0B0B0B 70%)' }}>
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-3, 0, 3]} intensity={1.5} color="#0066FF" />
            <pointLight position={[3, 0, -3]} intensity={0.5} color="#004499" />
            <RotatingInstrument color="#0066FF" position={[0, 0, 0]} speed={0.4} />
          </Canvas>
        </div>

        <motion.p
          className="mt-6 text-center text-sm text-[#555]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Real-time 3D rendering powered by Three.js & React Three Fiber
        </motion.p>
      </div>
    </section>
  );
}
