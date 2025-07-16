'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlidingButton from '@/components/buttons/SlidingButton';
import { Menu, X } from 'lucide-react'; // Optional: swap out with SVG if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-black/30 text-foreground px-4">
  <div className="mx-auto max-w-screen-xl w-full flex items-center justify-between px-2 py-4">
      {/* Left: Logo */}
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image src="/logos/operatoroslogo.svg" alt="OperatorOS Logo" width={32} height={32} />
        <span className="hidden md:block font-semibold text-2xl">OperatorOS</span>
      </Link>

      {/* Desktop Nav Links */}
      <nav className="hidden md:block absolute left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 shadow-md">
        <ul className="flex gap-6 text-sm font-medium">
          <li><Link href="/services" className="hover:text-gray-300 transition">Services</Link></li>
          <li><Link href="/features" className="hover:text-gray-300 transition">Features</Link></li>
          <li><Link href="/academy" className="hover:text-gray-300 transition">Academy</Link></li>
          <li><Link href="/about" className="hover:text-gray-300 transition">About</Link></li>
        </ul>
      </nav>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <SlidingButton label="Get Started" className="bg-foreground text-[var(--background)]" />
      </div>

      {/* Mobile: Hamburger Icon */}
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <Menu size={24} />
      </button>

      {/* Mobile: Slide-in Drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-screen max-w-[80vw] w-64 bg-black z-50 shadow-lg flex flex-col p-6 gap-6 animate-slide-in">
          <div className="flex justify-end items-center">
            <button onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 mt-4">
            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Services</Link>
            <Link href="/features" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Features</Link>
            <Link href="/academy" onClick={() => setIsOpen(false)} className="hover:text-gray-300">Academy</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-300">About</Link>
          </nav>

          <div className="mt-4">
            <SlidingButton label="Get Started" className="w-full bg-foreground text-[var(--background)]" />
          </div>

          <div className='mt-auto'>
            <div className="flex flex-col items-end border-t border-white/10 pt-8 mt-16">
              <p className="text-white/40 md:text-left">
                © {new Date().getFullYear()} | OperatorOS / Built by <a href="https://btwn.design" className='underline'>BTWN Web Design</a>
              </p>
            </div>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}
