'use client';

import React from 'react';

interface SlidingButtonProps {
  label: string;
  className?: string;
}

export default function SlidingButton({ label, className = '' }: SlidingButtonProps) {
  return (
    <button
      className={`group relative overflow-hidden px-4 py-2 rounded-lg font-medium h-[42px] min-w-[160px] ${className}`}
    >
      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"
      >
        {label}
      </span>
    </button>
  );
}
