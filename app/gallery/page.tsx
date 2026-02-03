"use client";

import { Section } from "@/components/ui/Section";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiX, FiMaximize2, FiChevronDown } from "react-icons/fi";
import Image from "next/image";

export default function GalleryPage() {
    const [images, setImages] = useState<string[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/gallery')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) setImages(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load gallery:", err);
                setLoading(false);
            });
    }, []);

    // Handle ESC key for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedImage]);

    return (
        <>
            {/* Hero Section */}
            <Section
                background="default"
                pattern="grid"
                mask="radial"
                className="pt-32 pb-10 text-center relative overflow-hidden"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-grad-start/5 blur-[120px] pointer-events-none -z-10" />
                <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-4 tracking-tighter">
                    Gallery
                </h1>
                <p className="text-text-muted text-lg max-w-2xl mx-auto font-light mb-12">
                    Relive the moments that made history at Manthan.
                </p>

                {/* Scroll Hint */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col items-center gap-2 text-soft-lavender/50 text-xs uppercase tracking-widest"
                >
                    <span>Scroll</span>
                    <FiChevronDown className="animate-bounce" />
                </motion.div>
            </Section>

            {/* Gallery List (Seamless Flow) */}
            <Section
                background="default"
                pattern="dot"
                mask="linear"
                showOrbs
                orbColor="primary"
                className="relative overflow-hidden py-0"
            >
                {/* 
                   Removed h-[80vh] and overflow-y-auto to fix scrollbar issue.
                   Now the gallery flows naturally with the page scroll.
                */}
                <div className="max-w-4xl mx-auto py-20">
                    {loading ? (
                        <div className="flex items-center justify-center h-40">
                            <div className="w-10 h-10 border-2 border-neon-magenta border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-32">
                            {images.map((src, index) => (
                                <div key={src} className="flex items-center justify-center perspective-1000 py-10">
                                    <TiltCard
                                        src={src}
                                        index={index}
                                        onClick={() => setSelectedImage(src)}
                                        priority={index < 2}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button
                                className="absolute top-6 right-6 text-white/50 hover:text-white text-3xl transition-colors z-[100000] p-4"
                                onClick={() => setSelectedImage(null)}
                            >
                                <FiX />
                            </button>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="relative max-w-6xl max-h-[90vh] w-full h-full pointer-events-none"
                            >
                                <Image
                                    src={selectedImage}
                                    alt="Gallery Preview"
                                    fill
                                    className="object-contain pointer-events-auto"
                                    sizes="100vw"
                                    quality={90}
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Guests Section */}
                <div className="py-32 max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold font-poppins text-white mb-16 text-center">
                        Previous <span className="text-soft-lavender">Guests & Speakers</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <GuestCard name="Anand" role="Speaker" image="/images/Guests/Anand.png" />
                        <GuestCard name="Arundhati Bhattacharya" role="Speaker" image="/images/Guests/Arundhati_bhattacharya.png" />
                        <GuestCard name="Kiran" role="Speaker" image="/images/Guests/kiran.png" />
                        <GuestCard name="Rajat Chauhan" role="Speaker" image="/images/Guests/Rajat_chauhan.png" />
                        <GuestCard name="Shakti Mohan" role="Performer" image="/images/Guests/Shakti_mohan.png" />
                        <GuestCard name="Tahira Kashyap" role="Speaker" image="/images/Guests/Tahira_kashyap.png" />
                        <GuestCard name="Usha" role="Speaker" image="/images/Guests/usha.png" />
                        <GuestCard name="Varun Grover" role="Performer" image="/images/Guests/varun_grover.png" />
                    </div>
                </div>
            </Section>
        </>
    );
}

const TiltCard = ({ src, index, onClick, priority }: { src: string, index: number, onClick: () => void, priority: boolean }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ amount: 0.3, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} // Custom ease for Apple-like smoothness
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className="relative w-full max-w-3xl aspect-[16/10] rounded-3xl overflow-hidden cursor-pointer group shadow-2xl"
        >
            <div className="absolute inset-0 bg-secondary-surface/0 border border-white/10 rounded-3xl z-10 transition-colors group-hover:border-neon-magenta/50" />

            <Image
                src={src}
                alt={`Gallery ${index}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                }}
            />

            {/* Magnetic Hover Overlay */}
            <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <FiMaximize2 className="text-white text-xl" />
                </div>
            </div>
        </motion.div>
    );
};

const GuestCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
    <div className="text-center group p-8 rounded-2xl border border-white/5 bg-secondary-surface/40 hover:border-soft-lavender/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-24 h-24 bg-grad-mid/5 blur-3xl -z-10"></div>
        <div className="relative w-full aspect-square mx-auto rounded-2xl overflow-hidden mb-6 border-2 border-white/10 group-hover:border-neon-magenta/50 transition-colors duration-500">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
                onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/400x400/0a0a0a/EC4899?text=Guest";
                }}
            />
        </div>
        <h3 className="text-lg font-bold font-poppins text-white mb-2">{name}</h3>
        <p className="text-[10px] text-text-muted font-mono uppercase tracking-[0.2em]">{role}</p>
    </div>
);
