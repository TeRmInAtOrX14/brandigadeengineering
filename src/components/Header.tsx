'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { useState, useEffect } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#industries', label: 'Industries' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid #E5E5E5' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-24 w-[350px]">
            <Image
              src="/eng.png"
              alt="Brandigade Engineering"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-[#333] hover:text-[#0066FF] transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+923172828003"
            className="text-sm font-semibold text-[#0066FF] hover:underline"
          >
            +92 317 2828003
          </a>
          <motion.a
            href="#contact"
            id="header-cta"
            className="px-5 py-2.5 bg-[#0066FF] text-white text-sm font-semibold rounded-xl"
            whileHover={{ boxShadow: '0 0 20px rgba(0,102,255,0.4)', scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Quote
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[#F5F7FA] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiOutlineX className="w-6 h-6 text-[#0B0B0B]" /> : <HiOutlineMenu className="w-6 h-6 text-[#0B0B0B]" />}
        </button>
      </nav>

      {/* Mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-t border-[#E5E5E5] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-[#333] hover:text-[#0066FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-[#E5E5E5]">
                <a
                  href="tel:+923172828003"
                  className="block text-base font-bold text-[#0066FF]"
                >
                  📞 +92 317 2828003
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-3 bg-[#0066FF] text-white font-semibold rounded-xl"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
