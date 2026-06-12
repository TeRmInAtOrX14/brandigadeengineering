import { motion } from 'framer-motion';

const certifications = [
  { title: 'ISO 9001', description: 'Quality Management System' },
  { title: 'ISO 17025', description: 'Testing & Calibration Labs' },
  { title: 'GMP Standards', description: 'Good Manufacturing Practice' },
  { title: 'FDA Compliance', description: 'Regulatory compliance' },
  { title: 'WHO Guidelines', description: 'Global health standards' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-heading text-center text-primary mb-12">Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((c, i) => (
            <motion.div
              key={i}
              className="glass p-6 text-center border border-transparent hover:border-accent"
              whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(0,102,255,0.6)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-heading text-primary mb-2">{c.title}</h3>
              <p className="text-sm text-secondary">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
