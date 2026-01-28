"use client";

import { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { Section } from "@/components/ui/Section";

interface RendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

const CountdownTimer = () => {
    const [mounted, setMounted] = useState(false);
    const targetDate = new Date("2026-02-12T00:00:00");

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderer = ({ days, hours, minutes, seconds, completed }: RendererProps) => {
        if (completed) {
            return (
                <div className="text-center text-4xl md:text-6xl font-bold text-neon-magenta animate-pulse drop-shadow-[0_0_20px_rgba(236, 72, 153, 0.4)] font-mono">
                    CORE_SYSTEM_ACTIVE
                </div>
            );
        }

        return (
            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                <TimeBox value={days} label="DAYS" />
                <TimeBox value={hours} label="HRS" />
                <TimeBox value={minutes} label="MIN" />
                <TimeBox value={seconds} label="SEC" />
            </div>
        );
    };

    return (
        <Section background="default" pattern="dot" mask="radial" className="border-y border-white/5 relative">
            <div className="text-center relative z-10">
                <h3 className="text-sm font-mono text-soft-lavender mb-12 tracking-widest uppercase opacity-80">
                    [ T-MINUS TO INTERFACE ]
                </h3>
                {mounted ? <Countdown date={targetDate} renderer={renderer} /> : (
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12 opacity-50">
                        <TimeBox value={0} label="DAYS" />
                        <TimeBox value={0} label="HRS" />
                        <TimeBox value={0} label="MIN" />
                        <TimeBox value={0} label="SEC" />
                    </div>
                )}
            </div>
        </Section>
    );
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
        <div className="relative bg-secondary-surface border border-white/10 rounded-sm p-4 md:p-8 min-w-[100px] md:min-w-[160px] shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-neon-magenta/50 transition-colors duration-500">
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-neon-magenta opacity-50"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-neon-magenta opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-neon-magenta opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-neon-magenta opacity-50"></div>

            <span className="text-5xl md:text-8xl font-bold font-mono tabular-nums text-white group-hover:text-neon-magenta group-hover:drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all duration-300">
                {value < 10 ? `0${value}` : value}
            </span>
        </div>
        <span className="mt-4 text-[10px] font-bold font-mono text-text-muted group-hover:text-soft-lavender transition-colors tracking-widest uppercase">
      //{label}
        </span>
    </div>
);

export { CountdownTimer };
