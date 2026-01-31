import { EVENTS } from "@/data/mock";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUser,
  FiInfo,
  FiAward,
} from "react-icons/fi";
import { Metadata } from "next";

export async function generateStaticParams() {
  return EVENTS.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) return { title: "Event Not Found" };

  return {
    title: `${event.title} | Manthan 2026`,
    description: event.shortDescription,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) notFound();

  const eventImages: Record<string, string> = {
    dakshya: "/images/02_FLAGSHIP_EVENTS/Dakshya.jpg",
    consultiss: "/images/02_FLAGSHIP_EVENTS/consultiss.png",
    jigyasa: "/images/02_FLAGSHIP_EVENTS/Jigyasa.jpg",
    srijan: "/images/02_FLAGSHIP_EVENTS/Srijan.jpg",
    tattvabodha: "/images/02_FLAGSHIP_EVENTS/Tattvabodha.jpg",
    udghosh: "/images/02_FLAGSHIP_EVENTS/Udghosh.jpg",
    default: "/images/01_HERO/Copy of HERO BANNER _MANTHAN.png",
  };

  const eventImage = eventImages[event.slug] || eventImages.default;

  return (
    <>
      {/* HERO */}
      <div className="relative h-[65vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={eventImage}
          alt={event.title}
          fill
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-primary-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-bg/40 to-transparent" />

        <div className="relative z-10 p-8 md:p-16 container mx-auto">
          <span className="inline-block px-4 py-1 rounded-sm border border-neon-magenta/30 bg-neon-magenta/10 text-neon-magenta font-mono font-bold text-[10px] uppercase tracking-widest mb-4">
            {event.category}
          </span>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white font-poppins mb-6 tracking-tight">
            {event.title}
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl font-light leading-relaxed border-l-2 border-grad-mid pl-8 italic">
            {event.shortDescription}
          </p>
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

            <Button href="/events" variant="ghost">
              ← Back to Events
            </Button>
          </div>

          {/* SIDEBAR */}
          <div className="sticky top-32">
            <div className="bg-elevated-section/40 backdrop-blur-xl p-10 rounded-2xl border border-white/10">
              <h3 className="text-sm font-bold text-soft-lavender mb-10 uppercase tracking-widest border-b border-white/10 pb-6">
                Event Details
              </h3>

              <div className="space-y-8">
                <DetailRow icon={<FiCalendar />} label="Date" value={event.date} />
                <DetailRow icon={<FiClock />} label="Time" value={event.time} />
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
                  <FiUser /> Contact Person
                </h4>
                <div className="p-5 bg-white/5 rounded-lg border border-white/5">
                  <p className="font-bold text-white">{event.contactPerson.name}</p>
                  <p className="text-xs text-soft-lavender font-mono mt-2">
                    {event.contactPerson.phone}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Button href="/contact" variant="primary" fullWidth size="lg">
                  Contact for Registration
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
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
