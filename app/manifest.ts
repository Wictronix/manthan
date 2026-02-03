import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Manthan 2026 | Dare. Dream. Discover',
        short_name: 'Manthan 2026',
        description: 'Official website for Manthan 2026, the Annual Cultural & Management Fest of TISS Mumbai.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
