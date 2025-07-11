'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import VoiceAgentAnimation from './animations/VoiceAgent';
import BackendAnimation from './animations/BackendAutomation';
import AdminAutomationAnimation from './animations/AdminAutomation';
import CustomerSupportAnimation from './animations/SupportAnimation';

type UseCase = {
  id: string;
  title: string;
  heading: string;
  AnimationComponent: React.ComponentType;
};

const useCases: UseCase[] = [
  {
    id: 'lead-generation',
    title: 'Voice Agent',
    heading:
      'Deploy a conversational AI that can handle inbound calls, answer questions, and route customers with natural, human-like interaction.',
    AnimationComponent: VoiceAgentAnimation,
  },
  {
    id: 'recruiting',
    title: 'Back-end Automations',
    heading:
      'Streamline your core business logic with agents that automate data processing, API integrations, and complex server-side tasks.',
    AnimationComponent: BackendAnimation,
  },
  {
    id: 'analytics',
    title: 'Admin Automations',
    heading:
      'Eliminate repetitive administrative work by deploying an agent to manage scheduling, data entry, and internal reporting.',
    AnimationComponent: AdminAutomationAnimation,
  },
  {
    id: 'content-creation',
    title: 'Customer Support',
    heading:
      'Deploy a 24/7 support agent that instantly resolves common issues and provides your team with summarized context for complex tickets.',
    AnimationComponent: CustomerSupportAnimation,
  },
];

// --- Content Section Props ---
type ContentSectionProps = {
    id: string;
    heading: string;
    AnimationComponent: React.ComponentType;
    setActiveId: (id: string) => void;
    scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  };

// --- Content Section Component ---
const ContentSection = React.forwardRef<HTMLDivElement, ContentSectionProps>(
    ({ id, heading, AnimationComponent, setActiveId, scrollContainerRef }, forwardedRef) => {
      const localRef = useRef<HTMLDivElement>(null);

      const isInView = useInView(localRef, {
        root: scrollContainerRef,
        margin: '-50% 0px -50% 0px',
      });

      useEffect(() => {
        if (!forwardedRef) return;
        if (typeof forwardedRef === 'function') {
          forwardedRef(localRef.current);
        } else {
          (forwardedRef as React.MutableRefObject<HTMLDivElement | null>).current = localRef.current;
        }
      }, [forwardedRef]);

      useEffect(() => {
        if (isInView) {
          setActiveId(id);
        }
      }, [isInView, id, setActiveId]);

      return (
        // This grid layout naturally stacks on mobile and goes to two columns on desktop
        <div ref={localRef} className="grid md:grid-cols-2 gap-4 md:gap-8 items-center h-full md:px-0">
          <div className="p-4 h-full">
            <div className="flex gap-4 mt-4 md:mt-8">
              <h4 className="text-xl md:text-2xl font-bold text-gray-100">{heading}</h4>
            </div>
          </div>
          {/* On mobile, this container will take the full width of the grid column */}
          <div className="w-full h-100 md:h-120 p-4 flex items-center justify-center">
            <AnimationComponent />
          </div>
        </div>
      );
    }
  );

  ContentSection.displayName = 'ContentSection';


// --- Main Component ---
export default function InteractiveUseCaseSection() {
  const [activeId, setActiveId] = useState(useCases[0].id);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick = (id: string) => {
    const container = scrollContainerRef.current;
    const target = contentRefs.current[id];
    if (container && target) {
      const offsetTop = target.offsetTop;
      container.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };


  return (
    <section className="bg-background text-white py-24 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
          See what OperatorOS can do.
        </h2>

        {/* The container is a column on mobile and a row on desktop */}
        <div className="flex flex-col md:flex-row">
          {/* Left-hand Navigation Menu */}
          <aside className="w-full md:w-[20%] mb-4 md:mb-0">
            {/* On mobile, this becomes a horizontally scrolling container */}
            <ul className="flex flex-row md:flex-col overflow-x-auto scrollbar-hidden">
              {useCases.map((useCase) => (
                <li key={useCase.id} className="flex-shrink-0">
                  <button
                    onClick={() => handleMenuClick(useCase.id)}
                    className={`w-full text-left p-3 transition-colors duration-300 text-sm whitespace-nowrap ${
                      activeId === useCase.id
                        ? 'bg-white/10 text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {useCase.title}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right-hand Content Area */}
          <main
            ref={scrollContainerRef}
            // Use full width on mobile, and give it more height to feel less cramped
            className="relative h-[35rem] md:h-[30rem] w-full md:w-[80%] overflow-y-auto bg-white/5 border border-white/10 scrollbar-hidden"
          >
            <div className="space-y-18 bg-dot-pattern-extralight">
              {useCases.map((useCase) => (
                <ContentSection
                  key={useCase.id}
                  id={useCase.id}
                  heading={useCase.heading}
                  AnimationComponent={useCase.AnimationComponent}
                  setActiveId={setActiveId}
                  scrollContainerRef={scrollContainerRef}
                  ref={(el: HTMLDivElement | null) => {
                    contentRefs.current[useCase.id] = el;
                  }}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}