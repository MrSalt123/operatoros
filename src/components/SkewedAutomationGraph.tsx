import React from 'react';

import Image from 'next/image';

export default function SkewedAutomationGraph() {
    const nodes = [
        { id: 'form', top: 120, left: 160, width: 80, height: 80, img: '/img/form.svg', radius: ['1.7rem', '.5rem', '.5rem', '1.7rem'] },
        { id: 'ai-agent', top: 120, left: 400, width: 160, height: 80, img: '/img/robot.svg', label: 'AI Agent', radius: ['.5rem'] },
        { id: 'gate', top: 120, left: 660, width: 80, height: 80, img: '/img/gate.svg', radius: ['.5rem'] },
        { id: 'slack-top', top: 50, left: 850, width: 80, height: 80, img: '/img/slack.svg', radius: ['.5rem'] },
        { id: 'slack-bottom', top: 200, left: 850, width: 80, height: 80, img: '/img/slack.svg', radius: ['.5rem'] },
        { id: 'anthropic', top: 325, left: 250, width: 60, height: 60, img: '/img/anthropic.svg', circle: true },
        { id: 'postgres', top: 325, left: 350, width: 60, height: 60, img: '/img/postgres.svg', circle: true },
        { id: 'entra', top: 325, left: 500, width: 60, height: 60, img: '/img/entra.svg', circle: true },
        { id: 'jira', top: 325, left: 600, width: 60, height: 60, img: '/img/jira.svg', circle: true },
    ];

    return (
        <div
            className="relative hidden md:block"
            style={{
                width: '1100px',
                height: '525px',
                transform: 'rotate(-30deg) skewX(30deg)',
            }}
        >

            {/* Dotted background under nodes */}
            <div className="absolute inset-0 bg-dot-pattern mask-fade z-0" />

            {/* SVG connector line with animated pulse */}
            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none">

                {/* Base line */}
                <line
                    x1={240}
                    y1={160}
                    x2={400}
                    y2={160}
                    stroke="rgb(196,199,210)"
                    strokeWidth="2"
                />
                <path
                    d="M240 160 L400 160"
                    stroke="var(--accent)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="40 160"
                >
                    <animate attributeName="stroke-dashoffset" from="200" to="0" dur="1s" repeatCount="indefinite" />
                </path>

                <line
                    x1={560}
                    y1={160}
                    x2={660}
                    y2={160}
                    stroke="rgb(196,199,210)"
                    strokeWidth="2"
                />

                <line
                    x1={560}
                    y1={160}
                    x2={660}
                    y2={160}
                    stroke="var(--accent)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="40 120"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="160"
                        to="0"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;0.8;1"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                </line>


                {/* Adjusted curved connector from node 3 to node 4 (top) */}
                <path
                    d="M740 150 C 790 150, 800 80, 850 90"
                    stroke="rgb(196,199,210)"
                    strokeWidth="2"
                    fill="none"
                />

                <path
                    d="M740 150 C 790 150, 800 80, 850 90"
                    stroke="var(--accent)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="40 120"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="160"
                        to="0"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;0.8;1"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                </path>


                {/* Adjusted curved connector from node 3 to node 5 (bottom) */}
                <path
                    d="M740 170 C 790 170, 800 240, 850 245"
                    stroke="rgb(196,199,210)"
                    strokeWidth="2"
                    fill="none"
                />

                <path
                    d="M740 170 C 790 170, 800 240, 850 245"
                    stroke="var(--accent)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="40 120"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="160"
                        to="0"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;0.8;1"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                </path>



                {/* Dotted wavy lines to bottom circles */}
                <path
                    d="M430 200 C 440 250, 260 250, 280 325"
                    stroke="rgb(196,199,210)"
                    strokeWidth="2"
                    strokeDasharray="8 12"
                    fill="none"
                />
                <path
                    d="M430 200 C 440 250, 260 250, 280 325"
                    stroke="var(--accent)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="40 120"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="160"
                        to="0"
                        dur="1.4s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;0.8;1"
                        dur="1.4s"
                        repeatCount="indefinite"
                    />
                </path>
                {/* Second */}
                <path
                    d="M460 200 C 470 250, 360 250, 380 325"
                    stroke="rgb(196,199,210)"
                    strokeWidth="2"
                    strokeDasharray="8 12"
                    fill="none"
                />
                <path
                    d="M460 200 C 470 250, 360 250, 380 325"
                    stroke="var(--accent)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="40 120"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="160"
                        to="0"
                        dur="1.3s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;0.8;1"
                        dur="1.3s"
                        repeatCount="indefinite"
                    />
                </path>
                {/* Third */}
                <path
                    d="M510 200 C 500 250, 510 250, 530 325"
                    stroke="rgb(196,199,210)"
                    strokeWidth="2"
                    strokeDasharray="8 12"
                    fill="none"
                />
                <path
                    d="M510 200 C 500 250, 510 250, 530 325"
                    stroke="var(--accent)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="40 120"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="160"
                        to="0"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;0.8;1"
                        dur="1.2s"
                        repeatCount="indefinite"
                    />
                </path>
                {/* Fourth */}
                <path
                    d="M510 200 C 500 260, 600 250, 630 325"
                    stroke="rgb(196,199,210)"
                    strokeWidth="2"
                    strokeDasharray="8 12"
                    fill="none"
                />
                <path
                    d="M510 200 C 500 260, 600 250, 630 325"
                    stroke="var(--accent)"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray="40 120"
                >
                    <animate
                        attributeName="stroke-dashoffset"
                        from="160"
                        to="0"
                        dur="1.3s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="opacity"
                        values="1;0.8;1"
                        dur="1.3s"
                        repeatCount="indefinite"
                    />
                </path>


                <rect x="425" y="195" width="10" height="10" fill="rgb(152,154,178)" transform="rotate(45 430 200)" />
                <rect x="269" y="307" width="10" height="10" fill="rgb(152,154,178)" transform="rotate(45 260 325)" />

                <rect x="455" y="195" width="10" height="10" fill="rgb(152,154,178)" transform="rotate(45 460 200)" />
                <rect x="369" y="309" width="10" height="10" fill="rgb(152,154,178)" transform="rotate(45 360 325)" />

                <rect x="498" y="181" width="10" height="10" fill="rgb(152,154,178)" transform="rotate(45 490 200)" />
                <rect x="520" y="308" width="10" height="10" fill="rgb(152,154,178)" transform="rotate(45 510 325)" />
                <rect x="591" y="237" width="10" height="10" fill="rgb(152,154,178)" transform="rotate(45 510 325)" />


                <circle cx={240} cy={160} r={6} fill="rgb(196,199,210)" />
                <g transform="translate(400, 160)">
                    {/* Triangle pointing right */}
                    <path d="M-10,-6 L-2,0 L-10,6 Z" fill="rgb(196,199,210)" />

                    {/* Rectangle directly after triangle */}
                    <rect x="-3" y="-6" width="6" height="12" rx="1" fill="rgb(196,199,210)" />
                </g>
                <circle cx={740} cy={170} r={6} fill="rgb(196,199,210)" />
                <circle cx={740} cy={150} r={6} fill="rgb(196,199,210)" />



                <circle cx={560} cy={160} r={6} fill="rgb(196,199,210)" />
                <g transform="translate(660, 160)">
                    {/* Triangle pointing right */}
                    <path d="M-10,-6 L-2,0 L-10,6 Z" fill="rgb(196,199,210)" />

                    {/* Rectangle directly after triangle */}
                    <rect x="-3" y="-6" width="6" height="12" rx="1" fill="rgb(196,199,210)" />
                </g>

                <g transform="translate(850, 90)">
                    {/* Triangle pointing right */}
                    <path d="M-10,-6 L-2,0 L-10,6 Z" fill="rgb(196,199,210)" />

                    {/* Rectangle directly after triangle */}
                    <rect x="-3" y="-6" width="6" height="12" rx="1" fill="rgb(196,199,210)" />
                </g>

                <g transform="translate(850, 245)">
                    {/* Triangle pointing right */}
                    <path d="M-10,-6 L-2,0 L-10,6 Z" fill="rgb(196,199,210)" />

                    {/* Rectangle directly after triangle */}
                    <rect x="-3" y="-6" width="6" height="12" rx="1" fill="rgb(196,199,210)" />
                </g>
            </svg>


            {/* Node layout using absolute positioning */}
            <div className="absolute inset-0 z-10">
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className="absolute flex items-center justify-center"
                        style={{
                            top: `${node.top}px`,
                            left: `${node.left}px`,
                            width: `${node.width}px`,
                            height: `${node.height}px`,
                            borderRadius: node.circle ? '100%' : node.radius?.join(' ') || '.5rem',
                            border: '1px solid rgb(87,89,98)',
                            boxShadow: '-3px 3px 0px 0px rgb(87,89,98)',
                            backgroundColor: node.circle ? 'rgb(27,27,36)' : 'rgb(40,40,40)',
                        }}
                    >
                        {node.label ? (
                            <div className="flex flex-row items-center gap-3">
                                <Image src={node.img} alt={node.label} width={40} height={40} className="w-10 h-10" />
                                <p className="text-white font-medium">{node.label}</p>
                            </div>
                        ) : (
                            <Image
                                src={node.img}
                                alt={node.id}
                                width={node.circle ? 28 : 40}
                                height={node.circle ? 28 : 40}
                                className={`${node.circle ? 'w-7 h-7' : 'w-10 h-10'} ${node.id === 'form' ? 'ml-2' : ''}`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
