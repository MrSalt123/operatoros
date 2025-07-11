'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Type Definitions ---
interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
}

interface ChatBubbleProps {
  message: Message;
  isUser: boolean;
}

// --- Reusable Component for a single chat bubble ---
const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  const characters = Array.from(message.text);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={`flex items-start gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center">
          <span className="text-sm font-bold text-indigo-700">AI</span>
        </div>
      )}
      <div
        className={`w-fit max-w-[85%] p-3 rounded-2xl ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-slate-100 text-slate-700 rounded-bl-none'
        }`}
      >
        <motion.p // Changed to <p> for semantic correctness
          className="text-xs leading-relaxed"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
          }}
          initial="hidden"
          animate="visible"
        >
          {characters.map((char, index) => (
            <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </motion.div>
  );
};

// --- Main Animation Component ---
export default function CustomerSupportAnimation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const conversation: Message[] = [
    { id: 1, sender: 'user', text: "Hi, I can't find my recent order. Can you help?" },
    { id: 2, sender: 'ai', text: 'Of course! I found an order for a "Pro-Tier Widget" placed yesterday. Is that the one?' },
  ];

  useEffect(() => {
    const sequence = async () => {
      // Reset the chat
      setMessages([]);
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show user message
      setMessages(prev => [...prev, conversation[0]]);
      await new Promise(resolve => setTimeout(resolve, 2500));

      // Show AI response
      setMessages(prev => [...prev, conversation[1]]);
      await new Promise(resolve => setTimeout(resolve, 4000));
    };

    const interval = setInterval(sequence, 8500);
    sequence(); // Start immediately

    return () => clearInterval(interval);
  }, []); // The conversation array is stable, so no need to include it in dependencies.

  return (
    <div className="w-3/4 h-3/4 p-4 bg-bg-extralight rounded-xl border border-white/10 flex flex-col font-sans">
      {/* Header */}
      <div className="flex-shrink-0 mb-3 px-2 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
        <span className="text-sm font-semibold">Support Chat</span>
      </div>

      {/* Chat Log */}
      <div className="flex-grow p-2 space-y-4 overflow-hidden">
        <AnimatePresence>
          {messages.map(msg => (
            <ChatBubble key={msg.id} message={msg} isUser={msg.sender === 'user'} />
          ))}
        </AnimatePresence>
      </div>
      
      {/* Input Bar */}
      <div className="flex-shrink-0 mt-3 p-2 bg-bg-extralight rounded-lg border border-white/10 flex items-center gap-2">
        <span className="flex-grow text-xs text-muted">Type your message...</span>
        <button className="w-8 h-8 rounded-md bg-blue-500 text-white flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
        </button>
      </div>
    </div>
  );
}
