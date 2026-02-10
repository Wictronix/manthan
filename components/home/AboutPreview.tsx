"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FiPlay, FiX } from "react-icons/fi"; 

const AboutPreview = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const videoReadyRef = useRef(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Lock body scroll when video is open
    useEffect(() => {
        document.body.style.overflow = isVideoOpen ? "hidden" : "unset";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isVideoOpen]);

    // Reset ready flag every time modal opens
    useEffect(() => {
        if (isVideoOpen) {
            videoReadyRef.current = false;
            const t = setTimeout(() => {
                videoReadyRef.current = true;
            }, 150);
            return () => clearTimeout(t);
        }
    }, [isVideoOpen]);

    return (
        <>
            <Section background="elevated" className="py-24 border-y border-white/5 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-grad-start/5 to-transparent pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 text-left">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold font-poppins text-white mb-6"
                        >
                            Churning of{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start to-grad-end">
                                Ideas
                            </span>
                        </motion.h2>

                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed font-light">
                            <p>
                                Manthan, the Annual Management & Cultural Fest of TISS Mumbai, is a dynamic convergence of ideas,
                                creativity, leadership, and social consciousness.
                            </p>
                            <p>
                                It is a platform where{" "}
                                <span className="text-white font-medium italic border-b border-neon-magenta/30">
                                    culture meets strategy
                                </span>{" "}
                                and passion meets purpose, attracting participation from 80+ premier institutions across India.
                            </p>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <Button variant="secondary" href="/about">
                                Read More
                            </Button>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-video rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer"
                            onClick={() => setIsVideoOpen(true)}
                        >
                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-magenta z-20 opacity-40" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-magenta z-20 opacity-40" />

                            {/* Hero Image */}
                            <Image
                                src="/images/01_HERO/Copy of HERO BANNER _MANTHAN.png"
                                alt="Manthan Hero Banner"
                                fill
                                className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                                priority
                            />

                            {/* Play Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-20 h-20 bg-dark-bg/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:border-neon-magenta transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                                    <FiPlay className="text-white text-3xl ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* ================= VIDEO OVERLAY (IFRAME) ================= */}
            {isVideoOpen && isMounted && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
                    style={{ zIndex: 2147483647 }}
                    onClick={() => {
                        if (!videoReadyRef.current) return;
                        setIsVideoOpen(false);
                    }}
                >
                    <button
                        className="absolute top-6 right-6 text-white text-3xl hover:text-neon-magenta p-4 bg-black/30 rounded-full transition"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsVideoOpen(false);
                        }}
                    >
                        <FiX />
                    </button>

                    <div
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/V8yXxiZgmgA?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1"
                            title="Manthan '26 Trailer 1"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export { AboutPreview };
