"use client";

import { Section } from "@/components/ui/Section";
import { SPONSORS } from "@/data/mock";
import Image from "next/image";

const Sponsors = () => {
    const platinum = SPONSORS.filter(s => s.tier === 'Platinum');
    const gold = SPONSORS.filter(s => s.tier === 'Gold');
    const silver = SPONSORS.filter(s => s.tier === 'Silver');

    return (
        <Section background="default" pattern="dot" mask="linear" className="py-24 border-t border-white/5">
            <div className="text-center mb-20">
                <h2 className="text-2xl md:text-3xl font-bold font-poppins text-text-muted mb-2 uppercase tracking-[0.1em] opacity-80">
                    Powered By
                </h2>
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-grad-mid/50 to-transparent mx-auto"></div>
            </div>

            <div className="space-y-24">
                {/* Platinum */}
                {platinum.length > 0 && (
                    <div className="text-center">
                        <h3 className="text-[10px] font-bold text-neon-magenta mb-12 font-mono tracking-[0.3em] uppercase opacity-70">
               // LEVEL_01: PLATINUM_VECTORS
                        </h3>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
                            {platinum.map(s => (
                                <div key={s.id} className="w-48 h-32 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100 hover:scale-110 cursor-pointer group">
                                    <div className="absolute inset-0 bg-grad-mid/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-150"></div>
                                    <Image src={s.logo} alt={s.name} fill className="object-contain relative z-10" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Gold */}
                {gold.length > 0 && (
                    <div className="text-center">
                        <h3 className="text-[10px] font-bold text-soft-lavender mb-12 font-mono tracking-[0.3em] uppercase opacity-70">
               // LEVEL_02: GOLD_VECTORS
                        </h3>
                        <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center">
                            {gold.map(s => (
                                <div key={s.id} className="w-40 h-24 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-30 hover:opacity-100 hover:scale-105 cursor-pointer">
                                    <Image src={s.logo} alt={s.name} fill className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Silver */}
                {silver.length > 0 && (
                    <div className="text-center">
                        <h3 className="text-[10px] font-bold text-text-muted mb-12 font-mono tracking-[0.3em] uppercase opacity-50">
               // LEVEL_03: SILVER_VECTORS
                        </h3>
                        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
                            {silver.map(s => (
                                <div key={s.id} className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-20 hover:opacity-80 cursor-pointer">
                                    <Image src={s.logo} alt={s.name} fill className="object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
};

export { Sponsors };
