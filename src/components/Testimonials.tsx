'use client';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

const stats = [
  { val: '5000+', label: 'Instruments Calibrated' },
  { val: '98%', label: 'Customer Satisfaction' },
  { val: '24h', label: 'Response Time' },
  { val: '100%', label: 'ISO Compliant' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold tracking-widest text-[#0066FF] uppercase mb-3">Our Track Record</p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#0B0B0B]"
            style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
          >
            Trusted by the Industry
          </h2>
          <p className="mt-4 text-lg text-[#555] max-w-xl mx-auto">
            Years of delivering precision calibration, validation, and engineering services across regulated industries.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="bg-white rounded-2xl p-8 text-center border border-[#EBEBEB]"
              style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,102,255,0.1)', borderColor: '#0066FF' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-2"
                style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
              >
                {s.val}
              </div>
              <p className="text-sm text-[#666] font-medium">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Star rating + CTA */}
        <motion.div
          className="bg-white rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-8 border border-[#EBEBEB]"
          style={{ boxShadow: '0 4px 30px rgba(0,0,0,0.05)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex justify-center md:justify-start gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#0066FF] text-xl" />
              ))}
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-[#0B0B0B]"
              style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}
            >
              Have you worked with us?
            </h3>
            <p className="text-[#555] text-base max-w-md">
              We value every client's feedback. Share your experience and help others discover the Brandigade difference.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <motion.a
              href="mailto:info@brandigade.com?subject=Review for Brandigade Engineering"
              id="leave-review-btn"
              className="flex items-center gap-2 px-8 py-4 bg-[#0066FF] text-white font-bold text-base rounded-xl whitespace-nowrap"
              whileHover={{ boxShadow: '0 0 30px rgba(0,102,255,0.4)', scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <HiOutlineChatAlt2 className="text-xl" />
              Leave a Review
            </motion.a>
            <p className="text-xs text-[#AAA]">We read every message</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
