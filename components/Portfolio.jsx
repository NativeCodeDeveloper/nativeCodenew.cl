import React from 'react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const projects = [
    {
        date: "FEBRERO 04, 2026",
        title: "SILUETA CHIC",
        description: "Plataforma diseñada para gestionar clientes, automatizacion y pasarela de pagos para una clínica de estética.",
        tag: "WEB DEVELOPMENT",
        image: "images/silueta.png",
        link: "https://siluetachic.cl"
    },
    {
        date: "ABRIL 01, 2025",
        title: "RUNA JOYAS E-commerce Platform",
        description: "Plataforma de comercio electrónico para la venta de joyas artesanales con integración de pasarelas de pago y gestión de inventario.",
        tag: "WEB DEVELOPMENT",
        image: "images/runa2.png",
        link: "https://www.runajoyas.cl"
    },
    {
        date: "AGOSTO 22, 2025",
        title: "MACAR REPUESTOS",
        description: "Plataforma destinada a la venta de repuestos automotrices de alta calidad con catálogo en línea y opciones de envío.",
        tag: "WEB DEVELOPMENT",
        image: "images/macar.png",
        link: "https://www.repuestosmacar.cl"
    },
    {
        date: "NOVIEMBRE 10, 2025",
        title: "MEDIFY CLINIC",
        description: "Ecosistema diseñado para la gestión integral de profesionales de la salud con funcionalidades de citas, historial médico y facturación.",
        tag: "ECOSYSTEM",
        image: "images/medify.png",
        link: "https://www.medifyclinic.cl"
    },
];

export default function Portfolio() {
    return (
        <section className="bg-black py-24 border-t border-[rgba(31,34,40)] relative">
            
            {/* Top Fade from Black */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent pointer-events-none z-10" />
            
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
                                    <h3 className="text-2xl font-sans font-medium text-white mb-4 tracking-tight">
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
                                        VER PROYECTO
                                    </Link>
                                </div>
                            </div>

                            {/* Image Column */}
                            <div className="relative aspect-video overflow-hidden rounded-sm group-hover:opacity-90 transition-opacity">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                            </div>

                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}
