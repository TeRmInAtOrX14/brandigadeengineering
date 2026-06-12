'use client';
import { motion } from 'framer-motion';
import {
  FaThermometerHalf,
  FaCogs,
  FaFlask,
  FaTools,
  FaVial,
  FaCheckCircle,
  FaClipboardList,
  FaWrench,
  FaTachometerAlt,
  FaWind,
  FaSnowflake,
  FaFilter,
  FaFan,
  FaFireAlt,
  FaBoxOpen,
  FaMicroscope,
  FaChartLine,
  FaRuler,
} from 'react-icons/fa';
import { ReactNode } from 'react';

interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
  category: string;
}

const services: ServiceItem[] = [
  // ── Calibration & Validation ──
  { category: 'Calibration & Validation', icon: <FaTachometerAlt />, title: 'Pressure Gauge Calibration', description: 'Precision calibration of all pressure instrumentation to ISO & NIST standards.' },
  { category: 'Calibration & Validation', icon: <FaFlask />, title: 'Autoclave Validation', description: 'Complete IQ/OQ/PQ validation for all autoclave sterilization systems.' },
  { category: 'Calibration & Validation', icon: <FaVial />, title: 'Sterilizer Validation', description: 'Comprehensive validation protocols for dry-heat and steam sterilizers.' },
  { category: 'Calibration & Validation', icon: <FaThermometerHalf />, title: 'Temperature Mapping', description: 'High-accuracy thermal mapping for cold rooms, warehouses, and incubators.' },
  { category: 'Calibration & Validation', icon: <FaCogs />, title: 'Instrument Calibration', description: 'Multi-parameter calibration for lab and industrial instruments.' },
  { category: 'Calibration & Validation', icon: <FaRuler />, title: 'Metrology Services', description: 'Dimensional and physical metrology with full traceability to national standards.' },
  { category: 'Calibration & Validation', icon: <FaWrench />, title: 'Preventive Maintenance', description: 'Scheduled maintenance programs to ensure equipment reliability and longevity.' },
  { category: 'Calibration & Validation', icon: <FaCheckCircle />, title: 'Performance Qualification', description: 'PQ protocols demonstrating consistent equipment performance under real conditions.' },
  { category: 'Calibration & Validation', icon: <FaClipboardList />, title: 'Operational Qualification', description: 'OQ testing verifying equipment operates within defined limits.' },
  { category: 'Calibration & Validation', icon: <FaTools />, title: 'Installation Qualification', description: 'IQ documentation confirming correct equipment installation per design specs.' },

  // ── HVAC & Climate Control ──
  { category: 'HVAC & Climate Control', icon: <FaWind />, title: 'HVAC System Qualification', description: 'Full IQ/OQ/PQ validation of HVAC systems in pharmaceutical & cleanroom environments.' },
  { category: 'HVAC & Climate Control', icon: <FaSnowflake />, title: 'Air Conditioner Calibration & Service', description: 'Precision calibration, servicing, and performance testing of AC units and chiller systems.' },
  { category: 'HVAC & Climate Control', icon: <FaFilter />, title: 'Filter Integrity Testing (HEPA/ULPA)', description: 'PAO challenge testing and integrity verification for HEPA and ULPA filter systems.' },
  { category: 'HVAC & Climate Control', icon: <FaFan />, title: 'Air Flow & Velocity Mapping', description: 'Measurement and mapping of airflow, velocity, and air changes per hour (ACH) in critical areas.' },
  { category: 'HVAC & Climate Control', icon: <FaThermometerHalf />, title: 'Cleanroom Environmental Monitoring', description: 'Temperature, humidity, and particle count monitoring for GMP-compliant cleanrooms.' },
  { category: 'HVAC & Climate Control', icon: <FaFireAlt />, title: 'Differential Pressure Testing', description: 'Verification of room pressure differentials to prevent contamination cross-flow.' },

  // ── Stability Chambers ──
  { category: 'Stability Chambers', icon: <FaBoxOpen />, title: 'Stability Chamber Manufacturing', description: 'Custom-built ICH-compliant stability chambers (25°C/60% RH, 40°C/75% RH) for pharmaceutical storage.' },
  { category: 'Stability Chambers', icon: <FaMicroscope />, title: 'Stability Chamber Qualification', description: 'Full IQ/OQ/PQ and temperature/humidity mapping of stability chambers per ICH Q1A guidelines.' },
  { category: 'Stability Chambers', icon: <FaChartLine />, title: 'Stability Chamber Calibration', description: 'Calibration of temperature sensors, humidity probes, and controllers to traceable standards.' },
];

const categories = ['Calibration & Validation', 'HVAC & Climate Control', 'Stability Chambers'];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  'Calibration & Validation': { bg: '#0066FF', text: '#0066FF', border: '#0066FF' },
  'HVAC & Climate Control':   { bg: '#00A3FF', text: '#00A3FF', border: '#00A3FF' },
  'Stability Chambers':       { bg: '#6B3FFF', text: '#6B3FFF', border: '#6B3FFF' },
};

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
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0B0B0B]"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
          >
            Our Services
          </h2>
          <p className="mt-4 text-lg text-[#555] max-w-2xl mx-auto">
            From precision calibration to custom stability chamber manufacturing — we cover every critical requirement your facility needs.
          </p>
        </motion.div>

        {categories.map((cat, catIdx) => {
          const col = categoryColors[cat];
          const catServices = services.filter((s) => s.category === cat);
          return (
            <div key={cat} className={catIdx > 0 ? 'mt-16' : ''}>
              {/* Category header */}
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="h-0.5 w-8 rounded-full"
                  style={{ backgroundColor: col.bg }}
                />
                <h3
                  className="text-xl font-bold"
                  style={{ color: col.text, fontFamily: 'Inter Tight, Inter, sans-serif' }}
                >
                  {cat}
                </h3>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((svc, i) => (
                  <motion.div
                    key={svc.title}
                    className="group p-7 bg-[#F5F7FA] rounded-2xl border border-transparent hover:bg-white transition-all duration-300 cursor-default"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
                    whileHover={{
                      y: -6,
                      borderColor: col.border,
                      boxShadow: `0 12px 40px ${col.bg}1A`,
                    }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ delay: i * 0.06, duration: 0.5 }}
                  >
                    <div className="flex flex-col space-y-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-300"
                        style={{
                          backgroundColor: `${col.bg}1A`,
                          color: col.text,
                        }}
                      >
                        {svc.icon}
                      </div>
                      <h4
                        className="text-base font-bold text-[#0B0B0B]"
                        style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
                      >
                        {svc.title}
                      </h4>
                      <p className="text-sm text-[#555] leading-relaxed">{svc.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
