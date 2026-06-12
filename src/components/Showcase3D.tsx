import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function RotatingInstrument({ color = '#0066FF' }) {
  const mesh = useRef(null);
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <mesh ref={mesh} scale={1.2}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

export default function Showcase3D() {
  return (
    <section id="showcase" className="py-24 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-heading text-center mb-8">Interactive 3D Showcase</h2>
        <div className="h-[500px]">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <RotatingInstrument />
          </Canvas>
        </div>
        <motion.p
          className="mt-6 text-center text-sm text-accent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hover, scroll, or move your mouse to see subtle depth effects.
        </motion.p>
      </div>
    </section>
  );
}
