'use client';

import Image from 'next/image';
import React from 'react';
import Spacer from './Spacer';

const testimonials = [
  {
    name: 'Ava Martinez',
    avatar: '/avatars/ava.jpg',
    role: 'Startup Founder',
    testimonial: 'This course gave me the confidence to automate my entire onboarding pipeline. Bennet is the real deal.',
  },
  {
    name: 'Jay Patel',
    avatar: '/avatars/jay.jpg',
    role: 'Marketing Manager',
    testimonial: 'Practical, actionable, and powerful. I use Bennet’s playbooks every week in my campaigns.',
  },
  {
    name: 'Sofia Kim',
    avatar: '/avatars/sofia.jpg',
    role: 'Product Designer',
    testimonial: 'The systems Bennet teaches helped me land a freelance client on week one. Love the clarity.',
  },
  {
    name: 'Liam Chen',
    avatar: '/avatars/liam.jpg',
    role: 'AI Engineer',
    testimonial: 'I thought I knew automation until I took this. Bennet’s framework is years ahead of the curve.',
  },
  {
    name: 'Emily Zhao',
    avatar: '/avatars/emily.jpg',
    role: 'Ops Lead',
    testimonial: 'This saved me hours every week. Our entire team now uses what I built with Bennet’s lessons.',
  },
  {
    name: 'Marco Silva',
    avatar: '/avatars/marco.jpg',
    role: 'Freelancer',
    testimonial: 'This course doubled my output. Highly recommend for solopreneurs.',
  },
  {
    name: 'Nina Roman',
    avatar: '/avatars/nina.jpg',
    role: 'Consultant',
    testimonial: 'Bennet breaks things down so clearly. I immediately saw ways to improve my workflows.',
  },
  {
    name: 'Tariq Lewis',
    avatar: '/avatars/tariq.jpg',
    role: 'Founder @ CohereOps',
    testimonial: 'I’ve taken lots of courses, but this is the first that gave me actual working automations.',
  },
  {
    name: 'Isabella Rossi',
    avatar: '/avatars/isabella.jpg',
    role: 'Startup PM',
    testimonial: 'Honestly a game-changer. I’m more productive and finally confident with AI tools.',
  },
  {
    name: 'Nathan Cole',
    avatar: '/avatars/nathan.jpg',
    role: 'BizOps Analyst',
    testimonial: 'The best investment I’ve made this year. Everything is no-fluff and built for real results.',
  },
];

const TestimonialCard = ({ name, avatar, role, testimonial }: (typeof testimonials)[0]) => (
  <div className="w-72 shrink-0 rounded-2xl bg-white/5 p-6 shadow-lg backdrop-blur-md border border-white/10">
    <div className="flex items-center gap-4 mb-4">
      <Image src={avatar} alt={name} width={48} height={48} className="rounded-full" />
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white/60">{role}</p>
      </div>
    </div>
    <p className="text-white/80 text-sm">“{testimonial}”</p>
  </div>
);

export default function TestimonialTicker() {
  const firstRow = [...testimonials.slice(0, 5), ...testimonials.slice(0, 5)];
  const secondRow = [...testimonials.slice(5), ...testimonials.slice(5)];

  return (
    <section className="bg-background py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="">Real Students. Real Results.</h2>
        <Spacer size="sm" />
        <h5 className="text-muted">Here’s what they have to say.</h5>
      </div>

      <Spacer size="xxl" />
      <div className="space-y-12 max-w-6xl mx-auto px-6">
        {[firstRow, secondRow].map((row, i) => (
          <div
            key={i}
            className={`testimonial-row relative w-full overflow-hidden`}
          >
            <div
              className={`flex gap-6 w-max animate-scroll ${i === 1 ? 'reverse' : ''}`}
            >
              {row.map((props, idx) => (
                <TestimonialCard key={idx} {...props} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .animate-scroll.reverse {
          animation-direction: reverse;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-row::before,
        .testimonial-row::after {
          content: '';
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          z-index: 2;
        }

        .testimonial-row::before {
          left: 0;
          background: linear-gradient(to right, #0f0f0f, transparent);
        }

        .testimonial-row::after {
          right: 0;
          background: linear-gradient(to left, #0f0f0f, transparent);
        }
      `}</style>
    </section>
  );
}