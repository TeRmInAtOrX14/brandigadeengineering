'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Canvas = dynamic(
  () => import('@react-three/fiber').then((mod) => mod.Canvas),
  { ssr: false }
);

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

        {/* 3D Canvas - desktop only */}
        <div
          className="h-[500px] rounded-2xl overflow-hidden hidden sm:block"
          style={{ background: 'radial-gradient(ellipse at center, #0d1a2e 0%, #0B0B0B 70%)' }}
        >
          <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-3, 0, 3]} intensity={1.5} color="#0066FF" />
            <pointLight position={[3, 0, -3]} intensity={0.5} color="#004499" />
            <RotatingInstrument color="#0066FF" position={[0, 0, 0]} speed={0.4} />
          </Canvas>
        </div>

        {/* Mobile fallback - animated stat cards */}
        <div className="sm:hidden grid grid-cols-2 gap-4">
          {[
            { label: 'Calibrations', value: '5,000+' },
            { label: 'Accuracy Rate', value: '99.9%' },
            { label: 'ISO Standards', value: '3 Active' },
            { label: 'Industries', value: '8+' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="p-6 rounded-2xl text-center"
              style={{ background: 'radial-gradient(ellipse at center, #0d1a2e, #0B0B0B)', border: '1px solid #1a3a5c' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-2xl font-bold text-[#0066FF]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                {item.value}
              </div>
              <div className="text-xs text-[#666] mt-1">{item.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-center text-sm text-[#555]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Real-time 3D rendering powered by Three.js & React Three Fiber
        </motion.p>
      </div>
    </section>
  );
}
