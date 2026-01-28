import { EVENTS } from "@/data/mock";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiCalendar, FiClock, FiMapPin, FiUser, FiInfo, FiAward } from "react-icons/fi";
import { Metadata } from "next";

export async function generateStaticParams() {
    return EVENTS.map((event) => ({
        slug: event.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const event = EVENTS.find((e) => e.slug === slug);

    if (!event) return { title: 'Event Not Found' };

    return {
        title: `${event.title} | Manthan 2026`,
        description: event.shortDescription,
    };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = EVENTS.find((e) => e.slug === slug);

    if (!event) {
        notFound();
    }

    // Map event slugs to correct image paths
    const eventImages: Record<string, string> = {
        dakshya: "/images/02_FLAGSHIP_EVENTS/Dakshya.jpg",
        consultiss: "/images/02_FLAGSHIP_EVENTS/consultiss.png",
        jigyasa: "/images/02_FLAGSHIP_EVENTS/Jigyasa.jpg",
        srijan: "/images/02_FLAGSHIP_EVENTS/Srijan.jpg",
        tattvabodha: "/images/02_FLAGSHIP_EVENTS/Tattvabodha.jpg",
        udghosh: "/images/02_FLAGSHIP_EVENTS/Udghosh.jpg",
        // fallback
        default: "/images/01_HERO/Copy of HERO BANNER _MANTHAN.png",
    };

    const eventImage = eventImages[event.slug] || eventImages.default;

    return (
        <>
            <div className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden">
                <Image
                    src={eventImage}
                    alt={event.title}
                    fill
                    className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/40 to-transparent"></div>

                {/* Ambient Glow */}
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-grad-start/10 blur-[130px] rounded-full pointer-events-none -z-10 animate-float"></div>

                <div className="relative z-10 p-8 md:p-16 container mx-auto text-left">
                    <div className="flex flex-col items-start gap-4">
                        <span className="inline-block px-4 py-1 rounded-sm border border-neon-magenta/30 bg-neon-magenta/10 text-neon-magenta font-mono font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
                            PROTOCOL: {event.category} // S-0{event.id}
                        </span>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-poppins mb-6 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)] tracking-tighter">
                            {event.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-text-secondary max-w-4xl font-light leading-relaxed border-l-2 border-grad-mid pl-8 italic">
                            {event.shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            <Section background="default" pattern="dot" mask="linear" showOrbs orbColor="primary" className="border-t border-white/5 relative">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 text-left">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-20 relative z-10">
                        <div>
                            <h2 className="text-2xl font-bold font-poppins text-soft-lavender mb-10 flex items-center gap-4 uppercase tracking-widest">
                                <FiInfo className="text-soft-lavender opacity-60" />
                                <span className="border-b border-soft-lavender/20 pb-2">Transmission Data</span>
                            </h2>
                            <div className="text-text-secondary leading-loose text-lg font-light space-y-6">
                                {event.fullDescription}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-poppins text-neon-magenta mb-10 flex items-center gap-4 uppercase tracking-widest">
                                <FiAward className="text-neon-magenta opacity-60" />
                                <span className="border-b border-neon-magenta/20 pb-2">Directives</span>
                            </h2>
                            <ul className="grid gap-6">
                                {event.rules.map((rule, idx) => (
                                    <li key={idx} className="flex gap-6 p-6 rounded-xl bg-secondary-surface/40 backdrop-blur-md border border-white/5 hover:border-grad-end/30 transition-all duration-300 group">
                                        <span className="font-mono text-grad-end/50 text-xl group-hover:text-grad-end transition-colors">0{idx + 1}</span>
                                        <span className="text-text-secondary group-hover:text-white transition-colors">{rule}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-10">
                            <Button href="/events" variant="ghost" className="hover:pl-0 pl-0 group">
                                <span className="group-hover:-translate-x-2 transition-transform inline-block font-mono text-sm opacity-60 hover:opacity-100 tracking-widest">&larr; ABORT_AND_RETURN</span>
                            </Button>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="relative">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-elevated-section/40 backdrop-blur-xl p-10 rounded-2xl border border-white/10 shadow-3xl relative overflow-hidden group">
                                {/* Internal Glow */}
                                <div className="absolute -top-20 -right-20 w-48 h-48 bg-grad-mid/10 blur-[60px] rounded-full group-hover:bg-neon-magenta/10 transition-colors"></div>

                                <h3 className="text-sm font-bold font-poppins text-soft-lavender mb-10 uppercase tracking-[0.2em] border-b border-white/10 pb-6">
                   // SPEC_MANIFEST
                                </h3>

                                <div className="space-y-8">
                                    <DetailRow icon={<FiCalendar />} label="Cycle" value={event.date} />
                                    <DetailRow icon={<FiClock />} label="Time-stamp" value={event.time} />
                                    <DetailRow icon={<FiMapPin />} label="Coordinates" value={event.venue} />
                                    <DetailRow icon={<FiAward />} label="Bounty" value={event.prizePool} highlight />
                                </div>

                                <div className="mt-12 pt-10 border-t border-white/10">
                                    <h4 className="font-bold flex items-center gap-3 mb-6 text-text-muted text-[10px] uppercase tracking-[0.25em]">
                                        <FiUser className="opacity-60" /> Interface_Lead
                                    </h4>
                                    <div className="p-5 bg-white/5 rounded-lg border border-white/5 group-hover:border-soft-lavender/30 transition-colors">
                                        <p className="font-bold text-white tracking-tight">{event.contactPerson.name}</p>
                                        <p className="text-xs text-soft-lavender font-mono mt-2 tracking-widest">{event.contactPerson.phone}</p>
                                    </div>
                                </div>

                                <div className="mt-10">
                                    <Button href={event.registrationLink} variant="primary" fullWidth size="lg">
                                        INIT_REGISTRY
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

const DetailRow = ({ icon, label, value, highlight = false }: any) => (
    <div className="flex items-start gap-5 group/row">
        <div className="mt-1 text-text-muted group-hover/row:text-soft-lavender transition-colors">{icon}</div>
        <div className="text-left">
            <div className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-bold mb-1 opacity-60">{label}</div>
            <div className={`font-mono tracking-tight ${highlight ? "text-neon-magenta text-2xl font-bold drop-shadow-[0_0_10px_rgba(236,72,153,0.3)]" : "text-white"}`}>
                {value}
            </div>
        </div>
    </div>
);
