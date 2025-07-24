'use client';

import React from 'react';
import SlidingButton from '@/components/buttons/SlidingButton'; // Assuming you use a UI lib or custom button
import Spacer from './Spacer';

export default function AcademyFinalCTA() {
  return (
    <section className="relative bg-black text-white py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="">Your Automation Journey Starts Now</h2>
        <Spacer size="md" />
        <h6 className="text-muted">
          Join the hundreds of pioneers who are learning to build the future, one automation at a time.
        </h6>
        <Spacer size="xxl" />
        <div className="flex flex-col items-center gap-3">
          <SlidingButton label="Enroll in the Academy" className="bg-foreground text-black w-[10vw]" />
        </div>
      </div>
    </section>
  );
}