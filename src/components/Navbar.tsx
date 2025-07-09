import Image from "next/image";
import SlidingButton from "@/components/buttons/SlidingButton";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/30 text-foreground">
            {/* Left: Logo and Brand */}
            <a href="/">
                <div className="flex items-center gap-3">
                    <Image src="/logos/operatoroslogo.svg" alt="OperatorOS Logo" width={32} height={32} />
                    <span className="font-semibold text-2xl">OperatorOS</span>

                </div>
            </a>

            {/* Center: Floating Nav Links */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-2 shadow-md">
                <ul className="flex gap-6 text-sm font-medium">
                    <li><a href="/services" className="hover:text-gray-300 transition">Services</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition">Features</a></li>
                    <li><a href="/academy" className="hover:text-gray-300 transition">Academy</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition">About</a></li>
                </ul>
            </nav>

            {/* Right: CTA Button */}
            <div>
            <SlidingButton label="Apply Now" className='bg-foreground text-[var(--background)]' />
            </div>
        </header>
    );
}
