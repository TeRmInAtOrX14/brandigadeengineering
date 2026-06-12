'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';

const serviceOptions = [
  'Pressure Gauge Calibration',
  'Autoclave Validation',
  'Sterilizer Validation',
  'Temperature Mapping',
  'Instrument Calibration',
  'Metrology Services',
  'Preventive Maintenance',
  'HVAC System Qualification',
  'Air Conditioner Calibration & Service',
  'Filter Integrity Testing (HEPA/ULPA)',
  'Air Flow & Velocity Mapping',
  'Cleanroom Environmental Monitoring',
  'Differential Pressure Testing',
  'Stability Chamber Manufacturing',
  'Stability Chamber Qualification',
  'Stability Chamber Calibration',
  'Other',
];

const contactInfo = [
  {
    icon: <FaPhone />,
    label: 'Phone',
    value: '+92 317 2828003',
    href: 'tel:+923172828003',
  },
  {
    icon: <FaWhatsapp />,
    label: 'WhatsApp',
    value: '+92 317 2828003',
    href: 'https://wa.me/923172828003',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'info@brandigade.com',
    href: 'mailto:info@brandigade.com',
  },
  {
    icon: <FaClock />,
    label: 'Hours',
    value: 'Mon–Sat, 9am – 6pm',
    href: null,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase">Get In Touch</p>
            <h2
              className="text-5xl font-bold text-[#0B0B0B] leading-tight"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
            >
              Request a<br />
              <span className="text-[#0066FF]">Quote</span>
            </h2>
            <p className="text-lg text-[#444] leading-relaxed max-w-md">
              Our team of calibration and HVAC experts is ready to support your facility with precision, speed, and full ISO compliance.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#AAA] uppercase tracking-wide">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-[#0B0B0B] hover:text-[#0066FF] transition-colors"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[#0B0B0B]">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp quick CTA */}
          <motion.a
            href="https://wa.me/923172828003"
            target="_blank"
            rel="noopener noreferrer"
            id="whatsapp-cta"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-xl text-sm"
            whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(37,211,102,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </motion.a>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {submitted ? (
            <div className="text-center py-20 space-y-4 bg-white rounded-3xl border border-[#EBEBEB] p-10"
              style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}>
              <div className="w-16 h-16 rounded-full bg-[#0066FF]/10 flex items-center justify-center mx-auto text-[#0066FF] text-3xl">
                ✓
              </div>
              <h3
                className="text-2xl font-bold text-[#0B0B0B]"
                style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
              >
                Thank You!
              </h3>
              <p className="text-[#555]">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-white rounded-3xl p-8 border border-[#EBEBEB]"
              style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { id: 'contact-name', name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                  { id: 'contact-company', name: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' },
                  { id: 'contact-email', name: 'email', label: 'Email', type: 'email', placeholder: 'john@company.com' },
                  { id: 'contact-phone', name: 'phone', label: 'Phone', type: 'tel', placeholder: '+92 300 0000000' },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-1.5">
                    <label htmlFor={field.id} className="text-sm font-semibold text-[#333]">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD] bg-[#F9F9F9] text-sm text-[#0B0B0B] placeholder-[#AAA] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 focus:bg-white transition-all"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-service" className="text-sm font-semibold text-[#333]">
                  Service Needed
                </label>
                <select
                  id="contact-service"
                  name="service"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#DDD] bg-[#F9F9F9] text-sm text-[#0B0B0B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 focus:bg-white transition-all"
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-message" className="text-sm font-semibold text-[#333]">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Describe your requirements..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#DDD] bg-[#F9F9F9] text-sm text-[#0B0B0B] placeholder-[#AAA] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 focus:bg-white transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                id="contact-submit"
                className="w-full py-4 rounded-xl bg-[#0066FF] text-white font-bold text-base tracking-wide"
                whileHover={{ boxShadow: '0 0 30px rgba(0,102,255,0.45)', scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                Submit Request
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
