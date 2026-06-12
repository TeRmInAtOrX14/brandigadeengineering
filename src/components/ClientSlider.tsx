import { motion } from 'framer-motion';
import Image from 'next/image';
import brandigadeLogo from '@/public/brandigade_logo1.png'; // generated logo

const clientLogos = [
  '/client_logo1.png',
  '/client_logo1.png',
  '/client_logo1.png',
  '/client_logo1.png',
  '/client_logo1.png',
];

export default function ClientSlider() {
  return (
    <section id="clients" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center text-primary mb-8">Our Clients</h2>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          >
            {clientLogos.concat(clientLogos).map((src, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-12 relative">
                <Image src={src} alt={`Client ${i}`} fill className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
