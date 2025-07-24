'use client';

import { useState } from 'react';
import Spacer from '@/components/Spacer';
import DownloadModal from '@/components/DownloadModal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownToLine } from 'lucide-react';
import { supabase } from '@/lib/supabase';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState<typeof workflows[0] | null>(null);

  const handleDownloadClick = (workflow: typeof workflows[0]) => {
    setSelectedWorkflow(workflow);
    setIsModalOpen(true);
  };

  const handleDownload = async (email: string, phone: string) => {
    if (!selectedWorkflow) return;

    try {
      // Save to Supabase
      const { error } = await supabase
        .from('download_leads')
        .insert([
          {
            email,
            phone,
            workflow_title: selectedWorkflow.title,
          },
        ]);

      if (error) {
        console.error('Error saving to Supabase:', error);
        throw error;
      }

      // Trigger download
      const link = document.createElement('a');
      link.href = selectedWorkflow.json;
      link.download = `${selectedWorkflow.title}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Download error:', error);
      throw error;
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkflow(null);
  };

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

              <button
                onClick={() => handleDownloadClick(workflow)}
                className="inline-flex items-center gap-2 mb-4 text-sm font-semibold hover:underline group cursor-pointer"
              >
                <h5 className="mb-0">{workflow.title}</h5>
                <ArrowDownToLine
                  size={18}
                  className="opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Download Modal */}
      {selectedWorkflow && (
        <DownloadModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onDownload={handleDownload}
          workflowTitle={selectedWorkflow.title}
        />
      )}
    </section>
  );
}
