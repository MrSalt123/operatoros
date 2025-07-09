'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import VoiceAgentAnimation from './animations/VoiceAgent';
import BackendAnimation from './animations/BackendAutomation';
import AdminAutomationAnimation from './animations/AdminAutomation';
import CustomerSupportAnimation from './animations/SupportAnimation';



// --- Configuration for the Use Cases ---
const useCases = [
    {
        id: 'lead-generation',
        title: 'Voice Agent',
        heading: 'Deploy a conversational AI that can handle inbound calls, answer questions, and route customers with natural, human-like interaction.',
        Icon: () => <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" />,
    AnimationComponent: VoiceAgentAnimation
    },
    {
        id: 'recruiting',
        title: 'Back-end Automations',
        heading: 'Streamline your core business logic with agents that automate data processing, API integrations, and complex server-side tasks.',
        Icon: () => <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-9-5.197" strokeLinecap="round" strokeLinejoin="round" />,
    AnimationComponent: BackendAnimation

    },
    {
        id: 'analytics',
        title: 'Admin Automations',
        heading: 'Eliminate repetitive administrative work by deploying an agent to manage scheduling, data entry, and internal reporting.',
        Icon: () => <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2M9 19H5" strokeLinecap="round" strokeLinejoin="round" />,
    AnimationComponent: AdminAutomationAnimation
    },
    {
        id: 'content-creation',
        title: 'Customer Support',
        heading: 'Deploy a 24/7 support agent that instantly resolves common issues and provides your team with summarized context for complex tickets.',
        Icon: () => <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />,
    AnimationComponent: CustomerSupportAnimation
    }
];

// --- Main Component ---
export default function InteractiveUseCaseSection() {
    const [activeId, setActiveId] = useState(useCases[0].id);
    const contentRefs = useRef({});
    const scrollContainerRef = useRef(null);

    const handleMenuClick = (id) => {
        contentRefs.current[id]?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <section className="bg-background text-white py-24 px-4 font-sans">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    See what OperatorOS can do.
                </h2>

                <div className="flex flex-col md:flex-row">
                    {/* Left-hand Navigation Menu */}
                    <aside className="w-[20%]">
                        <div className="top-24">
                            <ul className="">
                                {useCases.map((useCase) => (
                                    <li key={useCase.id}>
                                        <button
                                            onClick={() => handleMenuClick(useCase.id)}
                                            className={`w-full text-left p-3 transition-colors duration-300 text-sm ${activeId === useCase.id
                                                ? 'bg-white/10 text-white'
                                                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            {useCase.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Right-hand Content Area - Now a scrollable container */}
                    <main
                        ref={scrollContainerRef}
                        className="h-[30rem] w-[80%] overflow-y-auto bg-white/5 border border-white/10 scrollbar-hidden"
                    >
                        <div className="space-y-18 bg-dot-pattern-extralight">
                            {useCases.map((useCase) => (
                                <ContentSection
                                    key={useCase.id}
                                    id={useCase.id}
                                    heading={useCase.heading}
                                    description={useCase.description}
                                    Icon={useCase.Icon}
                                    AnimationComponent={useCase.AnimationComponent}
                                    setActiveId={setActiveId}
                                    scrollContainerRef={scrollContainerRef}
                                    ref={(el) => (contentRefs.current[useCase.id] = el)}
                                />
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
}

// --- Content Section Component ---
const ContentSection = React.forwardRef(({ id, heading, description, Icon, AnimationComponent, setActiveId, scrollContainerRef }, ref) => {
    const isInView = useInView(ref, {
        root: scrollContainerRef,
        margin: "-50% 0px -50% 0px"
    });

    useEffect(() => {
        if (isInView) {
            setActiveId(id);
        }
    }, [isInView, id, setActiveId]);

    return (
        <div ref={ref} className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className='p-4 h-full'>
                <div className="flex gap-4 mt-8">
                    <h4 className="text-2xl font-bold text-gray-100">{heading}</h4>
                </div>
            </div>

            {/* Right Column: Animation Placeholder */}
            <div className="w-full h-120 flex items-center justify-center">
                <AnimationComponent />
            </div>
        </div>
    );
});
