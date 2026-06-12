import { motion } from 'framer-motion';
import { FaGauge, FaThermometerHalf, FaCogs, FaFlask, FaTools } from 'react-icons/fa';

const services = [
  { icon: <FaGauge className='w-8 h-8' />, title: 'Pressure Gauge Calibration' },
  { icon: <FaThermometerHalf className='w-8 h-8' />, title: 'Autoclave Validation' },
  { icon: <FaCogs className='w-8 h-8' />, title: 'Sterilizer Validation' },
  { icon: <FaFlask className='w-8 h-8' />, title: 'Temperature Mapping' },
  { icon: <FaTools className='w-8 h-8' />, title: 'Instrument Calibration' },
  { icon: <FaTools className='w-8 h-8' />, title: 'Metrology Services' },
  { icon: <FaTools className='w-8 h-8' />, title: 'Preventive Maintenance' },
  { icon: <FaTools className='w-8 h-8' />, title: 'Performance Qualification' },
  { icon: <FaTools className='w-8 h-8' />, title: 'Operational Qualification' },
  { icon: <FaTools className='w-8 h-8' />, title: 'Installation Qualification' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-heading text-center text-primary mb-12">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-transparent hover:border-accent"
              whileHover={{ y: -5, borderColor: '#0066FF' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-accent">{svc.icon}</div>
                <h3 className="font-heading text-primary">{svc.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
