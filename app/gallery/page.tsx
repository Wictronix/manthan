"use client";

import { Section } from "@/components/ui/Section";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMaximize2 } from "react-icons/fi";
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
                <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
                    Relive the moments that made history at Manthan.
                </p>
            </Section>

            {/* Gallery Section */}
            <Section
                background="default"
                pattern="dot"
                mask="linear"
                showOrbs
                orbColor="primary"
                className="min-h-screen relative overflow-hidden"
            >
                <div className="max-w-7xl mx-auto">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="w-10 h-10 border-2 border-neon-magenta border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {images.map((src, index) => (
                                <motion.div
                                    key={src}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-square cursor-pointer group rounded-xl overflow-hidden border border-white/5 bg-secondary-surface/20 hover:border-soft-lavender/30 transition-all duration-500"
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Gallery ${index}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => {
                                            // Handle broken images by removing them or showing a placeholder
                                            const target = e.target as HTMLImageElement;
                                            target.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <FiMaximize2 className="text-white text-3xl transform scale-50 group-hover:scale-100 transition-transform duration-500" />
                                    </div>
                                </motion.div>
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
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                            onClick={() => setSelectedImage(null)}
                        >
                            <button className="absolute top-6 right-6 text-white text-3xl hover:text-neon-magenta transition-colors" onClick={() => setSelectedImage(null)}>
                                <FiX />
                            </button>
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative max-w-5xl max-h-[85vh] w-full h-full"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={selectedImage}
                                    alt="Gallery Preview"
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Guests Section */}
                <div className="mt-32">
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

const GuestCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
    <div className="text-center group p-8 rounded-2xl border border-white/5 bg-secondary-surface/40 hover:border-soft-lavender/30 transition-all duration-300 relative overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-24 h-24 bg-grad-mid/5 blur-3xl -z-10"></div>
        <div className="relative w-full aspect-square mx-auto rounded-2xl overflow-hidden mb-6 border-2 border-white/10 group-hover:border-neon-magenta transition-colors duration-500">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
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
