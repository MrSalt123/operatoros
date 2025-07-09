import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 mt-48 text-sm text-white/60 bg-background">
            
            {/* 1. The clipping container. Its height is half the glow's height. */}
            <div className="absolute -top-16 left-0 w-full h-48 overflow-visible pointer-events-none">
                {/* 2. The new glow element: centered, fixed-width, and rounded. */}
                <div className="absolute top-7 left-1/2 -translate-x-1/2 w-[100%] h-48 bg-glow rounded-full blur-2xl opacity-30" />
            </div>

            {/* The rest of the footer content, stacked on top */}
            <div className="relative bg-background py-16 px-6 z-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Site Links */}
                    <div className="flex flex-col gap-2">
                        <h5 className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">Site</h5>
                        <Link href="/" className="hover:text-white transition">Home</Link>
                        <Link href="/about" className="hover:text-white transition">About</Link>
                        <Link href="/services" className="hover:text-white transition">Services</Link>
                        <Link href="/process" className="hover:text-white transition">Process</Link>
                        <Link href="/apply" className="hover:text-white transition">Apply</Link>
                    </div>

                    {/* Get In Touch */}
                    <div className="flex flex-col gap-2">
                        <h5 className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">Get in Touch</h5>
                        <p className="text-white/40">Questions? Let&apos;s chat.</p>
                        <Link href="mailto:operations@operator.os" className="hover:text-white transition">
                            operations@operator.os
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-2">
                        <h5 className="text-white text-sm font-semibold mb-2 uppercase tracking-wide">Social</h5>
                        <Link href="https://twitter.com/btwndesign" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            Twitter
                        </Link>
                        <Link href="https://linkedin.com/company/btwndesign" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            LinkedIn
                        </Link>
                        <Link href="https://whop.com/btwn" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                            Whop Store
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-end border-t border-white/10 pt-8 mt-16">
                    <p className="text-white/40 md:text-left">
                        © {new Date().getFullYear()} | OperatorOS / Built by <a href="https://btwn.design">BTWN Web Design</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}