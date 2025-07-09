'use client';

import Image from "next/image";
import Link from "next/link";
import SlidingButton from "@/components/buttons/SlidingButton";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/30 text-foreground">
            {/* Left: Logo and Brand */}
            <Link href="/">
                <div className="flex items-center gap-3 cursor-pointer">
                    <Image src="/logos/operatoroslogo.svg" alt="OperatorOS Logo" width={32} height={32} />
                    <span className="font-semibold text-2xl">OperatorOS</span>
                </div>
            </Link>

            {/* Center: Floating Nav Links */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 shadow-md">
                <ul className="flex gap-6 text-sm font-medium">
                    <li><Link href="/services" className="hover:text-gray-300 transition">Services</Link></li>
                    <li><Link href="#" className="hover:text-gray-300 transition">Features</Link></li>
                    <li><Link href="/academy" className="hover:text-gray-300 transition">Academy</Link></li>
                    <li><Link href="#" className="hover:text-gray-300 transition">About</Link></li>
                </ul>
            </nav>

            {/* Right: CTA Button */}
            <div>
                <SlidingButton label="Apply Now" className='bg-foreground text-[var(--background)]' />
            </div>
        </header>
    );
}
