import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm font-mono text-zinc-500">

                {/* Brand */}
                <div>
                    <h4 className="text-white font-bold opacity-80 mb-2">Native Code</h4>
                    <p>© {new Date().getFullYear()} Native Code SpA.</p>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
                    <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
                    <Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link>
                    <Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link>
                </div>

                {/* Socials */}
                <div className="flex flex-col md:items-end gap-2 md:gap-4">
                    <Link href="https://twitter.com" target="_blank" className="hover:text-white transition-colors">Twitter / X</Link>
                    <Link href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">LinkedIn</Link>
                    <Link href="https://github.com" target="_blank" className="hover:text-white transition-colors">GitHub</Link>
                </div>

            </div>
        </footer>
    );
}
