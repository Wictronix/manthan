"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { EVENTS } from "@/data/mock";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const EVENT_IMAGES: Record<string, string> = {
    "1": "/images/02_FLAGSHIP_EVENTS/consultiss.png",
    "2": "/images/02_FLAGSHIP_EVENTS/Dakshya.jpg",
    "3": "/images/02_FLAGSHIP_EVENTS/Tattvabodha.jpg",
    "4": "/images/02_FLAGSHIP_EVENTS/IMG_2637.JPG",
    "5": "/images/02_FLAGSHIP_EVENTS/IMG_2653.JPG",
    "6": "/images/02_FLAGSHIP_EVENTS/Jigyasa.jpg",
    "7": "/images/02_FLAGSHIP_EVENTS/Srijan.jpg",
    "8": "/images/02_FLAGSHIP_EVENTS/Udghosh.jpg",
};

const SpotlightEvents = () => {
    const spotlightEvents = EVENTS.filter((e) => e.category === "Spotlight");

    return (
        <Section
            background="default"
            pattern="grid"
            mask="linear"
            showOrbs
            orbColor="primary"
            className="py-24"
        >
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
                    Spotlight{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start to-grad-end">
                        Events
                    </span>
                </h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto font-light italic">
                    {/* The arena of stars. */}
                    Laughter, music, and unforgettable nights.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-16">
                {spotlightEvents.map((event, index) => (
                    <AnimatedCard key={event.id} index={index} event={event} />
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button href="/events" variant="ghost" size="lg">
                    View All Events
                </Button>
            </div>
        </Section>
    );
};

const AnimatedCard = ({ event, index }: any) => {
    const ref = useRef(null);

    // Scroll position tracking
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Parallax effect on y-axis
    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity }}
            className="group flex flex-col md:flex-row bg-secondary-surface/40 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/5 hover:border-neon-magenta/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]"
        >
            {/* Image Side */}
            <div className="md:w-1/2 p-6">
                <div className="relative w-full h-64 md:h-[380px] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] transition-shadow duration-500">
                    <Image
                        src={EVENT_IMAGES[String(event.id)] ?? "/images/02_FLAGSHIP_EVENTS/Copy of HERO BANNER _MANTHAN.png"}
                        alt={event.title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Content Side */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center relative text-left">
                <div className="absolute right-0 top-0 w-96 h-96 bg-neon-magenta/5 rounded-full blur-[100px] pointer-events-none md:translate-x-1/2 -translate-y-1/2"></div>

                <span className="inline-block px-4 py-1 rounded-sm border border-neon-magenta/20 bg-neon-magenta/10 text-neon-magenta text-[10px] font-bold uppercase tracking-widest mb-6 font-mono">
                    {event.category}
                </span>

                <h3 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-4 group-hover:text-neon-magenta transition-colors tracking-tight">
                    {event.title}
                </h3>

                <p className="text-text-secondary text-lg mb-8 leading-relaxed font-light">
                    {event.shortDescription}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t border-white/5 pt-8">
                    <Button href={`/events/${event.slug}`} variant="primary">
                        View Details
                    </Button>

                    <div className="flex flex-col">
                        <span className="text-[10px] text-text-muted font-mono uppercase tracking-[0.2em]">
                            Prize Pool
                        </span>
                        <span className="text-2xl font-bold text-white shadow-glow">
                            {event.prizePool}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export { SpotlightEvents };
