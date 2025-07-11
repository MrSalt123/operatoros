'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SlidingButton from './buttons/SlidingButton';
import Spacer from './Spacer';

export default function CallToAction() {
  return (
    <section className="relative pt-32 pb-18 px-6 w-full bg-gradient-to-b from-[#1c1c1c] to-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center flex flex-row justify-between">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Deploy your first agent.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg"
          >
            <SlidingButton label="Start Now" className='bg-foreground text-black' />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
