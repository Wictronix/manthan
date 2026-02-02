"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

const Sponsors = () => {
    return (
        <Section background="default" pattern="grid" mask="linear" showOrbs orbColor="primary" className="py-24 border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start to-grad-end">
                        Sponsors
                    </span>
                </h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
                    The pillars of support that make Manthan possible.
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative group overflow-hidden rounded-2xl border border-white/10 bg-secondary-surface/30 backdrop-blur-xl p-12 md:p-20 text-center shadow-2xl"
                >
                    {/* Animated background highlights */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-grad-start/5 blur-[100px] pointer-events-none group-hover:bg-grad-start/10 transition-colors duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-grad-end/5 blur-[100px] pointer-events-none group-hover:bg-grad-end/10 transition-colors duration-700"></div>

                    <h3 className="text-2xl md:text-4xl font-bold font-poppins text-white mb-4 tracking-tight relative z-10">
                        It will be announced soon
                    </h3>
                    <p className="text-soft-lavender font-mono text-sm tracking-[0.2em] uppercase opacity-60 relative z-10">
                        STAY_TUNED_FOR_THE_LINEUP
                    </p>

                    {/* Subtle pulse effect */}
                    <div className="mt-8 flex justify-center relative z-10">
                        <div className="w-2 h-2 rounded-full bg-neon-magenta animate-ping"></div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

export { Sponsors };
