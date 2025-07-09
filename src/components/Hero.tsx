'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'motion';
import { splitText } from 'motion-plus';
import SkewedAutomationGraph from "./SkewedAutomationGraph";
import SlidingButton from './buttons/SlidingButton';

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!headingRef.current || !subheadingRef.current) return;

      containerRef.current!.style.visibility = 'visible';

      const { words: headingWords } = splitText(headingRef.current);
      const { words: subheadingWords } = splitText(subheadingRef.current);

      animate(
        [...headingWords, ...subheadingWords],
        { opacity: [0, 1], y: [10, 0] },
        {
          type: 'spring',
          duration: 2.5,
          bounce: 0.3,
          delay: stagger(0.05),
        }
      );

      setTimeout(() => {
        if (!buttonContainerRef.current) return;
        animate(
          buttonContainerRef.current,
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.6, easing: 'ease-in-out' }
        );
      }, 900)
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className='max-w-8xl mx-auto'>
      <div className="relative z-10 max-w-3xl px-8 pt-32 flex flex-col gap-6" ref={containerRef} style={{ visibility: 'hidden' }}>
        <h1 className="display-xl" ref={headingRef}>
          Let the agents handle it.
        </h1>
        <h5 className="text-[var(--text-muted)]" ref={subheadingRef}>
          Modern infrastructure for agent-powered growth. <br />
          Automate workflows, decisions, and execution.
        </h5>

        <div
          className="flex gap-4 opacity-0 mt-4"
          ref={buttonContainerRef}
        >
          <SlidingButton label="Apply Now" className='bg-bg-light text-[var(--text)]' />
          <SlidingButton label="Learn More" className='bg-foreground text-[var(--background)]' />

        </div>
      </div>

      {/* Graph Background & Animation */}
      <div className="ml-112 -mt-92 w-full max-w-[1600px] mx-auto">
        <SkewedAutomationGraph />
      </div>
      </div>
    </div>
  );
}
