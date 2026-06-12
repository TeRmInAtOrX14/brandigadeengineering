'use client';
import { motion } from 'framer-motion';
import {
  FaThermometerHalf,
  FaCogs,
  FaFlask,
  FaTools,
  FaVial,
  FaStethoscope,
  FaCheckCircle,
  FaClipboardList,
  FaWrench,
  FaTachometerAlt,
} from 'react-icons/fa';
import { ReactNode } from 'react';

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  { icon: <FaTachometerAlt className="w-8 h-8" />, title: 'Pressure Gauge Calibration', description: 'Precision calibration of all pressure instrumentation to ISO & NIST standards.' },
  { icon: <FaFlask className="w-8 h-8" />, title: 'Autoclave Validation', description: 'Complete IQ/OQ/PQ validation for all autoclave sterilization systems.' },
  { icon: <FaVial className="w-8 h-8" />, title: 'Sterilizer Validation', description: 'Comprehensive validation protocols for dry-heat and steam sterilizers.' },
  { icon: <FaThermometerHalf className="w-8 h-8" />, title: 'Temperature Mapping', description: 'High-accuracy thermal mapping for cold rooms, warehouses, and incubators.' },
  { icon: <FaCogs className="w-8 h-8" />, title: 'Instrument Calibration', description: 'Multi-parameter calibration for lab and industrial instruments.' },
  { icon: <FaStethoscope className="w-8 h-8" />, title: 'Metrology Services', description: 'Dimensional and physical metrology with full traceability.' },
  { icon: <FaWrench className="w-8 h-8" />, title: 'Preventive Maintenance', description: 'Scheduled maintenance programs to ensure equipment reliability.' },
  { icon: <FaCheckCircle className="w-8 h-8" />, title: 'Performance Qualification', description: 'PQ protocols demonstrating consistent equipment performance.' },
  { icon: <FaClipboardList className="w-8 h-8" />, title: 'Operational Qualification', description: 'OQ testing verifying equipment operates within defined limits.' },
  { icon: <FaTools className="w-8 h-8" />, title: 'Installation Qualification', description: 'IQ documentation confirming correct equipment installation.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0B]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
            Our Services
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              className="group p-7 bg-[#F5F7FA] rounded-2xl border border-transparent hover:border-[#0066FF] hover:bg-white transition-all duration-300 cursor-default"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}
              whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,102,255,0.12)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div className="flex flex-col space-y-4">
                <div className="w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B0B0B]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                  {svc.title}
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">{svc.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
