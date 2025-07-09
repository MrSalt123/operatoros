'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tasks = [
  "Generate weekly report",
  "Respond to open tickets",
  "Qualify new leads",
  "Sync CRM data"
];

export default function AutomateTasks() {
  const [visibleTasks, setVisibleTasks] = useState(tasks);

  useEffect(() => {
    if (visibleTasks.length === 0) {
      // Reset after delay when all are gone
      const resetTimeout = setTimeout(() => {
        setVisibleTasks(tasks);
      }, 1000);
      return () => clearTimeout(resetTimeout);
    }

    const timeout = setTimeout(() => {
      setVisibleTasks(prev => prev.slice(1));
    }, 2000);

    return () => clearTimeout(timeout);
  }, [visibleTasks]);

  return (
    <div className="relative w-80 h-56 overflow-hidden rounded-xl border-t border-l border-white/10 text-white px-4 py-6">
      {/* Top-left glow */}
      <div className="absolute top-[-40px] left-[-40px] w-36 h-36 bg-white/10 blur-2xl rounded-full pointer-events-none" />

      <ul className="flex flex-col gap-2 relative">
        <AnimatePresence initial={false}>
          {visibleTasks.map((task) => (
            <motion.li
              key={task}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm backdrop-blur-sm"
            >
              {task}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
