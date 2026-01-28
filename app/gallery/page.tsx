"use client";

import { Section } from "@/components/ui/Section";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./gallery-overrides.css";

// Gallery images
const images = [
    {
        original: "/images/01_HERO/Copy of HERO BANNER _MANTHAN.png",
        thumbnail: "/images/01_HERO/Copy of HERO BANNER _MANTHAN.png",
        description: "The electric crowd at Manthan",
    },
    {
        original: "/images/02_FLAGSHIP_EVENTS/Tattvabodha.jpg",
        thumbnail: "/images/02_FLAGSHIP_EVENTS/Tattvabodha.jpg",
        description: "Idea Conclave - Churning of Ideas",
    },
    {
        original: "/images/02_FLAGSHIP_EVENTS/Dakshya.jpg",
        thumbnail: "/images/02_FLAGSHIP_EVENTS/Dakshya.jpg",
        description: "Cultural Spectacle",
    },
];

export default function GalleryPage() {
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
                    Visual{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start via-grad-mid to-grad-end drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                        Archives
                    </span>
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
                <div className="max-w-6xl mx-auto text-left">
                    <div className="rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 bg-secondary-surface/20 backdrop-blur-md">
                        <ImageGallery
                            items={images}
                            autoPlay={true}
                            showPlayButton={true}
                            showFullscreenButton={true}
                            slideInterval={4000}
                        />
                    </div>
                </div>

                {/* Guests Section */}
                <div className="mt-32 text-left">
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
        <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-neon-magenta transition-colors duration-500">
            <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
        </div>
        <h3 className="text-lg font-bold font-poppins text-white mb-2">{name}</h3>
        <p className="text-[10px] text-text-muted font-mono uppercase tracking-[0.2em]">{role}</p>
    </div>
);
