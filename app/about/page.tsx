"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Sponsors } from "@/components/home/Sponsors";
import { TEAM } from "@/data/mock";
import { useState, useEffect, useRef } from "react";
import { FiPlay, FiX } from "react-icons/fi";
import Image from "next/image";

export default function AboutPage() {
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
            {/* ================= HERO ================= */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary-bg overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-[0.05]" />
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6"
                    >
                        About{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start to-grad-end">
                            Manthan
                        </span>
                    </motion.h1>
                    <p className="text-soft-lavender uppercase tracking-widest">
                        Academic Excellence since 1936
                    </p>
                </div>
            </div>

            {/* ================= ABOUT TISS & MANTHAN ================= */}
            <div className="space-y-24">
                {/* TISS */}
                <div className="space-y-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-poppins text-soft-lavender flex items-center gap-3">
                        <span className="text-neon-magenta opacity-50">/</span> TISS Mumbai
                    </h2>
                    <div className="text-text-secondary leading-relaxed text-lg font-light space-y-6">
                        <p>
                            The Tata Institute of Social Sciences (TISS), Mumbai, established in 1936, is one of India’s most prestigious institutions in the field of social sciences, public policy, and management education.
                        </p>
                        <p>
                            A Deemed-to-be University since 1964 and fully funded by the Government of India, TISS carries a strong public mandate rooted in equity, justice, democracy, and human dignity.
                        </p>
                        <p>
                            TISS offers elite programs including its <span className="text-white font-medium border-b border-soft-lavender/30">HRM & LR program</span>, consistently ranked among the top HR programs in India, producing industry-ready leaders with strong strategy orientation.
                        </p>
                    </div>
                </div>

                {/* Manthan */}
                <div className="space-y-8 p-12 rounded-2xl bg-secondary-surface/30 border border-white/5 relative overflow-hidden backdrop-blur-md max-w-4xl mx-auto">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-grad-mid/5 blur-[100px] -z-10" />
                    <h2 className="text-3xl font-bold font-poppins text-neon-magenta flex items-center gap-3">
                        <span className="text-white opacity-20">/</span> Manthan
                    </h2>
                    <div className="text-text-secondary leading-relaxed text-lg font-light space-y-6">
                        <p>
                            Manthan, meaning “churning of ideas”, is the Annual Management & Cultural Fest of TISS Mumbai, a dynamic convergence of creativity, leadership, and social consciousness.
                        </p>
                        <p>
                            As one of the most anticipated inter-college festivals in Mumbai, it attracts participation from 80+ premier institutions. It is a platform where culture meets strategy, reflecting TISS’s ethos of building socially responsible leaders.
                        </p>
                    </div>
                </div>
            </div>


            {/* ================= CONTENT ================= */}
            <Section background="default">
                <div className="max-w-6xl mx-auto space-y-24">

                    {/* ================= ABOUT ================= */}
                    {/* (UNCHANGED CONTENT – kept exactly as provided) */}

                    {/* ================= TRAILER ================= */}
                    <div className="space-y-8 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-white">
                            Official{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start to-grad-end">
                                Trailer
                            </span>
                        </h2>

                        <div
                            className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-secondary-surface/50 flex items-center justify-center cursor-pointer group"
                            onClick={() => setIsVideoOpen(true)}
                        >
                            <Image
                                src="/images/01_HERO/Copy of HERO BANNER _MANTHAN.png"
                                alt="Trailer Thumbnail"
                                fill
                                className="object-cover opacity-60 group-hover:opacity-40 transition"
                            />
                            <div className="relative z-10 w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition">
                                <FiPlay className="text-white text-3xl ml-1" />
                            </div>
                        </div>
                    </div>

                    {/* ================= TEAM ================= */}
                    <div id="team" className="space-y-16 py-12">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-white">
                                The <span className="text-soft-lavender">Architects</span>
                            </h2>
                            <p className="text-text-muted">
                                Meet the team behind Manthan 2026
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {TEAM.map((member) => (
                                <div
                                    key={member.id}
                                    className="rounded-2xl bg-secondary-surface/40 border border-white/5 p-6 text-center"
                                >
                                    <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden mb-4 border border-white/10 relative">
                                        {member.image ? (
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-grad-mid/20 flex items-center justify-center">
                                                <span className="text-xs text-text-muted">
                                                    PHOTO_PENDING
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <h3 className="text-white font-bold">{member.name}</h3>
                                    <p className="text-soft-lavender text-xs uppercase">
                                        {member.role}
                                    </p>
                                    <p className="text-text-muted text-xs mt-2">
                                        {member.phone}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Sponsors />

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
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            )}
        </>
    );
}

const HighlightCard = ({ number, label }: { number: string; label: string }) => (
    <div className="p-8 rounded-sm bg-secondary-surface/40 border border-white/5 group hover:border-soft-lavender/30 transition-all duration-300 backdrop-blur-sm">
        <div className="text-4xl font-bold text-soft-lavender mb-1 group-hover:text-neon-magenta transition-colors origin-left font-mono">
            {number}
        </div>
        <div className="text-text-muted font-mono text-[10px] uppercase tracking-widest">
            {label}
        </div>
    </div>
);
