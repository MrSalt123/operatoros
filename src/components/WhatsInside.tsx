export default function WhatsInside() {
    return (
        <section className="w-full px-6 py-36 bg-background text-white flex justify-center">
            {/* Add `relative` here to make this the positioning context for the lines */}
            <div className="relative max-w-5xl w-full">

                {/* Dotted Line Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 h-full w-px border-dashed-loose left-[0%]" />
                    <div className="absolute top-0 h-full w-px border-dashed-loose left-[25%]" />
                    <div className="absolute top-0 h-full w-px border-dashed-loose left-[50%]" />
                    <div className="absolute top-0 h-full w-px border-dashed-loose left-[75%]" />
                    <div className="absolute top-0 h-full w-px border-dashed-loose left-[100%]" />
                </div>

                {/* Your existing content - needs a z-index to be on top of the lines */}
                <div className="relative z-10 p-4">
                    {/* Heading */}
                    <div className="text-left mb-16 md:w-1/2 flex flex-col gap-4">
                        <h2 className="text-4xl font-bold">Join Over 200 Students Pioneering AI</h2>
                        <h6 className="text-muted">
                            We provide the structure, mentorship, and resources you need to go from idea to deployed AI agent, faster than you thought possible.
                        </h6>
                    </div>

                    {/* Staggered Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Block 1 */}
                        <div className="bg-bg-light p-2 flex flex-col gap-4 md:translate-y-36">
                            <div className="bg-bg-extralight pt-18 pl-18 relative overflow-hidden">
                                <div className="absolute top-12 left-8 w-135 h-90 rounded-full bg-glow blur-2xl opacity-40 z-0" />
                                <img src="/img/community3.png" alt="Community Hub" className="relative w-auto h-full" />
                            </div>
                            <div className="flex flex-col p-4 gap-4">
                                <h4 className="font-semibold">Get Unstuck, Instantly</h4>
                                <p className="text-muted">
                                    Join multiple live group coaching calls every week. This is your chance to ask questions directly, get real-time feedback on your projects, and learn the advanced techniques that are working right now.                            </p>
                            </div>
                        </div>

                        {/* Block 2 */}
                        <div className="bg-bg-light p-2 flex flex-col gap-4">
                            <div className="bg-bg-extralight pt-18 pl-18 relative overflow-hidden">
                                <div className="absolute top-12 left-8 w-135 h-90 rounded-full bg-[#39FF14] blur-2xl opacity-40 z-0" />
                                <img src="/img/community3.png" alt="Community Hub" className="relative w-auto h-full" />
                            </div>
                            <div className="flex flex-col p-4 gap-4">
                                <h4 className="font-semibold">Your Personal Project Accelerator</h4>
                                <p className="text-muted">
                                    Go deeper with dedicated 1:1 coaching. We&apos;ll help you build a custom project roadmap, review your code, and provide the personalized guidance needed to overcome your specific challenges and launch faster.                            </p>
                            </div>
                        </div>

                        {/* Block 3 */}
                        <div className="bg-bg-light p-2 flex flex-col gap-4 md:translate-y-36">
                            <div className="bg-bg-extralight pt-18 pl-18 relative overflow-hidden">
                                <div className="absolute top-12 left-8 w-135 h-90 rounded-full bg-orange-500 blur-2xl opacity-40 z-0" />
                                <img src="/img/community3.png" alt="Community Hub" className="relative w-auto h-full" />
                            </div>
                            <div className="flex flex-col p-4 gap-4">
                                <h4 className="font-semibold">Never Build Alone</h4>
                                <p className="text-muted">
                                    Our private community is your 24/7 support system. Get instant feedback from peers, find collaborators for new projects, and network with a curated group of fellow AI pioneers.
                                </p>
                            </div>
                        </div>

                        {/* Block 4 */}
                        <div className="bg-bg-light p-2 flex flex-col gap-4 rounded-xl overflow-hidden">
                            <div className="bg-bg-extralight relative h-90 overflow-hidden rounded-lg">
                                {/* Glow behind top-left image */}
                                <div className="absolute top-12 left-12 w-48 h-64 rounded-full bg-blue-500 blur-2xl opacity-40 z-0" />

                                {/* Glow behind bottom-right image */}
                                <div className="absolute bottom-12 right-10 w-52 h-64 rounded-full bg-blue-500 blur-2xl opacity-40 z-0" />

                                {/* Top-left image */}
                                <img
                                    src="/img/n8n.png"
                                    alt="Top Left"
                                    className="absolute top-4 left-0 w-[46%] h-auto object-cover rounded-md z-10"
                                />

                                {/* Bottom-right image */}
                                <img
                                    src="/img/n8n2.png"
                                    alt="Bottom Right"
                                    className="absolute bottom-4 right-0 w-[46%] h-auto object-cover rounded-md z-10"
                                />
                            </div>

                            <div className="flex flex-col p-4 gap-4">
                                <h4 className="font-semibold">Skip the Guesswork</h4>
                                <p className="text-muted">
                                    Gain full access to our library of proven project blueprints, reusable code snippets, and workflow templates. Stop reinventing the wheel and start building on a foundation of success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}