'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
  '/client_logo1.png',
  '/client_logo1.png',
  '/client_logo1.png',
  '/client_logo1.png',
  '/client_logo1.png',
];

export default function ClientSlider() {
  return (
    <section id="clients" className="py-16 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-[#0B0B0B]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
          Trusted By Industry Leaders
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-12 items-center w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          {clientLogos.concat(clientLogos).map((src, i) => (
            <div key={i} className="flex-shrink-0 w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300">
              <Image src={src} alt={`Client ${i + 1}`} fill className="object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
