"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
                scrolled || isOpen
                    ? "bg-primary-bg/80 backdrop-blur-xl border-white/5 py-2 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    : "bg-transparent py-3"

            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

                {/* LOGO (UPDATED) */}
                <Link href="/" className="flex items-center z-50 group">
                    <Image
                        src="/images/03_LOGOS/Manthan Logo new.png"
                        alt="Mantha 26 Logo"
                        width={160}
                        height={60}
                        priority
                        className="object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative group py-2"
                        >
                            <span
                                className={cn(
                                    "text-sm font-medium transition-colors relative z-10",
                                    pathname === link.href
                                        ? "text-neon-magenta"
                                        : "text-text-secondary group-hover:text-white"
                                )}
                            >
                                {link.name}
                            </span>

                            <span
                                className={cn(
                                    "absolute bottom-0 left-0 w-full h-[2px] bg-neon-magenta rounded-full transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100 group-hover:origin-left",
                                    pathname === link.href &&
                                    "scale-x-100 origin-left shadow-[0_0_8px_rgba(236,72,153,0.6)]"
                                )}
                            />
                        </Link>
                    ))}

                    <div className="ml-4">
                        <Button size="sm" variant="primary" href="/events">
                            Register Now
                        </Button>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 z-50 rounded-md text-white hover:bg-white/10 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: "100vh" }}
                            exit={{ opacity: 0, y: -20, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-0 left-0 w-full bg-primary-bg/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 pb-8 md:hidden overflow-hidden"
                        >
                            {NAV_LINKS.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + index * 0.05 }}
                                    className="w-full"
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block text-2xl font-bold py-4 px-6 w-full text-center hover:bg-white/5 hover:text-neon-magenta transition-colors",
                                            pathname === link.href
                                                ? "text-neon-magenta"
                                                : "text-text-secondary"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8"
                            >
                                <Button
                                    href="/events"
                                    variant="primary"
                                    size="lg"
                                    className="w-full min-w-[200px]"
                                >
                                    Register Now
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export { Navbar };
