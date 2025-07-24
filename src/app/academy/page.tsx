'use client';

import { useEffect, useRef } from 'react';
import { animate, stagger } from 'motion';
import { splitText } from 'motion-plus';
import { motion } from 'framer-motion';
import Image from "next/image";
import SlidingButton from '@/components/buttons/SlidingButton';
import WhatsInside from '@/components/WhatsInside';
import MeetInstructor from '@/components/MeetInstructor';
import TestimonialTicker from '@/components/AcademyTestimonials';
import AcademyFinalCTA from '@/components/AcademyCTA';

export default function Home() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const buttonContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!headingRef.current) return;

            containerRef.current!.style.visibility = 'visible';

            const { words } = splitText(headingRef.current);

            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: 'spring',
                    duration: 2.5,
                    bounce: 0.3,
                    delay: stagger(0.05),
                }
            );

            setTimeout(() => {
                if (!buttonContainerRef.current) return;
            }, 500);
        });
    }, []);

    return (
        <section className="py-32 p-4 w-full flex flex-col items-center justify-center text-white">
            <div className="absolute inset-0 bg-dot-pattern-light mask-fade z-0" />

            <div
                ref={containerRef}
                className="max-w-3xl px-8 flex flex-col gap-6 text-center"
                style={{ visibility: 'hidden' }}
            >
                <h1 ref={headingRef} className="display-xl">
                    Learn automation the right way.
                </h1>

                <motion.div
                    className="flex gap-4 justify-center mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.5 }}
                >
                    <a href="https://whop.com/operatoros-ai-agent-academy/" target="_blank">
                        <SlidingButton label="Enroll Now" className="bg-bg-light text-[var(--text)] border border-white/10" />
                    </a>
                    
                </motion.div>
            </div>

            <motion.div
                className='max-w-6xl mt-16 z-10 border border-b-0 p-2 rounded-md border-white/20'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }} // Delays until after buttons
            >
                <Image
                    src="/img/video.jpeg"
                    alt="whop video"
                    width={900} // You can adjust this based on actual image size or layout need
                    height={450}
                    className="z-10 rounded-sm"
                />
            </motion.div>

            <WhatsInside />

            <MeetInstructor />

            <TestimonialTicker />

            <AcademyFinalCTA />
        </section>
    );
}
