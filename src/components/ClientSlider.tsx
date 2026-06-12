'use client';
import { motion } from 'framer-motion';

const clients = [
  'PharmaCo Global',
  'MedTech Solutions',
  'BioResearch Labs',
  'HealthCore Systems',
  'PharmaLab Inc.',
  'Steril-Tech GmbH',
  'BioValida Corp.',
  'ISO Precision Ltd.',
];

export default function ClientSlider() {
  return (
    <section id="clients" className="py-16 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <p className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase text-center mb-2">Trusted By</p>
        <h2
          className="text-3xl font-bold text-center text-[#0B0B0B]"
          style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
        >
          Industry Leaders Worldwide
        </h2>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to right, #F5F7FA, transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: 'linear-gradient(to left, #F5F7FA, transparent)' }} />

        <motion.div
          className="flex gap-8 items-center w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {clients.concat(clients).map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 py-4 bg-white rounded-xl border border-[#E5E5E5] shadow-sm hover:border-[#0066FF] hover:shadow-md transition-all duration-300"
              style={{ minWidth: '180px' }}
            >
              <p className="text-sm font-bold text-[#333] text-center tracking-wide whitespace-nowrap">
                {name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
