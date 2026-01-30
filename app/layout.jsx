import { Geist, Geist_Mono, Michroma } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const michroma = Michroma({
    variable: '--font-michroma',
    subsets: ['latin'],
    weight: '400',
});

export const metadata = {
    title: 'Native Code | Crafting Digital Futures',
    description: 'Building the next generation of digital experiences with cutting-edge technology.',
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${michroma.variable} antialiased bg-black text-white selection:bg-white selection:text-black`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
