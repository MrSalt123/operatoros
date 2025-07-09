"use client";
import React, { useState } from 'react';
import { ChevronDown, Bot } from 'lucide-react';

// --- Data for the FAQ section ---
const faqData = [
  {
    question: "What's included in each plan?",
    answer: "Each plan includes core features with varying levels of support, customization, and advanced features. The Enterprise plan offers additional security features and dedicated support."
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card is required to start."
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include email support. Pro and Enterprise plans include priority support and dedicated account management."
  }
];

// --- Individual Accordion Item Component ---
// It no longer manages its own state. It receives its open status and a toggle function from the parent.
const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-6">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={24}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 dark:text-gray-400">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};


// --- Main App Component ---
export default function App() {
  // State to track the currently open accordion item index. `null` means none are open.
  const [openIndex, setOpenIndex] = useState(null);

  // This function handles the logic for opening and closing items.
  const handleToggle = (index) => {
    // If the clicked item is already open, close it. Otherwise, open the clicked item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sans p-4 sm:p-8 flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted max-w-2xl mx-auto">
            Find answers to common questions about our AI automation platform, plans, and support.
          </p>
        </div>

        <div className="bg-bg-light rounded-2xl shadow-lg p-6 sm:p-10">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              // Pass down whether this specific item should be open
              isOpen={openIndex === index}
              // Pass down the function to toggle this item's state
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
