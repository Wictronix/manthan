"use client";

import { Section } from "@/components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Sponsors } from "@/components/home/Sponsors";
import { TEAM } from "@/data/mock";
import { useState, useEffect } from "react";
import { FiPlay, FiX } from "react-icons/fi";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function AboutPage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
                            US
                        </span>
                    </motion.h1>
                    <p className="text-soft-lavender uppercase tracking-widest">
                        Academic Excellence since 1936
                    </p>
                </div>
            </div>

            {/* ================= CONTENT ================= */}
            <Section background="default">
                <div className="max-w-6xl mx-auto space-y-24">

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

                    {/* ================= VIDEO MODAL ================= */}
                    <AnimatePresence>
                        {isVideoOpen && isMounted &&
                            createPortal(
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
                                    onClick={() => setIsVideoOpen(false)}
                                >
                                    {/* Close Button */}
                                    <button
                                        className="absolute top-6 right-6 text-white text-3xl hover:text-neon-magenta z-[100000]"
                                        onClick={() => setIsVideoOpen(false)}
                                    >
                                        <FiX />
                                    </button>

                                    {/* Video Container */}
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.9, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <iframe
                                            src="https://drive.google.com/file/d/1eVfooXZPhUpGDoMravZKq6hKGF4UyKfP/preview"
                                            className="absolute inset-0 w-full h-full"
                                            allow="autoplay; fullscreen"
                                            allowFullScreen
                                        />
                                    </motion.div>
                                </motion.div>,
                                document.body
                            )}
                    </AnimatePresence>

                    {/* ================= TEAM ================= */}
                    <div className="space-y-16 py-12">
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
                                    <div className="w-40 h-40 mx-auto rounded-2xl overflow-hidden mb-4 border border-white/10">
                                        {member.image ? (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
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
        </>
    );
}
