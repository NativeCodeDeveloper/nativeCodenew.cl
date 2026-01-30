"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
        date: "DECEMBER 10, 2025",
        title: "HealthSync Infrastructure",
        description: "Comprehensive clinical data management ecosystem with HIPAA compliance and real-time analytics.",
        tag: "INFRASTRUCTURE",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    },
    {
        date: "NOVEMBER 20, 2025",
        title: "RetailOS Cloud System",
        description: "Scalable e-commerce platform with inventory management and predictive analytics.",
        tag: "CLOUD SOLUTION",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        link: "#"
    }
];

export default function ProyectosPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 space-y-6"
                >
                    <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white">
                        Proyectos.
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
                        Explora nuestra selección de trabajos donde la tecnología y el diseño convergen para crear soluciones excepcionales.
                    </p>
                </motion.header>

                {/* Projects List */}
                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className="group border-t border-[rgba(31,34,40)] pt-12 first:border-none first:pt-0"
                        >
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
                        </motion.div>
                    ))}
                </div>

            </div>
        </main>
    );
}
