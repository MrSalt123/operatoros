'use client';

import { motion } from 'framer-motion';

export default function AIBrainGraph() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {/* Animated SVG lines */}
      <svg className="absolute w-full h-full pointer-events-none z-0">
        {lines.map((line, idx) => (
          <motion.line
            key={idx}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="white"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 + 0.1 * idx, ease: 'easeInOut' }}
            strokeDasharray="1"
          />
        ))}
      </svg>

      {/* Center AI brain */}
      <motion.div
        className="relative z-10 invert w-36 h-36 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img src="/img/brain.svg" alt="ai brain" className="w-full h-full object-contain" />
      </motion.div>

      {/* Node bubbles */}
      {nodes.map((node, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * idx, duration: 0.5 }}
          className={`absolute ${node.className} text-xs text-white/80`}
        >
          <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
            {node.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Line endpoints in percentage-based coordinates
const lines = [
  { x1: '27%', y1: 105, x2: '40%', y2: '40%' },   // Support Tickets
  { x1: '50%', y1: 45, x2: '50%', y2: '34%' },     // Docs
  { x1: '75%', y1: 90, x2: '62%', y2: '45%' },     // Slack
  { x1: '75%', y1: 210, x2: '65%', y2: '52.5%' },  // CRM
  { x1: '50%', y1: 325, x2: '50%', y2: '66%' },    // Notion
  { x1: '25%', y1: 230, x2: '37%', y2: '55%' },    // Emails
];

// Node label positions
const nodes = [
  { label: 'Docs', className: 'top-[20px] left-1/2 -translate-x-1/2' },
  { label: 'Voice Agent', className: 'top-[70px] left-[70%]' },
  { label: 'CRM', className: 'top-[200px] left-[75%]' },
  { label: 'Notion', className: 'top-[325px] left-1/2 -translate-x-1/2' },
  { label: 'Emails', className: 'top-[220px] left-[15%]' },
  { label: 'Support Tickets', className: 'top-[80px] left-[10%]' },
];
