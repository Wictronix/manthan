import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { JsonLd } from "./json-ld";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tissmanthan.in"),
  title: {
    default: "Manthan 2026 | Dare. Dream. Discover",
    template: "%s | Manthan 2026",
  },
  description: "Official website for Manthan 2026, the Annual Cultural & Management Fest of TISS Mumbai. Join us to Dare, Dream, and Discover.",
  keywords: ["Manthan", "TISS", "Cultural Fest", "Management Fest", "TISS Mumbai", "College Fest", "Mumbai Events", "Manthan 2026"],
  authors: [{ name: "Manthan Web Team" }],
  creator: "Manthan TISS",
  publisher: "Manthan TISS",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Manthan 2026 | Dare. Dream. Discover",
    description: "Official website for Manthan 2026, the Annual Cultural & Management Fest of TISS Mumbai.",
    url: "https://tissmanthan.in",
    siteName: "Manthan 2026",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists or is generic
        width: 1200,
        height: 630,
        alt: "Manthan 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan 2026 | Dare. Dream. Discover",
    description: "Official website for Manthan 2026, the Annual Cultural & Management Fest of TISS Mumbai.",
    images: ["/og-image.jpg"],
    creator: "@tissmanthan", // Verify handle
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Ensure existence or standard fallback
  },
  alternates: {
    canonical: "https://tissmanthan.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${inter.variable} antialiased flex flex-col min-h-screen relative`}
      >
        <JsonLd />
        <AmbientBackground />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
