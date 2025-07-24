'use client';

import Spacer from '@/components/Spacer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownToLine } from 'lucide-react';

const workflows = [
  {
    id: 'workflow1',
    title: 'Voice Multi Agent Workforce',
    image: '/workflows/workflow1.webp',
    json: '/workflows/workflow1.json',
  },
  // Add more workflows here
];

export default function DownloadTemplates() {
  return (
    <section className="relative py-32 px-6 md:px-12 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 bg-dot-pattern-light mask-fade pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h1>Download Automation Templates</h1>
          <Spacer size="md" />
          <h5 className="text-muted max-w-2xl mx-auto">
            Get started faster with prebuilt workflows you can import into your automation stack.
          </h5>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              className="bg-bg-light border border-white/10 rounded-xl p-2 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative w-full aspect-[4/3] mb-2 overflow-hidden rounded-md border border-white/10">
                <Image
                  src={workflow.image}
                  alt={`${workflow.title} Preview`}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <a
                href={workflow.json}
                download
                className="inline-flex items-center gap-2 mb-4 text-sm font-semibold hover:underline group"
              >
                <h5 className="mb-0">{workflow.title}</h5>
                <ArrowDownToLine
                  size={18}
                  className="opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
