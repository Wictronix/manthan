import { Section } from "@/components/ui/Section";
import { EventGrid } from "@/components/events/EventGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events | Manthan 2026",
    description: "Browse all events happening at Manthan 2026.",
};

export default function EventsPage() {
    return (
        <>
            {/* Hero Section */}
            <Section
                background="default"
                pattern="grid"
                mask="radial"
                className="pt-32 pb-10 text-center relative overflow-hidden"
            >
                {/* Glowing background blur */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-grad-mid/5 blur-[120px] pointer-events-none -z-10" />

                <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-6 tracking-tighter">
                    Event{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start via-grad-mid to-grad-end drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                        Registry
                    </span>
                </h1>

                <p className="text-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    [ ACCESSING_EVENT_DATABASES... SELECT_REQUIRED_MODULE ]
                </p>

                {/* Floating Glow Orbs */}
                <div className="absolute top-10 left-10 w-48 h-48 bg-grad-start/10 blur-[90px] rounded-full animate-float pointer-events-none -z-10"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-grad-end/10 blur-[150px] rounded-full animate-float-slow pointer-events-none -z-10"></div>
            </Section>

            {/* Events Grid Section */}
            <Section
                background="default"
                pattern="dot"
                mask="linear"
                showOrbs
                orbColor="secondary"
                className="min-h-screen relative overflow-hidden"
            >
                <EventGrid />

                {/* Additional subtle glow for background depth */}
                <div className="absolute inset-0 bg-grad-mid/5 pointer-events-none -z-10"></div>
            </Section>
        </>
    );
}
