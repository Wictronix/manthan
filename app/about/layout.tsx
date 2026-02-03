import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Manthan, the legacy of TISS Mumbai, and the team behind the Annual Cultural & Management Fest.",
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
