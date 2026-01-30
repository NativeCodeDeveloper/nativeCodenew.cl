import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const projects = [
    {
        date: "JANUARY 28, 2026",
        title: "EcoSmart Landing Platform",
        description: "A high-performance web platform focused on sustainable energy data visualization and real-time monitoring.",
        tag: "WEB DEVELOPMENT",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        date: "JANUARY 15, 2026",
        title: "Quantum Finance App",
        description: "Native mobile application for advanced algorithmic trading and portfolio management with biometric security.",
        tag: "MOBILE APP",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        date: "JANUARY 15, 2026",
        title: "Quantum Finance App",
        description: "Native mobile application for advanced algorithmic trading and portfolio management with biometric security.",
        tag: "MOBILE APP",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        date: "JANUARY 15, 2026",
        title: "Quantum Finance App",
        description: "Native mobile application for advanced algorithmic trading and portfolio management with biometric security.",
        tag: "MOBILE APP",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    }
];

export default function Portfolio() {
    return (
        <section className="bg-black py-24 border-t border-[rgba(31,34,40)]">
            <div className="max-w-7xl mx-auto px-6 space-y-24">

                {projects.map((project, index) => (
                    <div key={index} className="group border-t border-[rgba(31,34,40)] pt-12 first:border-none first:pt-0">
                        <div className="grid grid-cols-1 md:grid-cols-[15%_45%_40%] gap-8 items-start">

                            {/* Date Column */}
                            <div className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase pt-2">
                                {project.date}
                            </div>

                            {/* Content Column */}
                            <div className="flex flex-col h-full justify-between pr-8">
                                <div>
                                    <h3 className="text-2xl font-display text-white mb-4 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 text-base leading-relaxed font-normal max-w-md">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-12 md:mt-24">
                                    <span className="text-[10px] font-mono text-zinc-500 tracking-[0.2em] uppercase">
                                        {project.tag}
                                    </span>
                                    <Link
                                        href={project.link}
                                        className="px-6 py-2 rounded-full border border-[rgba(255,255,255,0.2)] bg-white/5 text-[10px] font-mono text-white tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                                    >
                                        VIEW PROJECT
                                    </Link>
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="relative aspect-[16/9] overflow-hidden rounded-sm group-hover:opacity-90 transition-opacity">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
