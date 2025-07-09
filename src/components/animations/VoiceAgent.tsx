'use client';
import React from 'react';
import { motion } from 'framer-motion';

// --- Main Voice Agent Animation Component ---
export default function VoiceAgentAnimation() {

  // Variants for the main container to orchestrate staggered animations
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for each individual sound wave bar
  const waveVariants = {
    animate: {
      scaleY: [1, 1.5, 1, 0.8, 1], // Creates a smooth, pulsing "breathing" effect
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-3/4 h-3/4 p-4 bg-bg-extralight rounded-xl border border-white/10 flex flex-col font-sans"
        >
            {/* Header of the UI */}
            <div className="flex-shrink-0 mb-4 p-2 flex justify-between items-center">
                <div>
                    <p className="text-sm font-semibold text-gray-200">Live Voice Agent</p>
                    <p className="text-xs text-gray-400">Status: Connected</p>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
            </div>

            {/* Main animation area */}
            <div className="flex-grow flex flex-col items-center justify-center bg-white/5 rounded-lg p-6">
                
                {/* Animated Sound Waves */}
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="flex items-center justify-center gap-2 h-16"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            variants={waveVariants}
                            className="w-2 h-8 bg-indigo-400 rounded-full"
                        />
                    ))}
                </motion.div>

                {/* Transcribed Text Placeholder */}
                <span className="mt-4 text-center text-gray-300 text-xs">
                &quot;Yes, I can help with that. Pulling up your account details now...&quot;
                </span>
            </div>
            
            {/* Footer / Action bar */}
            <div className="flex-shrink-0 mt-4 p-2 flex justify-center items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                </div>
            </div>
        </motion.div>
    </div>
  );
}
