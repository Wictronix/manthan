"use client";

import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { useRef } from "react";

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div
            ref={containerRef}
            className="relative h-screen pt-20 flex items-center justify-center overflow-hidden bg-primary-bg text-center"
        >
            {/* Background Layers */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.1] grayscale"
                    style={{
                        backgroundImage:
                            "url(https://placehold.co/1920x1080/0a0a0a/EC4899?text=Mantha+Cultural)",
                    }}
                />
                <div className="absolute inset-0 bg-grid opacity-[0.05] mask-radial-fade" />
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-grad-start/10 rounded-full blur-[120px] animate-float opacity-50" />
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-magenta/5 rounded-full blur-[100px] animate-float opacity-30"
                    style={{ animationDelay: "2s" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/50 via-transparent to-primary-bg" />
            </motion.div>

            <div className="relative z-10 px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="inline-block py-1 px-4 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs md:text-sm font-medium text-soft-lavender tracking-widest">
                        Tata Institute of Social Sciences Presents
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-7xl md:text-9xl lg:text-[11rem] font-bold font-poppins mb-2 tracking-tighter leading-none"
                >
                    <span className="shine-wrapper">
                        <span className="shine-text text-transparent bg-clip-text bg-gradient-to-b from-white via-text-secondary to-grad-mid">
                            MANTHA
                        </span>
                        <motion.span
                            aria-hidden
                            className="shine-overlay"
                            initial={{ x: "-160%" }}
                            animate={{ x: "160%" }}
                            transition={{
                                duration: 4.2,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 5,
                            }}
                        />
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-4xl font-light mb-10 text-soft-lavender tracking-widest opacity-80"
                >
                    Dare<span className="text-white/10 mx-4">/</span>Dream
                    <span className="text-white/10 mx-4">/</span>Discover
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="/events" className="glow-btn">
                        Register Now
                    </a>

                    <Button size="lg" variant="outline" href="/about">
                        Learn More
                    </Button>
                </motion.div>
            </div>

            {/* ✅ STYLES MUST LIVE HERE */}
            <style jsx>{`
                .shine-wrapper {
                    position: relative;
                    display: inline-block;
                    overflow: hidden;
                }
                .shine-text {
                    position: relative;
                    z-index: 1;
                }
                .shine-overlay {
                    position: absolute;
                    inset: 0;
                    width: 160%;
                    height: 100%;
                    background: linear-gradient(
                        120deg,
                        transparent 42%,
                        rgba(255, 255, 255, 0.75) 50%,
                        transparent 58%
                    );
                    filter: blur(2.5px);
                    mix-blend-mode: screen;
                    pointer-events: none;
                }

                /* REGISTER NOW BUTTON */
                .glow-btn {
                    min-width: 260px;
                    height: 60px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 600;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                    color: #f5e9ff;
                    background: linear-gradient(
                        90deg,
                        rgba(236, 72, 153, 0.95),
                        rgba(168, 85, 247, 0.95)
                    );
                    border-radius: 999px;
                    position: relative;
                    box-shadow: 0 0 35px rgba(236, 72, 153, 0.45);
                    transition: all 0.35s ease;
                }

                .glow-btn::before {
                    content: "";
                    position: absolute;
                    inset: -6px;
                    border-radius: 999px;
                    border: 2px solid rgba(236, 72, 153, 0.9);
                    box-shadow: 0 0 60px rgba(236, 72, 153, 0.8);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .glow-btn::after {
                    content: "";
                    position: absolute;
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    border: 2px solid rgba(236, 72, 153, 0.9);
                    animation: pulse-ring 1.8s infinite;
                }

                .glow-btn:hover {
                    transform: translateY(-6px);
                }

                .glow-btn:hover::before {
                    opacity: 1;
                }

                .glow-btn:hover::after {
                    animation: none;
                    opacity: 0;
                }

                @keyframes pulse-ring {
                    0% {
                        width: 24px;
                        height: 24px;
                        opacity: 1;
                    }
                    100% {
                        width: 280px;
                        height: 280px;
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export { Hero };
