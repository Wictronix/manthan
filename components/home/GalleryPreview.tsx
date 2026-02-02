"use client";

import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const GALLERY_IMAGES = [
    "/images/02_FLAGSHIP_EVENTS/Tattvabodha.jpg",
    "/images/02_FLAGSHIP_EVENTS/Dakshya.jpg",
    "/images/02_FLAGSHIP_EVENTS/Jigyasa.jpg",
    "/images/02_FLAGSHIP_EVENTS/Srijan.jpg",
    "/images/02_FLAGSHIP_EVENTS/Udghosh.jpg",
    "/images/02_FLAGSHIP_EVENTS/consultiss.png",
];

export const GalleryPreview = () => {
    return (
        <Section background="default" pattern="dot" mask="linear" className="py-24 overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4">
                    Moment{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start to-grad-end">
                        Captures
                    </span>
                </h2>
                <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
                    A glimpse into the vibrant atmosphere and competitive spirit of Manthan.
                </p>
            </div>

            <div className="relative">
                {/* Scrolling Marquee Effect */}
                <div className="flex gap-4 animate-scroll whitespace-nowrap">
                    {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="relative w-72 h-48 md:w-96 md:h-64 rounded-xl overflow-hidden flex-shrink-0 border border-white/10"
                        >
                            <Image
                                src={src}
                                alt={`Gallery image ${index}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center">
                <Link
                    href="/gallery"
                    className="inline-flex items-center gap-2 text-soft-lavender hover:text-white transition-colors group"
                >
                    View Full Gallery
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
            
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                    width: max-content;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </Section>
    );
};
