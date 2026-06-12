'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dr. Alice Morgan',
    title: 'Head of QA, PharmaCo',
    quote: 'Brandigade’s calibration services are unmatched – precision you can trust.',
    avatar: '/client_logo1.png',
  },
  {
    name: 'John Patel',
    title: 'Operations Manager, MedTech Ltd.',
    quote: 'Their validation process saved us weeks of downtime.',
    avatar: '/client_logo1.png',
  },
  {
    name: 'Maria Silva',
    title: 'Lab Director, BioResearch',
    quote: 'Professional, fast, and always ISO‑compliant.',
    avatar: '/client_logo1.png',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-heading text-center text-primary mb-12">What Our Clients Say</h2>
        <div className="relative overflow-hidden h-64">
          <motion.div
            className="flex gap-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
          >
            {testimonials.concat(testimonials).map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] glass p-6 flex flex-col justify-between"
              >
                <p className="text-lg text-secondary mb-4">“{t.quote}”</p>
                <div className="flex items-center mt-4">
                  <Image src={t.avatar} alt={t.name} width={48} height={48} className="rounded-full mr-3" />
                  <div>
                    <p className="font-heading text-primary">{t.name}</p>
                    <p className="text-sm text-secondary">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
