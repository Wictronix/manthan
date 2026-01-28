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
        color: "text-neon-magenta",
        borderGlow: "before:shadow-[0_0_60px_rgba(236,72,153,0.5)]",
        hoverGlow: "hover:before:shadow-[0_0_80px_rgba(236,72,153,0.8)]",
        href: "/events?category=flagship",
        desc: "THE_MAIN_PROTOCOLS"
    },
    {
        id: "cultural",
        name: "Cultural",
        icon: <FiMusic size={32} />,
        color: "text-grad-end",
        borderGlow: "before:shadow-[0_0_60px_rgba(192,38,211,0.5)]",
        hoverGlow: "hover:before:shadow-[0_0_80px_rgba(192,38,211,0.8)]",
        href: "/events?category=cultural",
        desc: "DANCE_SYNTH_DRAMA"
    },
    {
        id: "management",
        name: "Management",
        icon: <FiBriefcase size={32} />,
        color: "text-soft-lavender",
        borderGlow: "before:shadow-[0_0_60px_rgba(167,139,250,0.5)]",
        hoverGlow: "hover:before:shadow-[0_0_80px_rgba(167,139,250,0.8)]",
        href: "/events?category=management",
        desc: "STRATEGY_DECODING"
    },
    {
        id: "sports",
        name: "Sports",
        icon: <FiActivity size={32} />,
        color: "text-grad-start",
        borderGlow: "before:shadow-[0_0_60px_rgba(76,29,149,0.5)]",
        hoverGlow: "hover:before:shadow-[0_0_80px_rgba(76,29,149,0.8)]",
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
                            className={`
                                relative h-full rounded-xl p-8 flex flex-col items-start justify-between
                                border border-white/10 bg-secondary-surface/30
                                transition-all duration-500
                                ${cat.borderGlow} ${cat.hoverGlow}
                                before:absolute before:-inset-1 before:rounded-xl before:z-[-1]
                                group-hover:scale-105
                            `}
                        >
                            {/* Icon */}
                            <div className={`relative z-10 text-2xl ${cat.color} font-bold`}>
                                {cat.icon}
                            </div>

                            {/* Text */}
                            <div className="relative z-10 w-full text-left">
                                <h3 className={`text-2xl font-bold font-poppins text-white mb-1 transition-colors duration-300 group-hover:text-neon-magenta tracking-tight`}>
                                    {cat.name}
                                </h3>
                                <p className="text-[10px] font-mono text-text-muted group-hover:text-text-secondary transition-colors tracking-widest whitespace-nowrap">
                                    {cat.desc}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </Section>
    );
};

export { EventCategories };
