'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Loading({ onComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const percentTextRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const complete = () => {
      if (completedRef.current) return;
      completedRef.current = true;
      if (onComplete) onComplete();
    };

    const fallbackTimer = window.setTimeout(complete, 4500);

    const tl = gsap.timeline({
      onComplete: complete
    });

    // Animate percentage from 0 to 100
    tl.to({}, {
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: function() {
        const val = Math.round(this.progress() * 100);
        if (percentTextRef.current) {
          percentTextRef.current.textContent = val + '%';
        }
      }
    });

    // Fade out text elements
    tl.to([textRef.current, percentTextRef.current, '.loading-meta'], {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      stagger: 0.1
    }, '-=0.5');

    // Curtain reveal animation
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'power4.inOut'
    }, '-=0.4');

    // Optional: Animate the overlay for a split effect or just keep simple curtain
    
    return () => {
      window.clearTimeout(fallbackTimer);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[9999] bg-[#050505] text-white flex flex-col justify-between p-8 md:p-12 lg:p-16"
    >
      {/* Top Section */}
      <div className="flex justify-between items-start w-full">
        <div className="overflow-hidden">
          <h1 ref={textRef} className="font-serif-display text-2xl md:text-3xl italic tracking-wide">
            Amanda Felisbino
          </h1>
        </div>
        <div className="loading-meta hidden md:block text-xs uppercase tracking-[0.2em] text-gray-400">
          Portfolio ©2026
        </div>
      </div>

      {/* Center - Optional Quote or Empty for minimalism */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        {/* <span className="loading-meta text-sm font-light text-gray-500 italic">Crafting digital experiences</span> */}
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end w-full">
        <div className="loading-meta text-xs uppercase tracking-[0.2em] text-gray-400">
          Brasil
        </div>
        <div className="overflow-hidden">
          <span 
            ref={percentTextRef} 
            className="font-serif-display text-7xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter block"
          >
            0%
          </span>
        </div>
      </div>
    </div>
  );
}
