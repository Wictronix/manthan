"use client";

import { Event } from "@/types";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

interface EventCardProps {
    event: Event;
    index?: number;
}

const EventCard = ({ event, index = 0 }: EventCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="
                group
                relative
                rounded-2xl
                p-[1.5px]
                bg-gradient-to-br from-neon-magenta/40 via-grad-mid/20 to-transparent
                hover:shadow-[0_0_40px_rgba(236,72,153,0.35)]
                transition-shadow duration-500
                cursor-pointer
            "
        >
            <div className="
                relative
                rounded-2xl
                bg-[#1A0F2E]
                border border-white/10
                overflow-hidden
                flex flex-col h-full
                transition-transform duration-300
                group-hover:-translate-y-1
                group-hover:shadow-[0_0_30px_rgba(236,72,153,0.25)]
            ">
                {/* Neon Glow Line on Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-grad-start via-grad-mid to-grad-end transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-surface to-transparent opacity-80" />
                    <div className="absolute top-4 right-4 bg-primary-bg/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-bold text-soft-lavender uppercase tracking-wide border border-white/10">
                        {event.category}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow relative text-left">
                    <h3 className="text-xl font-bold font-poppins text-text-primary mb-2 group-hover:text-neon-magenta transition-colors">
                        {event.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-6 line-clamp-2 leading-relaxed">
                        {event.shortDescription}
                    </p>

                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-text-muted tracking-wider">Prize</span>
                            <span className="text-sm font-bold text-text-primary">{event.prizePool}</span>
                        </div>
                        <Button href={`/events/${event.slug}`} variant="secondary" size="sm" className="text-xs px-4 py-2">
                            View Details
                        </Button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export { EventCard };
