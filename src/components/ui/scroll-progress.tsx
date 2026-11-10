'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = totalScroll / windowHeight;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] pointer-events-none origin-left bg-gradient-to-r from-[#2563EB] via-[#38BDF8] to-[#2563EB]"
      style={{
        transform: `scaleX(${scrollProgress})`,
        transition: 'transform 70ms linear'
      }}
      aria-hidden="true"
    />
  );
}

