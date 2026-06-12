import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.5 * t),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      // Lenis does not have a destroy method, but cleanup can be added if needed.
    };
  }, []);

  return <>{children}</>;
}
