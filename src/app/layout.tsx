import './globals.css';
import { Inter } from 'next/font/google';
import LenisProvider from '@/lib/lenis';
import { Metadata } from 'next';

// Google Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const interTight = Inter({ subsets: ['latin'], weight: '600', variable: '--font-inter-tight' });

export const metadata: Metadata = {
  title: 'Brandigade Engineering – Precision Calibration & Validation',
  description:
    'Premium engineering services: calibration, validation, metrology, HVAC, stability chambers, and ISO‑compliant testing for pharmaceutical, healthcare, and industrial sectors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-body bg-background text-primary antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
