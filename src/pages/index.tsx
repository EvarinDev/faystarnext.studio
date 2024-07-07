import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Section from '@/components/Section';
import { FloatingShape } from '@/components/FloatingShape';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from '@/components/Preloader';
import { Intro } from '@/components/Intro';
import { Description } from '@/components/Description';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const lenis = new Lenis()
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
  }, []);
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2200)
      }
    )()
  }, [])
  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Intro />
      <Description />
      <Section />
      <div className='h-screen'>
        <FloatingShape />
      </div>
    </main>
  );
}