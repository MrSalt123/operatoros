'use client';

import Image from 'next/image';
import Spacer from './Spacer';

export default function MeetInstructor() {
    return (
        <section className="relative py-48 px-6 bg-background text-white">
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left Side: Image */}
                <div className='border-t border-l border-white/20 p-2 rounded-lg'>
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg mx-auto md:mx-0">
                        <Image
                            src="/img/bennet.jpeg"
                            alt="Bennet, AI Academy Instructor"
                            fill
                            className="object-center" // or 'object-center' if you want center crop but no squish
                        />
                    </div>
                </div>

                {/* Right Side: Bio and Mission */}
                <div className="flex flex-col">
                    <h2 className="">Meet Your Instructor</h2>
                    <Spacer size='lg' />
                    <h6>Why Bennett?</h6>
                    <Spacer size='xs' />
                    <p className='text-muted'>
                        Bennett is a seasoned automation engineer and AI strategist who has spent the last decade helping
                        startups and enterprises unlock scale through intelligent systems. His work has led to 8-figure process
                        automations, streamlined lead generation pipelines, and fully autonomous client onboarding systems.
                    </p>
                    <p className='text-muted'>
                        With real-world experience across tech, marketing, and operations, Bennet teaches from proven frameworks—not theory.
                        Hundreds of students have launched their first agents, landed automation roles, or automated their own businesses
                        using his strategies.
                    </p>
                    <Spacer size='lg' />
                    <div className="border-l-4 border-primary pl-4 italic text-white/90">
                        <p>
                            “I started this academy because I believe AI shouldn&apos;t just be for big tech.
                            Everyone should have the tools to automate boring tasks and reclaim their time.
                            I teach practical systems that generate results—not hype.”
                        </p>
                        <span className="block mt-2 text-sm not-italic text-white/60">— Bennett
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
