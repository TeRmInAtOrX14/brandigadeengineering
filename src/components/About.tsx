'use client';

import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ExplodedGauge() {
  const part1 = useRef<THREE.Mesh>(null);
  const part2 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (part1.current) part1.current.rotation.y += delta * 0.3;
    if (part2.current) part2.current.rotation.y -= delta * 0.2;
  });

  return (
    <group>
      {/* Part 1 - main body */}
      <mesh ref={part1} position={[-0.5, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Part 2 - face plate */}
      <mesh ref={part2} position={[0.5, 0, 0]}>
        <torusGeometry args={[0.55, 0.08, 16, 64]} />
        <meshStandardMaterial color="#0066FF" metalness={0.8} roughness={0.1} emissive="#0033AA" emissiveIntensity={0.3} />
      </mesh>
      {/* Part 3 - needle */}
      <mesh position={[0, 0.2, 0.2]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.05, 0.6, 0.02]} />
        <meshStandardMaterial color="#FF3333" metalness={0.7} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">
        {/* Text side */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B] leading-tight" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
            Engineering Accuracy.<br />Built on Trust.
          </h2>
          <p className="text-lg text-[#444] leading-relaxed">
            With decades of experience calibrating critical equipment across pharmaceutical, healthcare, and industrial sectors, Brandigade Engineering delivers precision you can rely on — backed by ISO-compliant processes and certified professionals.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            {['ISO 9001 Certified', '5000+ Instruments', '24h Response', 'GMP Compliant'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-medium border border-[#0066FF] text-[#0066FF] bg-[#0066FF]/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 3D side */}
        <motion.div
          className="h-[400px] rounded-2xl overflow-hidden bg-[#0B0B0B]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[2, 2, 2]} intensity={1.5} color="#ffffff" />
            <pointLight position={[-2, -2, 2]} intensity={0.8} color="#0066FF" />
            <ExplodedGauge />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
