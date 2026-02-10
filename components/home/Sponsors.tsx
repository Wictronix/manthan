"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { SPONSORS } from "@/data/mock";
import Image from "next/image";

const Sponsors = () => {
    // Row 1: Title, Associate, Event, Tech
    const row1Types = ['Title Sponsor', 'Associate Sponsor', 'Event Partner', 'Tech Partner'];
    const row1Sponsors = SPONSORS.filter(s => row1Types.includes(s.type));

    // Row 2: Snacking, Logistics, Others
    const row2Sponsors = SPONSORS.filter(s => !row1Types.includes(s.type));

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

            <div className="flex flex-col gap-12 relative overflow-hidden w-full">
                {/* Gradient Masks for smooth fade edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-primary-bg to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-primary-bg to-transparent z-10 pointer-events-none" />

                {/* ROW 1 - Left Direction */}
                <div className="flex gap-8 w-max">
                    <MarqueeContent sponsors={row1Sponsors} direction="left" />
                    <MarqueeContent sponsors={row1Sponsors} direction="left" />
                </div>

                {/* ROW 2 - Right Direction */}
                <div className="flex gap-8 w-max">
                    <MarqueeContent sponsors={row2Sponsors} direction="right" />
                    <MarqueeContent sponsors={row2Sponsors} direction="right" />
                </div>
            </div>
        </Section>
    );
};

const MarqueeContent = ({ sponsors, direction = "left" }: { sponsors: typeof SPONSORS, direction?: "left" | "right" }) => {
    return (
        <motion.div
            initial={{ x: direction === "left" ? 0 : "-100%" }}
            animate={{ x: direction === "left" ? "-100%" : 0 }}
            transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
            }}
            className="flex gap-8"
        >
            {sponsors.map((sponsor) => (
                <a
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        group
                        relative
                        w-48 h-32 md:w-72 md:h-44
                        flex flex-col items-center justify-between
                        bg-white
                        border border-white/5 rounded-xl
                        hover:border-neon-magenta/50
                        transition-all duration-300
                        p-3 md:p-6
                        overflow-hidden
                    "
                >
                    <div className="w-full flex justify-center pt-2">
                        <span className={`
                            text-[8px] md:text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border
                            ${sponsor.type.includes('Title') ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                                sponsor.type.includes('Associate') ? 'bg-blue-50 text-blue-700 border-blue-200' :
                                    'bg-gray-50 text-gray-600 border-gray-200'}
                         `}>
                            {sponsor.type}
                        </span>
                    </div>

                    <div className="relative w-full h-16 md:h-20 mt-1 md:mt-2">
                        <Image
                            src={sponsor.logo}
                            alt={sponsor.name}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="text-center z-10 w-full pt-2 border-t border-gray-100 mt-auto">
                        <h4 className="text-primary-bg font-bold text-xs md:text-sm tracking-wide group-hover:text-neon-magenta transition-colors line-clamp-1">
                            {sponsor.name}
                        </h4>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-neon-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                </a>
            ))}
        </motion.div>
    );
};

export { Sponsors };
