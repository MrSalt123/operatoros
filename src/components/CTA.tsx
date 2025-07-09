'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SlidingButton from './buttons/SlidingButton';

export default function CallToAction() {
  return (
    <section className="relative py-32 px-6 w-full bg-gradient-to-b from-[#1c1c1c] to-black text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Ready to upgrade your future?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-lg text-white/70"
        >
          Book a discovery call and see how we can help scale your business with intelligent automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/book"
            className="inline-block px-8 py-4 rounded-lg"
          >
            <SlidingButton label="Book a Call" className='bg-foreground text-black' />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
