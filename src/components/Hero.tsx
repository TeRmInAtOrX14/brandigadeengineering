import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function RotatingBox() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.3;
      mesh.current.rotation.y += delta * 0.5;
    }
  });
  return (
    <mesh ref={mesh} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0066FF" metalness={0.7} roughness={0.2} />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center bg-background pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4">
        {/* Left text */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.h1
            className="text-5xl md:text-7xl font-heading text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PRECISION THAT ENGINEERS TRUST
          </motion.h1>
          <motion.p
            className="text-xl font-body text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Calibration, Validation, and Metrology Solutions for Critical Equipment.
          </motion.p>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a href="#contact" className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition">
              Get a Quote
            </a>
            <a href="#services" className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent/10 transition">
              Explore Services
            </a>
          </motion.div>
          <motion.ul className="list-none space-y-2 text-sm text-secondary">
            {[
              'Pressure Gauge Calibration',
              'Sterilizer Validation',
              'Autoclave Validation',
              'Temperature Mapping',
              'ISO‑Compliant Solutions',
            ].map((txt) => (
              <li key={txt}>✓ {txt}</li>
            ))}
          </motion.ul>
        </div>
        {/* Right 3D gauge */}
        <div className="h-[400px] md:h-[600px]">
          <Canvas camera={{ position: [0, 0, 4] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <RotatingBox />
          </Canvas>
        </div>
      </div>
    </section>
  );
}
