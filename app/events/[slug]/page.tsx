import { EVENTS } from "@/data/mock";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetailsClient from "@/components/events/EventDetailsClient";

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

  return <EventDetailsClient event={event} />;
}
