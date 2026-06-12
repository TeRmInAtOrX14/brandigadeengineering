import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { end: 5000, suffix: '+', label: 'Equipment Calibrated' },
  { end: 98, suffix: '%', label: 'Customer Satisfaction' },
  { end: 24, suffix: ' Hours', label: 'Response Time' },
  { end: 100, suffix: '%', label: 'Quality Compliance' },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-heading text-center text-primary mb-12">Why Choose Brandigade</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="text-5xl font-heading text-accent mb-2">
                <CountUp end={s.end} suffix={s.suffix} duration={3} />
              </div>
              <p className="text-lg text-secondary font-body">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
