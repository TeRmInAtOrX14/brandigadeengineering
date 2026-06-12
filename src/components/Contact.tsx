'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  'Pressure Gauge Calibration',
  'Autoclave Validation',
  'Sterilizer Validation',
  'Temperature Mapping',
  'Instrument Calibration',
  'Metrology Services',
  'Preventive Maintenance',
  'Other',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase">Get In Touch</p>
          <h2 className="text-5xl font-bold text-[#0B0B0B] leading-tight" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
            Request a<br />
            <span className="text-[#0066FF]">Quote</span>
          </h2>
          <p className="text-lg text-[#444] leading-relaxed max-w-md">
            Our team of calibration experts is ready to support your facility with precision, speed, and full ISO compliance.
          </p>
          <div className="space-y-3 pt-4">
            {[
              { label: 'Email', value: 'info@brandigade.com' },
              { label: 'Phone', value: '+1 (800) 555-0199' },
              { label: 'Hours', value: 'Mon–Fri, 8am – 6pm' },
            ].map((item) => (
              <div key={item.label} className="flex gap-3 items-center text-[#333]">
                <span className="w-16 text-sm font-semibold text-[#0066FF]">{item.label}</span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {submitted ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0066FF]/10 flex items-center justify-center mx-auto text-[#0066FF] text-3xl">✓</div>
              <h3 className="text-2xl font-bold text-[#0B0B0B]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
                Thank You!
              </h3>
              <p className="text-[#555]">We&apos;ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { id: 'contact-name', name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Smith' },
                  { id: 'contact-company', name: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp' },
                  { id: 'contact-email', name: 'email', label: 'Email', type: 'email', placeholder: 'john@company.com' },
                  { id: 'contact-phone', name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (555) 000-0000' },
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
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD] bg-white text-sm text-[#0B0B0B] placeholder-[#AAA] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
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
                  className="w-full px-4 py-3 rounded-xl border border-[#DDD] bg-white text-sm text-[#0B0B0B] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all"
                >
                  <option value="">Select a service...</option>
                  {services.map((s) => (
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
                  rows={5}
                  placeholder="Describe your calibration or validation needs..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#DDD] bg-white text-sm text-[#0B0B0B] placeholder-[#AAA] focus:outline-none focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 transition-all resize-none"
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
