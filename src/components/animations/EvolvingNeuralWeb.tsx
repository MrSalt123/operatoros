'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';
import { easeOut } from 'framer-motion';

// --- Configuration ---
const BRAND_PURPLE = '#6d28d9';
const MODULES = [
    { name: 'CRM', icon: 'Database' },
    { name: 'Sales Assistant', icon: 'UserCheck' },
    { name: 'Knowledge Core', icon: 'Brain' },
    { name: 'Report Generator', icon: 'FileBarChart' },
    { name: 'Email Summarizer', icon: 'Mail' },
    { name: 'Meeting Scheduler', icon: 'Calendar' },
] as const;


type ModuleType = (typeof MODULES)[number];

type ModuleCardProps = {
    module: ModuleType;
    isActivated: boolean;
};

// --- SVG Icons ---
// A collection of icons for the modules.
const ICONS = {
    Database: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
    UserCheck: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" /></svg>,
    Brain: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15A2.5 2.5 0 0 1 9.5 22h-3A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2h3Z" /><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15A2.5 2.5 0 0 0 14.5 22h3A2.5 2.5 0 0 0 20 19.5v-15A2.5 2.5 0 0 0 17.5 2h-3Z" /><path d="M12 4.5a2.5 2.5 0 0 0-2.5-2.5" /><path d="M12 19.5a2.5 2.5 0 0 1 2.5 2.5" /><path d="M12 4.5a2.5 2.5 0 0 1 2.5-2.5" /><path d="M12 19.5a2.5 2.5 0 0 0-2.5-2.5" /></svg>,
    FileBarChart: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M12 18v-4" /><path d="M8 18v-2" /><path d="M16 18v-6" /></svg>,
    Mail: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
    Calendar: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>,
    Check: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
};

type IconName = keyof typeof ICONS;

type IconProps = {
    name: IconName;
} & React.SVGProps<SVGSVGElement>;

const Icon = ({ name, ...props }: IconProps) => {
    const IconComponent = ICONS[name];
    return IconComponent ? <IconComponent {...props} /> : null;
};


// --- Module Card Component ---
const ModuleCard = ({ module, isActivated }: ModuleCardProps) => {
    const cardVariants = {
        inactive: {
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
        },
        active: {
            backgroundColor: 'rgba(109, 40, 217, 0.2)',
            borderColor: 'rgba(109, 40, 217, 0.8)',
            boxShadow: `0px 0px 20px 0px ${BRAND_PURPLE}`,
            transition: { duration: 0.5, ease: easeOut },
        },
    };

    return (
        <motion.div
            variants={cardVariants}
            animate={isActivated ? 'active' : 'inactive'}
            className="relative p-4 rounded-xl border backdrop-blur-sm overflow-hidden"
        >
            <div className="flex items-center gap-4">
                <Icon name={module.icon} className="w-6 h-6 text-white/50" />
                <span className="text-white/80 font-medium text-sm">{module.name}</span>
            </div>
            <AnimatePresence>
                {isActivated && (
                    <motion.div
                        key={module.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute top-3 right-3"
                    >
                        <Icon name="Check" className="w-5 h-5 text-white" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

// --- Main Futuristic HUD Component ---
export default function FuturisticHud() {
    const [activatedModules, setActivatedModules] = useState<string[]>([]);
    const orbControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            while (true) {
                setActivatedModules([]);
                await new Promise(r => setTimeout(r, 1000));

                for (let i = 0; i < MODULES.length; i++) {
                    const element = document.getElementById(`module-${i}`);
                    if (element) {
                        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = element;
                        await orbControls.start({
                            x: offsetLeft + offsetWidth / 2 - 16, // center orb
                            y: offsetTop + offsetHeight / 2 - 16,
                            transition: { duration: 0.4, ease: 'easeInOut' },
                        });
                        setActivatedModules(prev => [...prev, MODULES[i].name]);
                        await new Promise(r => setTimeout(r, 100));
                    }
                }
                await orbControls.start({ opacity: 0, transition: { duration: 0.5 } });
                await new Promise(r => setTimeout(r, 2000));
                orbControls.set({ x: -100, y: 100, opacity: 1 });
            }
        };
        sequence();
    }, [orbControls]);

    return (
        <div className="w-full bg-background flex items-center justify-center font-sans overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(109,40,217,0.3)_0,_transparent_50%)]" />
            </div>

            {/* Console */}
            <motion.div
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ perspective: '1000px' }}
            >
                <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 p-6 rounded-2xl" style={{ transform: 'rotateX(10deg)' }}>
                    {/* Glowing Orb */}
                    <motion.div
                        animate={orbControls}
                        className="absolute w-8 h-8 rounded-full z-10"
                        style={{
                            background: `radial-gradient(circle, ${BRAND_PURPLE} 0%, transparent 70%)`,
                            boxShadow: `0 0 30px 10px ${BRAND_PURPLE}`,
                        }}
                    />

                    {/* Modules */}
                    {MODULES.map((module, i) => (
                        <div key={module.name} id={`module-${i}`}>
                            <ModuleCard
                                module={module}
                                isActivated={activatedModules.includes(module.name)}
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
