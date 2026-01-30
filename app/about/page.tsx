"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Sponsors } from "@/components/home/Sponsors";

export default function AboutPage() {
    return (
        <>
            {/* Hero Banner */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-primary-bg overflow-hidden text-left">
                <div className="absolute inset-0 bg-grad-start/5"></div>
                {/* Pattern Layer */}
                <div className="absolute inset-0 bg-grid opacity-[0.05] mask-radial-fade" />
                {/* Animated Background Mesh */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(167,139,250,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 tracking-tight"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start via-grad-mid to-grad-end drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">Manthan</span>
                    </motion.h1>
                    <p className="text-soft-lavender text-lg md:text-xl font-light leading-relaxed opacity-80 uppercase tracking-widest">
                        Academic Excellence since 1936
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <Section background="default" pattern="dot" mask="linear" showOrbs orbColor="primary" className="border-t border-white/5 relative">
                <div className="max-w-4xl mx-auto space-y-24 text-left">

                    {/* About TISS */}
                    <div className="space-y-8">
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

                    {/* About Manthan */}
                    <div className="space-y-8 p-12 rounded-2xl bg-secondary-surface/30 border border-white/5 relative overflow-hidden backdrop-blur-md">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-grad-mid/5 blur-[100px] -z-10" />
                        <h2 className="text-3xl font-bold font-poppins text-neon-magenta flex items-center gap-3">
                            <span className="text-white opacity-20">/</span> Manthan
                        </h2>
                        <div className="text-text-secondary leading-relaxed text-lg font-light space-y-6">
                            <p>
                                Manthan, meaning “churning of ideas”, is the Annual Management & Cultural Fest of TISS Mumbai—a dynamic convergence of creativity, leadership, and social consciousness.
                            </p>
                            <p>
                                As one of the most anticipated inter-college festivals in Mumbai, it attracts participation from 80+ premier institutions. It is a platform where culture meets strategy, reflecting TISS’s ethos of building socially responsible leaders.
                            </p>
                        </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                        <HighlightCard number="#1" label="Social Science Institute" />
                        <HighlightCard number="20+" label="Engaging Events" />
                        <HighlightCard number="80+" label="Participating Colleges" />
                        <HighlightCard number="8k+" label="Ground Footfall" />
                        <HighlightCard number="1M+" label="Digital Reach" />
                        <HighlightCard number="2" label="Days of Churning" />
                    </div>

                </div>
            </Section>

            <Sponsors />
        </>
    );
}

const HighlightCard = ({ number, label }: { number: string; label: string }) => (
    <div className="p-8 rounded-sm bg-secondary-surface/40 border border-white/5 group hover:border-soft-lavender/30 transition-all duration-300 backdrop-blur-sm">
        <div className="text-4xl font-bold text-soft-lavender mb-1 group-hover:text-neon-magenta transition-colors origin-left font-mono">{number}</div>
        <div className="text-text-muted font-mono text-[10px] uppercase tracking-widest">{label}</div>
    </div>
);
