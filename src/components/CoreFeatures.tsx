'use client';
import React from 'react';
import { motion } from 'framer-motion';

// --- Icon Components ---
// Each icon is a reusable component with a unique gradient.

const ComplexityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#A78BFA', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#6366F1', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <rect width="40" height="40" rx="8" fill="url(#grad1)" />
        <path d="M13 13L27 27M27 13L13 27" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 13V27" stroke="white" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 4"/>
    </svg>
);

const SecurityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#60A5FA', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#3B82F6', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <rect width="40" height="40" rx="8" fill="url(#grad2)" />
        <path d="M20 11L12 15V21C12 24.31 15.41 27.33 20 28C24.59 27.33 28 24.31 28 21V15L20 11Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const ScalabilityIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#34D399', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#10B981', stopOpacity: 1}} />
            </linearGradient>
        </defs>
        <rect width="40" height="40" rx="8" fill="url(#grad3)" />
        <path d="M12 20H28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 15H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
        <path d="M12 25H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
    </svg>
);


// --- Main Component ---
export default function CoreFeatures() {
  const features = [
    {
      icon: <ComplexityIcon />,
      title: "Automate Complex Tasks",
      description: "Our agents go beyond simple tasks. We handle messy, unstructured data, complex decision trees, and integrate with your existing systems to solve the nuanced challenges unique to your business.",
      gradient: "from-purple-500/30 to-indigo-500/30",
      dotHoverColor: "group-hover:text-purple-400/40"
    },
    {
      icon: <SecurityIcon />,
      title: "Secure & Compliant by Design",
      description: "From HIPAA to SOC 2, we build with a security-first mindset. We offer on-premise and VPC deployments to ensure your most sensitive data remains fully within your control.",
      gradient: "from-blue-500/30 to-sky-500/30",
      dotHoverColor: "group-hover:text-blue-400/40"
    },
    {
      icon: <ScalabilityIcon />,
      title: "Engineered to Scale with Confidence",
      description: "We build robust, efficient agents designed for enterprise scale. Our systems are fast, accurate, and cost-effective, with persistent data connectors ready to handle millions of tasks.",
      gradient: "from-emerald-500/30 to-green-500/30",
      dotHoverColor: "group-hover:text-emerald-400/40"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-background text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How We Engineer Business Velocity
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We partner with ambitious companies to build bespoke AI solutions that solve their most complex operational challenges.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`group p-px rounded-2xl bg-gradient-to-br ${feature.gradient}`}
              variants={itemVariants}
            >
              <div className="relative p-8 rounded-[15px] bg-background h-full overflow-hidden">
                {/* Dotted background that changes color on hover */}
                <div 
                  className={`
                    absolute inset-0 
                    bg-[radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] 
                    [background-size:1rem_1rem] 
                    text-white/15
                    transition-colors duration-300 
                    ${feature.dotHoverColor}
                  `}
                ></div>

                {/* Content must be relative to sit on top of the background */}
                <div className="relative">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-100">{feature.title}</h4>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
