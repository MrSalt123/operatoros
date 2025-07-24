'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, Phone } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: (email: string, phone: string) => void;
  workflowTitle: string;
}

export default function DownloadModal({ isOpen, onClose, onDownload, workflowTitle }: DownloadModalProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !phone) {
      setError('Please fill in both email and phone number');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Basic phone validation (allows various formats)
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      setError('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      await onDownload(email, phone);
      onClose();
      setEmail('');
      setPhone('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-bg-light border border-white/10 rounded-xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold">Download Template</h4>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-white/5 rounded-lg transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <p className="text-muted mb-4 text-sm">
              Get your free copy of <span className="text-white font-medium">{workflowTitle}</span> by providing your contact information.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted" />
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent text-sm"
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                >
                  {error}
                </motion.p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white text-black hover:bg-white/90 disabled:bg-white/50 disabled:cursor-not-allowed rounded-lg font-medium transition-colors text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download size={16} />
                    Download Template
                  </>
                )}
              </button>
            </form>

            <span className="block text-sm text-muted mt-3 text-center">
              By downloading, you agree to receive updates about our automation templates and services.
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 