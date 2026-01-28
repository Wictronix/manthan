"use client";

import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMusic, FiBriefcase, FiFlag, FiActivity } from "react-icons/fi";

const CATEGORIES = [
    {
        id: "flagship",
        name: "Flagship",
        icon: <FiFlag size={32} />,
        color: "group-hover:text-neon-magenta",
        border: "group-hover:border-neon-magenta",
        glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
        href: "/events?category=flagship",
        desc: "THE_MAIN_PROTOCOLS"
    },
    {
        id: "cultural",
        name: "Cultural",
        icon: <FiMusic size={32} />,
        color: "group-hover:text-grad-end",
        border: "group-hover:border-grad-end",
        glow: "group-hover:shadow-[0_0_30px_rgba(192,38,211,0.3)]",
        href: "/events?category=cultural",
        desc: "DANCE_SYNTH_DRAMA"
    },
    {
        id: "management",
        name: "Management",
        icon: <FiBriefcase size={32} />,
        color: "group-hover:text-soft-lavender",
        border: "group-hover:border-soft-lavender",
        glow: "group-hover:shadow-[0_0_30px_rgba(167,139,250,0.3)]",
        href: "/events?category=management",
        desc: "STRATEGY_DECODING"
    },
    {
        id: "sports",
        name: "Sports",
        icon: <FiActivity size={32} />,
        color: "group-hover:text-grad-start",
        border: "group-hover:border-grad-start",
        glow: "group-hover:shadow-[0_0_30px_rgba(76,29,149,0.3)]",
        href: "/events?category=sports",
        desc: "PHYSICAL_GRID"
    },
];

const EventCategories = () => {
    return (
        <Section background="default" pattern="grid" mask="linear" showOrbs orbColor="secondary" className="py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start via-grad-mid to-grad-end">
                        Categories
                    </span>
                </h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
                    [ SELECT_DOMAIN_OF_ENGAGEMENT ]
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map((cat, index) => (
                    <Link key={cat.id} href={cat.href} className="group relative block h-64">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`h-full bg-secondary-surface/40 backdrop-blur-sm border border-white/5 rounded-xl p-8 flex flex-col items-start justify-between transition-all duration-300 ${cat.border} ${cat.glow}`}
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-bg to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                            <div className={`relative z-10 text-text-muted transition-colors duration-300 ${cat.color} bg-white/5 p-3 rounded-lg`}>
                                {cat.icon}
                            </div>

                            <div className="relative z-10 w-full text-left">
                                <h3 className="text-2xl font-bold font-poppins text-white mb-1 group-hover:translate-x-1 transition-transform duration-300 tracking-tight">
                                    {cat.name}
                                </h3>
                                <p className="text-[10px] font-mono text-text-muted group-hover:text-text-secondary transition-colors tracking-widest whitespace-nowrap">
                    // {cat.desc}
                                </p>

                                <div className={`w-full h-[1px] bg-white/10 mt-4 overflow-hidden`}>
                                    <div className={`h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:animate-[shimmer_1s_infinite]`}></div>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};

export { EventCategories };
