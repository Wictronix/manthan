"use client";

import { Event } from "@/types";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import {
    FiCalendar,
    FiClock,
    FiMapPin,
    FiUser,
    FiInfo,
    FiAward,
} from "react-icons/fi";
import { motion } from "framer-motion";

interface EventDetailsClientProps {
    event: Event;
}

export default function EventDetailsClient({ event }: EventDetailsClientProps) {
    const eventImage = event.image || "/images/01_HERO/Copy of HERO BANNER _MANTHAN.png";

    return (
        <div className="relative pb-24 lg:pb-0">
            {/* HERO */}
            <div className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src={eventImage}
                    alt={event.title}
                    fill
                    className="object-cover opacity-60 transition-opacity duration-1000"
                    priority
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/01_HERO/Copy of HERO BANNER _MANTHAN.png";
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/40 to-transparent" />

                <div className="relative z-10 p-8 md:p-16 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-sm border border-neon-magenta/30 bg-neon-magenta/10 text-neon-magenta font-mono font-bold text-[10px] uppercase tracking-widest mb-4">
                            {event.category}
                        </span>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-poppins mb-6 tracking-tight">
                            {event.title}
                        </h1>

                        <p className="text-xl md:text-2xl text-text-secondary max-w-4xl font-light leading-relaxed border-l-2 border-grad-mid pl-8 italic">
                            {event.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* CONTENT */}
            <Section background="default" pattern="dot" mask="linear" showOrbs orbColor="primary">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    {/* MAIN */}
                    <div className="lg:col-span-2 space-y-20">
                        <div>
                            <h2 className="text-2xl font-bold font-poppins text-soft-lavender mb-10 flex items-center gap-4 uppercase tracking-widest">
                                <FiInfo />
                                About the Event
                            </h2>
                            <div className="text-text-secondary leading-loose text-lg font-light space-y-6">
                                {event.fullDescription}
                            </div>
                        </div>

                        {event.rules.length > 0 && (
                            <div>
                                <h2 className="text-2xl font-bold font-poppins text-neon-magenta mb-10 flex items-center gap-4 uppercase tracking-widest">
                                    <FiAward />
                                    Rules & Guidelines
                                </h2>

                                <ul className="grid gap-6">
                                    {event.rules.map((rule, idx) => (
                                        <li
                                            key={idx}
                                            className="flex gap-6 p-6 rounded-xl bg-secondary-surface/40 backdrop-blur-md border border-white/5"
                                        >
                                            <span className="font-mono text-grad-end/50 text-xl">
                                                {idx + 1}.
                                            </span>
                                            <span className="text-text-secondary">{rule}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <Button href="/events" variant="ghost">
                            ← Back to Events
                        </Button>
                    </div>

                    {/* SIDEBAR */}
                    <div className="sticky top-32 h-fit mb-10">
                        <div className="bg-elevated-section/40 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-2xl">
                            <h3 className="text-sm font-bold text-soft-lavender mb-10 uppercase tracking-widest border-b border-white/10 pb-6">
                                Event Details
                            </h3>

                            <div className="space-y-8">
                                <DetailRow icon={<FiCalendar />} label="Date" value={event.date} />
                                {event.time && <DetailRow icon={<FiClock />} label="Time" value={event.time} />}
                                <DetailRow icon={<FiMapPin />} label="Venue" value={event.venue} />
                                <DetailRow
                                    icon={<FiAward />}
                                    label="Prize Pool"
                                    value={event.prizePool}
                                    highlight
                                />
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/10">
                                <h4 className="font-bold flex items-center gap-3 mb-6 text-text-muted text-xs uppercase tracking-widest">
                                    <FiUser /> Need Help?
                                </h4>
                                <Button
                                    href="/about#team"
                                    variant="outline"
                                    fullWidth
                                    size="sm"
                                    className="border-white/10 text-soft-lavender hover:text-white"
                                >
                                    Contact Team
                                </Button>
                            </div>

                            <div className="mt-10 hidden lg:block">
                                {event.registrationLink ? (
                                    <Button
                                        href={event.registrationLink}
                                        variant="primary"
                                        fullWidth
                                        size="lg"
                                        className="shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                                    >
                                        Register Now
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outline"
                                        fullWidth
                                        size="lg"
                                        className="opacity-50 cursor-not-allowed"
                                        disabled
                                    >
                                        Coming Soon
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Sticky Mobile/Bottom Registration Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 lg:hidden z-50 bg-primary-bg/80 backdrop-blur-lg border-t border-white/10">
                {event.registrationLink ? (
                    <Button
                        href={event.registrationLink}
                        variant="primary"
                        fullWidth
                        size="lg"
                        className="shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                    >
                        Register Now
                    </Button>
                ) : (
                    <Button
                        variant="outline"
                        fullWidth
                        size="lg"
                        className="opacity-50 cursor-not-allowed"
                        disabled
                    >
                        Coming Soon
                    </Button>
                )}
            </div>
        </div>
    );
}

const DetailRow = ({
    icon,
    label,
    value,
    highlight = false,
}: any) => (
    <div className="flex items-start gap-5">
        <div className="mt-1 text-text-muted">{icon}</div>
        <div>
            <div className="text-xs uppercase tracking-widest text-text-muted mb-1">
                {label}
            </div>
            <div
                className={
                    highlight
                        ? "text-neon-magenta text-2xl font-bold"
                        : "text-white"
                }
            >
                {value}
            </div>
        </div>
    </div>
);
