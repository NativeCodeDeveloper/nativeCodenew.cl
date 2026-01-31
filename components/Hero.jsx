"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LaserFlow from "./LaserFlow";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

            {/* Laser Flow Background - Responsive positioning */}
            <div className="absolute inset-0 md:inset-5 z-10 md:top-5 -top-32">
                <LaserFlow
                    horizontalBeamOffset={0.9}
                    verticalBeamOffset={0.46}
                    color="#CF9EFF"
                    horizontalSizing={2.0}
                    verticalSizing={2.5}
                    wispDensity={1.5}
                    wispSpeed={10}
                    wispIntensity={5.1}
                    flowSpeed={0.50}
                    flowStrength={0.25}
                    fogIntensity={0.50}
                    fogScale={0.05}
                    fogFallSpeed={0.5}
                    decay={1.3}
                    falloffStart={1.5}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-4xl mx-auto px-4">

                {/* Main Title - Styled with Michroma via font-display */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full flex justify-center"
                >
                    <h1 className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-display font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 select-none drop-shadow-3xl">
                        <strong>NativeCode</strong>
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed tracking-wide"
                >
                    Construimos la plataforma que tu negocio necesita.
                </motion.p>

                {/* Prompt Input Box - Exact x.ai Replica */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="w-full max-w-2xl relative"
                >
                    {/*  <div className="relative group">
                         Subtle glow behind input 
                        <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-white/5 rounded-[28px] blur opacity-0 group-hover:opacity-50 transition duration-500" />

                        <div className="relative flex items-center bg-[#0a0a0a]/80 backdrop-blur-md border border-[#1f2228] rounded-[24px] focus-within:ring-2 focus-within:ring-zinc-600 transition-all shadow-lg">
                            <textarea
                                rows={1}
                                placeholder="Tell us about your project..."
                                className="w-full bg-transparent border-none outline-none text-white placeholder-zinc-500 font-sans text-lg px-6 py-5 resize-none overflow-hidden"
                                style={{ minHeight: '68px' }}
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <button className="p-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors">
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </div> */}
                </motion.div>

            </div>

        </section>
    );
}
