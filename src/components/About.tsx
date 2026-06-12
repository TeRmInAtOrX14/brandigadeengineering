import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function ExplodedGauge() {
  const parts = useRef([]);
  useFrame((_, delta) => {
    if (parts.current) {
      parts.current.forEach((p, i) => {
        if (p) p.rotation.y += delta * 0.2;
      });
    }
  });
  return (
    <group>
      {/* Part 1 */}
      <mesh ref={el => (parts.current[0] = el)} position={[-0.6, 0, 0]}>
        <boxGeometry args={[0.4, 0.8, 0.2]} />
        <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Part 2 */}
      <mesh ref={el => (parts.current[1] = el)} position={[0.6, 0, 0]}>
        <boxGeometry args={[0.4, 0.8, 0.2]} />
        <meshStandardMaterial color="#222222" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
        {/* Text side */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-heading text-primary">Engineering Accuracy. Built on Trust.</h2>
          <p className="text-lg text-secondary">
            With decades of experience calibrating critical equipment, Brandigade delivers precision you can rely on.
          </p>
        </motion.div>
        {/* 3D side */}
        <motion.div
          className="h-[400px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Canvas camera={{ position: [0, 0, 3] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 2, 2]} intensity={1} />
            <ExplodedGauge />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}
