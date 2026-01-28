import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    // unoptimized: true, // Removed for Vercel Image Optimization
  },
  // output: 'export', // Removed to allow standard server/Vercel deployment
  trailingSlash: true,
};

export default nextConfig;
