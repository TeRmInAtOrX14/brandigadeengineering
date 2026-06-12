import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckCircleIcon } from '@radix-ui/react-icons';

const steps = [
  { title: 'Inspection', description: 'Thorough initial assessment of equipment.' },
  { title: 'Calibration', description: 'Precision adjustment to meet standards.' },
  { title: 'Validation', description: 'Confirm performance under real conditions.' },
  { title: 'Certification', description: 'Official documentation of compliance.' },
  { title: 'Reporting', description: 'Detailed reports for traceability.' },
  { title: 'Delivery', description: 'Final handover of calibrated equipment.' },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-heading text-center text-primary mb-12">Our Process</h2>
        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-accent translate-x-[-50%]"></div>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex items-center w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.2 }}
            >
              {/* Circle with icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white">
                <CheckCircleIcon className="w-6 h-6" />
              </div>
              {/* Content */}
              <div className="ml-6">
                <h3 className="text-xl font-heading text-primary">{step.title}</h3>
                <p className="text-sm text-secondary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
