'use client';

import { useRef, useEffect } from 'react';
import { splitText } from 'motion-plus';
import { animate, stagger } from 'motion';
import SlidingButton from '@/components/buttons/SlidingButton';
import Spacer from '@/components/Spacer';
import AutomationForm from '@/components/AutomationForm';

export default function Home() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

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
                    duration: 2.2,
                    bounce: 0.3,
                    delay: stagger(0.04),
                }
            );
        });
    }, []);

    return (
        <>
            <section className="relative w-full py-32 px-4 flex flex-col items-center min-h-screen">
                {/* Background Dot Pattern */}
                <div className="absolute inset-0 bg-dot-pattern-light mask-fade z-0" />

                <div
                    ref={containerRef}
                    className="relative z-10 max-w-5xl text-center flex flex-col items-center"
                    style={{ visibility: 'hidden' }}
                >
                    <h1 ref={headingRef} className="display-xl">
                        Generate Your Free AI Solution Plan
                    </h1>
                    <Spacer size="sm" />
                    <h5 className="text-muted w-1/2">
                        Answer a few quick questions and instantly get a tailored AI roadmap for your business.
                    </h5>
                </div>
                <div className='z-10 w-full'>
                    <AutomationForm />
                </div>
            </section>

        </>
    );
}
