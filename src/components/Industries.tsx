import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, CodeIcon, DesktopIcon, FactoryIcon, FlaskIcon } from '@radix-ui/react-icons';

const sectors = [
  { icon: <DesktopIcon className='w-8 h-8' />, label: 'Pharmaceutical' },
  { icon: <FactoryIcon className='w-8 h-8' />, label: 'Medical Devices' },
  { icon: <FlaskIcon className='w-8 h-8' />, label: 'Healthcare' },
  { icon: <CalendarIcon className='w-8 h-8' />, label: 'Laboratories' },
  { icon: <ArrowRightIcon className='w-8 h-8' />, label: 'Food Processing' },
  { icon: <CodeIcon className='w-8 h-8' />, label: 'Biotechnology' },
  { icon: <DesktopIcon className='w-8 h-8' />, label: 'Manufacturing' },
  { icon: <FactoryIcon className='w-8 h-8' />, label: 'Research Facilities' },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-heading text-center text-primary mb-8">Industries Served</h2>
        <div className="flex overflow-x-auto gap-6 py-4 scrollbar-hide">
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              className="min-w-[200px] bg-white/80 backdrop-blur-md rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-accent mb-2">{s.icon}</div>
              <p className="font-heading text-primary">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
