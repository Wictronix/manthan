export function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Manthan TISS",
        "url": "https://tissmanthan.in",
        "logo": "https://tissmanthan.in/favicon.ico",
        "sameAs": [
            "https://www.instagram.com/tissmanthan",
            "https://www.facebook.com/tissmanthan",
            "https://www.linkedin.com/company/tissmanthan"
        ]
    };

    const eventSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Manthan 2026",
        "description": "The Annual Cultural and Management Fest of TISS Mumbai.",
        "startDate": "2026-02-01",
        "endDate": "2026-02-03",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": {
            "@type": "Place",
            "name": "Tata Institute of Social Sciences",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "V.N. Purav Marg, Deonar",
                "addressLocality": "Mumbai",
                "postalCode": "400088",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            }
        },
        "organizer": {
            "@type": "Organization",
            "name": "Manthan TISS",
            "url": "https://tissmanthan.in"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
            />
        </>
    );
}
