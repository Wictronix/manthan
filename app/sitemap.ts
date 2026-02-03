import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tissmanthan.in'

    // Last modified date for all static static entries as requested
    const lastModified = new Date('2026-02-03T22:08:19+00:00')

    const routes = [
        '',
        '/about',
        '/events',
        '/gallery',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const categories = [
        'spotlight',
        'cultural',
        'management',
    ].map((category) => ({
        url: `${baseUrl}/events?category=${category}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }))

    const eventPages = [
        'flashmob',
        'sneak-snap',
        'kismat-konnection',
        'khyaal-e-bandish',
        'star-night',
    ].map((event) => ({
        url: `${baseUrl}/events/${event}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...routes, ...categories, ...eventPages]
}
