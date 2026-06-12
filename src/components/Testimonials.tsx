'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Dr. Alice Morgan',
    title: 'Head of QA, PharmaCo',
    quote: 'Brandigade\'s calibration services are unmatched – precision you can trust.',
    initials: 'AM',
    color: '#0066FF',
  },
  {
    name: 'John Patel',
    title: 'Operations Manager, MedTech Ltd.',
    quote: 'Their validation process saved us weeks of downtime. Highly professional.',
    initials: 'JP',
    color: '#0044CC',
  },
  {
    name: 'Maria Silva',
    title: 'Lab Director, BioResearch',
    quote: 'Professional, fast, and always ISO‑compliant. Our go-to calibration partner.',
    initials: 'MS',
    color: '#0033AA',
  },
  {
    name: 'Ahmed Al-Hassan',
    title: 'QC Manager, Gulf Pharma',
    quote: 'From autoclave validation to temperature mapping – Brandigade delivers every time.',
    initials: 'AH',
    color: '#005CE6',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase mb-3">Testimonials</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0B0B0B]"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl border border-[#EBEBEB] bg-[#F5F7FA] hover:border-[#0066FF] hover:bg-white transition-all duration-300 flex flex-col justify-between"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,102,255,0.1)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-[#0066FF] text-sm">★</span>
                ))}
              </div>

              <p className="text-sm text-[#444] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-[#EBEBEB]">
                {/* Avatar with initials */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B0B0B]">{t.name}</p>
                  <p className="text-xs text-[#888]">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
