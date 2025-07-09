'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const message = "Hey, OperatorOS — how can I use agents to scale?";

export default function Chat() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView || index >= message.length) return;

    const timeout = setTimeout(() => {
      setText(prev => prev + message[index]);
      setIndex(index + 1);
    }, 50);

    return () => clearTimeout(timeout);
  }, [inView, index]);

  return (
    <div
      ref={ref}
      className="bg-background rounded-xl px-8 py-16 w-full h-full flex justify-center items-center"
    >
      <div className="bg-bg-light text-foreground px-4 py-3 rounded-xl shadow-md inline-block max-w-md border border-white/10">
        <p className="whitespace-pre-wrap font-medium">
          {text}
          {index < message.length && <span className="animate-pulse">|</span>}
        </p>
      </div>
    </div>
  );
}
