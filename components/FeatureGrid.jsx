import { ArrowUpRight, Code2, Database, Globe } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Desarrollo Nativecode",
        description: "Desarrollamos aplicaciones con React Native y Swift. Optimizadas para interacciones fluidas.",
        icon: <Code2 size={24} />,
        link: "#services"
    },
    {
        title: "Plataformas Web",
        description: "Desarrollamos aplicaciones web escalables con Next.js y Vercel. SEO-optimized and globally distributed.",
        icon: <Globe size={24} />,
        link: "#services"
    },
    {
        title: "Ecosistemas integrales",
        description: "Desarrollamos ecosistemas integrales para tus aplicaciones. Robust API design and cloud infrastructure. Secure, efficient, and ready for scale.",
        icon: <Database size={24} />,
        link: "#services"
    }
];

export default function FeatureGrid() {
    return (
        <section className="bg-black relative z-20 border-t border-[rgba(31,34,40)]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[rgba(31,34,40)] border-b border-[rgba(31,34,40)]">

                {features.map((feature, index) => (
                    <div key={index} className="group relative p-12 transition-colors hover:bg-white/5 flex flex-col justify-between min-h-[400px]">

                        {/* Header */}
                        <div className="space-y-6">
                            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white border border-[rgba(31,34,40)] group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-2 font-display">
                                {feature.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-base">
                                {feature.description}
                            </p>
                        </div>

                        {/* Action Pill - x.ai style */}
                        <div className="mt-12 flex items-center justify-between">
                            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                                Learn more
                            </span>
                            <Link
                                href={feature.link}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 rounded-full",
                                    "border border-[rgba(255,255,255,0.15)] bg-white/10",
                                    "text-xs font-mono uppercase tracking-widest text-white",
                                    "hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                                )}
                            >
                                <span>View</span>
                                <ArrowUpRight size={14} />
                            </Link>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}
