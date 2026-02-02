"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FAQS, TEAM } from "@/data/mock";
import { useState } from "react";
import { FiPlus, FiMinus, FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";

export default function ContactPage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    const toggleFaq = (id: string) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (
        <>
            <Section background="default" pattern="grid" mask="radial" className="pt-32 pb-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-grad-mid/5 blur-[120px] pointer-events-none -z-10" />
                <h1 className="text-5xl md:text-7xl font-bold font-poppins text-white mb-4 tracking-tighter">
                    Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-start via-grad-mid to-grad-end drop-shadow-[0_0_15px_rgba(124,58,237,0.3)]">Us</span>
                </h1>
                <p className="text-text-muted text-lg max-w-2xl mx-auto font-light">
                    We'd love to hear from you. Reach out for any queries.
                </p>
            </Section>

            <Section background="default" pattern="dot" mask="linear" showOrbs orbColor="secondary" className="min-h-[50vh] border-t border-white/5 relative">
                <div className="max-w-3xl mx-auto text-left relative z-10">
                    {/* Contact Form */}
                    <h2 className="text-xl font-bold font-poppins text-white mb-10 border-l-2 border-neon-magenta pl-4 tracking-widest uppercase">
                        Get in Touch
                    </h2>
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Full Name</label>
                                <input type="text" required className="w-full px-4 py-4 bg-secondary-surface/40 backdrop-blur-md rounded-sm border border-white/5 text-white focus:outline-none focus:border-neon-magenta/50 focus:bg-secondary-surface/60 transition-all font-mono text-sm" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Phone Number</label>
                                <input type="tel" required className="w-full px-4 py-4 bg-secondary-surface/40 backdrop-blur-md rounded-sm border border-white/5 text-white focus:outline-none focus:border-neon-magenta/50 focus:bg-secondary-surface/60 transition-all font-mono text-sm" placeholder="+91 XXXX XXXX" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Email Address</label>
                            <input type="email" required className="w-full px-4 py-4 bg-secondary-surface/40 backdrop-blur-md rounded-sm border border-white/5 text-white focus:outline-none focus:border-neon-magenta/50 focus:bg-secondary-surface/60 transition-all font-mono text-sm" placeholder="user@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-1">Message</label>
                            <textarea required rows={5} className="w-full px-4 py-4 bg-secondary-surface/40 backdrop-blur-md rounded-sm border border-white/5 text-white focus:outline-none focus:border-neon-magenta/50 focus:bg-secondary-surface/60 transition-all font-mono text-sm" placeholder="How can we help you?"></textarea>
                        </div>
                        <Button type="submit" variant="primary" size="lg" fullWidth>
                            Send Message
                        </Button>
                    </form>
                </div>
            </Section>

            {/* Core Team */}
            <Section background="default" pattern="grid" mask="linear" showOrbs orbColor="primary" className="py-24 border-t border-white/5 relative">
                <div className="absolute inset-0 bg-grad-mid/5 mix-blend-overlay pointer-events-none"></div>
                <div className="max-w-6xl mx-auto relative z-10">
                    <h2 className="text-3xl font-bold font-poppins text-white mb-16 text-center tracking-tight">
                        Team <span className="text-soft-lavender">&</span> Heads
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEAM.map((member) => (
                            <div key={member.id} className="bg-elevated-section/40 backdrop-blur-md p-10 rounded-2xl border border-white/5 flex flex-col items-center text-center hover:border-soft-lavender/30 transition-all duration-500 shadow-2xl group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-soft-lavender/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>

                                <div className="w-32 h-32 relative rounded-full overflow-hidden mb-8 border-2 border-white/10 group-hover:border-neon-magenta transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-grad-mid/10">
                                    {member.image ? (
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-all duration-700"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center p-4">
                                            <span className="text-text-muted font-mono text-[8px] tracking-widest uppercase text-center">[ PHOTO_PENDING ]</span>
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold font-poppins text-white mb-1">{member.name}</h3>
                                <p className="text-neon-magenta font-mono text-[10px] mb-8 uppercase tracking-[0.2em] opacity-80">{member.role}</p>

                                <div className="space-y-2 w-full pt-6 border-t border-white/5">
                                    <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-3 text-sm text-text-muted hover:text-white transition-colors p-3 rounded-md hover:bg-white/5">
                                        <FiPhone className="text-soft-lavender opacity-60" /> <span className="font-mono">{member.phone}</span>
                                    </a>
                                    <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-3 text-sm text-text-muted hover:text-white transition-colors p-3 rounded-md hover:bg-white/5">
                                        <FiMail className="text-soft-lavender opacity-60" /> <span className="font-mono">{member.email}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
