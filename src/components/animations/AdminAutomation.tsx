'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spacer from '../Spacer';

// --- Configuration for Calendar Events ---
const scheduleEvents: EventType[] = [
  { id: 1, day: 'Mon', start: 1, span: 3, title: 'Team Sync', color: 'bg-blue-200' },
  { id: 2, day: 'Tue', start: 4, span: 2, title: 'Onboarding', color: 'bg-green-200' },
  { id: 3, day: 'Wed', start: 2, span: 4, title: 'Projects', color: 'bg-purple-200' },
  { id: 4, day: 'Thu', start: 5, span: 3, title: 'Interviews', color: 'bg-yellow-200' },
  { id: 5, day: 'Fri', start: 1, span: 2, title: 'Planning', color: 'bg-pink-200' },
];


type EventType = {
  id: number;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  start: number;
  span: number;
  title: string;
  color: string;
};

const CalendarEvent = ({ event }: { event: EventType }) => {
  const gridRow = `${event.start + 1} / span ${event.span}`;
  const gridColumn = {
    Mon: '1 / 2',
    Tue: '2 / 3',
    Wed: '3 / 4',
    Thu: '4 / 5',
    Fri: '5 / 6',
  }[event.day];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`p-2 rounded-md ${event.color} flex items-start`}
      style={{ gridRow, gridColumn }}
    >
      <span className="text-[.5rem] font-bold text-slate-700">{event.title}</span>
    </motion.div>
  );
};


// --- Main Animation Component ---
export default function AdminAutomationAnimation() {
  const [visibleEvents, setVisibleEvents] = useState<EventType[]>([]);

  useEffect(() => {
    const sequence = async () => {
      // Reset the calendar
      setVisibleEvents([]);
      await new Promise(resolve => setTimeout(resolve, 500));

      // Add events one by one
      for (let i = 0; i < scheduleEvents.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 600));
        setVisibleEvents(prev => [...prev, scheduleEvents[i]]);
      }

      // Pause before restarting
      await new Promise(resolve => setTimeout(resolve, 3000));
    };

    const interval = setInterval(sequence, (scheduleEvents.length * 600) + 3500);
    sequence(); // Start immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:w-3/4 h-3/4 p-4 bg-bg-extralight rounded-xl border border-white/10 flex flex-col font-sans">
      {/* Header */}
      <div className="flex-shrink-0 mb-3 px-2 flex justify-between items-center">
        <div className='flex flex-col'>
          <span className="text-sm font-semibold">Team Schedule</span>
          <Spacer size='xs' />
          <span className="text-xs text-muted">AI is populating schedule...</span>
        </div>
        <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></div>
      </div>

      {/* Unified Calendar Grid */}
      <div className="flex-grow grid grid-cols-5 grid-rows-9 gap-1 relative">
        {/* Day Headers */}
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
          <div key={day} className="text-center text-xs font-semibold border-b border-white/90 pb-1">
            {day}
          </div>
        ))}
        
        {/* Events Container */}
        <AnimatePresence>
          {visibleEvents.map(event => (
            <CalendarEvent key={event.id} event={event} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
