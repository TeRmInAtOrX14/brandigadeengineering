'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { href: 'https://linkedin.com', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: <FaTwitter />, label: 'Twitter' },
  { href: 'https://facebook.com', icon: <FaFacebook />, label: 'Facebook' },
  { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#EBEBEB] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#0B0B0B]" style={{ fontFamily: 'Inter Tight, Inter, sans-serif' }}>
              Brandigade<span className="text-[#0066FF]">.</span>
            </h3>
            <p className="text-sm text-[#666] leading-relaxed max-w-xs">
              Precision calibration, validation, and metrology services for critical equipment across regulated industries.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#0B0B0B] tracking-widest uppercase">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#555] hover:text-[#0066FF] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-[#0B0B0B] tracking-widest uppercase">Contact</h4>
            <div className="space-y-2 text-sm text-[#555]">
              <p>info@brandigade.com</p>
              <p>+1 (800) 555-0199</p>
              <p>Mon–Fri, 8am – 6pm EST</p>
            </div>
            {/* Social */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#DDD] flex items-center justify-center text-[#555] hover:border-[#0066FF] hover:text-[#0066FF] transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#EBEBEB] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#999]">
            © {new Date().getFullYear()} Brandigade Engineering. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-[#999] hover:text-[#0066FF] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-[#999] hover:text-[#0066FF] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
