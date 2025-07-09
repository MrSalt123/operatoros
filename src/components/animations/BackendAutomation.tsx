'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Reusable Node Component ---
const WorkflowNode = ({ text, icon: Icon }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="flex items-center gap-3 p-3 rounded-lg bg-slate-100 border border-slate-200 w-64"
    >
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            <Icon />
        </div>
        <p className="text-slate-800 text-sm font-medium">{text}</p>
    </motion.div>
);

// --- SVG Icon Components ---
const UserIcon = () => (
    <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);
const EnrichIcon = () => (
    <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);
const EmailIcon = () => (
    <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);
const CrmIcon = () => (
    <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const allNodes = [
    { id: 1, text: "New User Signup", icon: UserIcon },
    { id: 2, text: "Enrich Data", icon: EnrichIcon },
    { id: 3, text: "Send Welcome Email", icon: EmailIcon },
    { id: 4, text: "Add to CRM", icon: CrmIcon },
];

// --- Main Animation Component ---
export default function BackendAutomationAnimation() {
    const [visibleNodes, setVisibleNodes] = useState([]);
    const [isComplete, setIsComplete] = useState(false);
    const [cycle, setCycle] = useState(0); // State to manage animation loops

    const message = "All complete. What's next?";
    const characters = Array.from(message);

    useEffect(() => {
        let isCancelled = false;
        
        const sequence = async () => {
            // Show nodes one by one
            for (let i = 0; i < allNodes.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 1200));
                if (isCancelled) return;
                setVisibleNodes(prev => [...prev, allNodes[i]]);
            }

            // All nodes shown, wait then clear
            await new Promise(resolve => setTimeout(resolve, 2000));
            if (isCancelled) return;
            setVisibleNodes([]);
            
            // Show completion message
            await new Promise(resolve => setTimeout(resolve, 500));
            if (isCancelled) return;
            setIsComplete(true);

            // Wait before resetting for the next loop
            await new Promise(resolve => setTimeout(resolve, 4000));
            if (isCancelled) return;
            setIsComplete(false);
            setCycle(c => c + 1); // Trigger the next cycle
        };

        sequence();

        // Cleanup function to prevent state updates on unmounted component
        return () => {
            isCancelled = true;
        };
    }, [cycle]); // Re-run the effect every time the cycle changes to create a loop

    return (
        <div className="w-full h-full p-4 flex items-center justify-center font-sans overflow-hidden">
            <div className="relative w-full h-full flex flex-col justify-center items-center">
                <AnimatePresence>
                    {visibleNodes.map((node) => (
                        // The key now includes the cycle count to ensure it's always unique
                        <div key={`${cycle}-${node.id}`} className="mt-4">
                            <WorkflowNode text={node.text} icon={node.icon} />
                        </div>
                    ))}
                </AnimatePresence>

                <AnimatePresence>
                    {isComplete && (
                        <motion.div
                            // Keyed to ensure it re-animates correctly each cycle
                            key={`complete-${cycle}`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="p-4 rounded-lg bg-slate-100 border border-slate-200">
                                <motion.p
                                    className="text-slate-800 font-medium"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    {characters.map((char, index) => (
                                        <motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                            {char === ' ' ? '\u00A0' : char}
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
