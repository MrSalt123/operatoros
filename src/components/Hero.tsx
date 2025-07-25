'use client';

import { motion } from 'framer-motion';
import SkewedAutomationGraph from "./SkewedAutomationGraph";
import SlidingButton from './buttons/SlidingButton';
import Spacer from './Spacer';
import Link from '../../node_modules/next/link';

// Animation variants for the text content
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 15,
      stiffness: 100,
    },
  },
};


export default function Hero() {
  return (
    // Add `overflow-hidden` here to prevent scrolling
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className='relative max-w-screen-xl mx-auto h-full'>
        <motion.div
          className="relative z-10 max-w-3xl px-4 md:px-8 pt-32 flex flex-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="display-xl"
            variants={itemVariants}
          >
            Let the agents handle it.
          </motion.h1>

          <Spacer size="md" />

          <motion.h5
            className="text-[var(--text-muted)]"
            variants={itemVariants}
          >
            Modern infrastructure for agent-powered growth. <br />
            Automate workflows, decisions, and execution.
          </motion.h5>

          <Spacer size="lg" />

          <motion.div
            className="flex gap-4 mt-4"
            variants={itemVariants}
          >
            <Link href="https://calendar.app.google/bPU8bCmykSW9QmZEA">
              <SlidingButton label="Speak to an Expert" className='bg-bg-extralight border border-accent/60 text-[var(--text)] w-1/4' />
            </Link>
            <Link href="/automations">
              <SlidingButton label="Download Templates" className='bg-foreground text-black w-1/4' />
            </Link>
          </motion.div>

        </motion.div>

        {/* --- Improved Graph Positioning --- */}
        {/*
          This is now anchored to the top-right and then transformed.
          This is more robust for different screen sizes than positioning from the left.
        */}
        <div className='transform translate-x-[20%] translate-y-[-30%]'>
          <SkewedAutomationGraph />
        </div>
      </div>
    </div>
  );
}