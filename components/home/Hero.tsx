"use client";

import { Button } from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
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
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.1] grayscale"
                    style={{ backgroundImage: 'url(https://placehold.co/1920x1080/0a0a0a/EC4899?text=Manthan+Cyber+Vision)' }}
                />
                {/* Pattern Layer */}
                <div className="absolute inset-0 bg-grid opacity-[0.05] mask-radial-fade" />

                {/* Ambient Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-grad-start/10 rounded-full blur-[120px] animate-float opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-magenta/5 rounded-full blur-[100px] animate-float opacity-30" style={{ animationDelay: '2s' }} />

                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/50 via-transparent to-primary-bg" />
            </motion.div>

            {/* Floating Elements (Cyber/Tech Deco) */}
            <div className="absolute top-1/4 left-10 w-24 h-24 border border-grad-mid/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-neon-magenta/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            <div className="relative z-10 px-4 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6"
                >
                    <span className="inline-block py-1 px-4 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs md:text-sm font-medium text-soft-lavender tracking-widest uppercase">
                        Tata Institute of Social Sciences Presents
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-7xl md:text-9xl lg:text-[11rem] font-bold font-poppins mb-2 tracking-tighter leading-none"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-text-secondary to-grad-mid drop-shadow-[0_0_30px_rgba(124,58,237,0.2)]">
                        MANTHAN
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-4xl font-light mb-10 text-soft-lavender tracking-widest uppercase opacity-80"
                >
                    Dare<span className="text-white/10 mx-4">/</span>Dream<span className="text-white/10 mx-4">/</span>Discover
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-sm md:text-base text-text-muted font-mono mb-12 flex items-center justify-center gap-4"
                >
                    <span className="text-neon-magenta opacity-50">&#60;</span>
                    February 12–13, 2026
                    <span className="text-neon-magenta opacity-50">/&#62;</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button size="lg" variant="primary" href="/events">
                        Register Now
                    </Button>
                    <Button size="lg" variant="outline" href="/about">
                        Explore Domain
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                {/* <span className="text-[10px] uppercase tracking-widest text-text-muted font-mono">sys.scroll()</span> */}
                <div className="w-[1px] h-12 bg-gradient-to-b from-soft-lavender to-transparent"></div>
            </motion.div>
        </div>
    );
};

export { Hero };
