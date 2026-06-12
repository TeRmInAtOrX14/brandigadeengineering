'use client';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PressureGauge3D() {
  const gaugeRef = useRef<THREE.Group>(null);
  const needleRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (gaugeRef.current) {
      gaugeRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.3;
    }
    if (needleRef.current) {
      // Needle oscillates between positions
      needleRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.8) * 0.8 - 0.5;
    }
  });

  return (
    <group ref={gaugeRef}>
      {/* Gauge body - main cylinder */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 0.2, 64]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.05} />
      </mesh>
      {/* Outer ring */}
      <mesh position={[0, 0, 0.05]}>
        <torusGeometry args={[1.2, 0.08, 16, 64]} />
        <meshStandardMaterial color="#888" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Face plate */}
      <mesh position={[0, 0, 0.12]}>
        <cylinderGeometry args={[1.1, 1.1, 0.02, 64]} />
        <meshStandardMaterial color="#F5F5F5" metalness={0.1} roughness={0.5} />
      </mesh>
      {/* Blue accent ring */}
      <mesh position={[0, 0, 0.14]}>
        <torusGeometry args={[0.9, 0.04, 16, 64]} />
        <meshStandardMaterial color="#0066FF" metalness={0.8} roughness={0.1} emissive="#0033AA" emissiveIntensity={0.5} />
      </mesh>
      {/* Needle */}
      <mesh ref={needleRef} position={[0, 0.3, 0.18]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.04, 0.7, 0.02]} />
        <meshStandardMaterial color="#FF2222" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Center cap */}
      <mesh position={[0, 0, 0.18]}>
        <cylinderGeometry args={[0.1, 0.1, 0.06, 32]} />
        <meshStandardMaterial color="#0066FF" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-white pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
        {/* Left text */}
        <div className="flex flex-col justify-center space-y-8">
          <motion.p
            className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ISO-Compliant Engineering
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-[#0B0B0B] leading-tight tracking-tight"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            PRECISION<br />
            <span className="text-[#0066FF]">THAT</span><br />
            ENGINEERS<br />
            TRUST
          </motion.h1>
          <motion.p
            className="text-xl text-[#444] max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Calibration, Validation, and Metrology Solutions for Critical Equipment.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <motion.a
              href="#contact"
              id="hero-cta-quote"
              className="px-8 py-4 bg-[#0066FF] text-white font-semibold rounded-xl text-base"
              whileHover={{ boxShadow: '0 0 30px rgba(0,102,255,0.45)', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Quote
            </motion.a>
            <motion.a
              href="#services"
              id="hero-cta-services"
              className="px-8 py-4 border-2 border-[#0066FF] text-[#0066FF] font-semibold rounded-xl text-base hover:bg-[#0066FF]/5 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Services
            </motion.a>
          </motion.div>
          <motion.ul
            className="list-none space-y-2 text-sm text-[#555]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {[
              'Pressure Gauge Calibration',
              'Sterilizer Validation',
              'Autoclave Validation',
              'Temperature Mapping',
              'ISO‑Compliant Solutions',
            ].map((txt) => (
              <li key={txt} className="flex items-center gap-2">
                <span className="text-[#0066FF] font-bold">✓</span>
                {txt}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Right 3D gauge */}
        <motion.div
          className="h-[500px] md:h-[650px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.5} />
            <pointLight position={[-3, -3, 3]} intensity={0.8} color="#0066FF" />
            <PressureGauge3D />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
