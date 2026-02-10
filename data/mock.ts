import { Event, Faq, Sponsor, TeamMember } from "@/types";

export const EVENTS: Event[] = [
    {
        id: "srijan",
        slug: "srijan",
        title: "SRIJAN – HR Case Competition",
        category: "Management",
        shortDescription: "National HR Case Study Competition by TISS Mumbai.",
        fullDescription: "Srijan is a national level case study competition organized by the HRM & LR batch of TISS Mumbai. It challenges participants with real-world HR dilemmas, testing their empathy, strategy, and leadership skills through multiple analytical rounds.",
        date: "13th February, 2026",
        time: "10:00 AM",
        venue: "A.R. Wadia Hall, TISS New Campus",
        image: "/images/02_FLAGSHIP_EVENTS/Srijan.jpg",
        rules: [
            "Open for everyone.",
            "Team size: 2-3 members.",
            "Case analysis must be original.",
        ],
        prizePool: "INR 15,000",
        contactPerson: {
            name: "Aadarsh Ambastha",
            phone: "+91 95998 74790",
        },
        registrationLink: "https://unstop.com/competitions/srijan-hr-case-competition-manthan-2026-tata-institute-of-social-sciences-tiss-mumbai-1628254",
    },
    {
        id: "consultiss",
        slug: "consultiss",
        title: "CONSULTISS – Consulting Case Competition",
        category: "Management",
        shortDescription: "Strategic business case challenge for problem solvers.",
        fullDescription: "ConsultISS is a business case study competition where participants tackle strategic challenges faced by modern organizations. It requires a blend of analytical rigor and creative problem solving.",
        date: "13th February, 2026",
        time: "11:00 AM",
        venue: "A.R. Wadia Hall, TISS New Campus",
        image: "/images/02_FLAGSHIP_EVENTS/consultiss.png",
        rules: [
            "Open for everyone.",
            "National level participation.",
        ],
        prizePool: "INR 15,000",
        contactPerson: {
            name: "Aadarsh Ambastha",
            phone: "+91 95998 74790",
        },
        registrationLink: "https://unstop.com/competitions/consultiss-business-case-challenge-manthan-2026-tata-institute-of-social-sciences-tiss-mumbai-1629561",
    },
    {
        id: "dakshya",
        slug: "dakshya",
        title: "DAKSHYA – Human-Centered Leadership Challenge",
        category: "Management",
        shortDescription: "IR case challenge focusing on labor relations and strategy.",
        fullDescription: "Dakshya is an Industrial Relations focused case study competition where participants analyze complex labor issues and propose sustainable IR strategies, focusing on human-centered leadership.",
        date: "13th February, 2026",
        time: "11:00 AM",
        venue: "A.R. Wadia Hall, TISS New Campus",
        image: "/images/02_FLAGSHIP_EVENTS/Dakshya.jpg",
        rules: [
            "Open for everyone.",
            "Focus on Labor Laws and IR.",
        ],
        prizePool: "INR 15,000",
        contactPerson: {
            name: "Nikhil Kumar",
            phone: "+91 86769 75650",
        },
        registrationLink: "http://unstop.com/competitions/dakshya-industrial-relations-case-challenge-manthan-2026-tata-institute-of-social-sciences-tiss-mumbai-1629543",
    },
    {
        id: "udghosh",
        slug: "udghosh",
        title: "UDGHOSH – Social Impact Case Competition",
        category: "Management",
        shortDescription: "Test your social sensitivity and strategic thinking.",
        fullDescription: "Udghosh is Manthan’s premier competition that tests social sensitivity and strategic thinking. It focuses on solving real-world challenges in the developmental sector, requiring empathy and sustainable solutions.",
        date: "13th February, 2026",
        time: "12:00 PM",
        venue: "A.R. Wadia Hall, TISS New Campus",
        image: "/images/02_FLAGSHIP_EVENTS/Udghosh.jpg",
        rules: [
            "Open for everyone.",
        ],
        prizePool: "INR 10,000",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
        registrationLink: "https://forms.gle/Sz4xhpp7J3Tg12sF7",
    },
    {
        id: "jigyasa",
        slug: "jigyasa",
        title: "JIGYASA – The Social Conclave",
        category: "Management",
        shortDescription: "Battle of wits and general awareness in the social sector.",
        fullDescription: "Jigyasa is the social conclave that tests your awareness and thinking on social issues, economics, and policy through a competitive quiz format.",
        date: "13th February, 2026",
        time: "3:00 PM",
        venue: "Amphitheatre, TISS New Campus",
        image: "/images/02_FLAGSHIP_EVENTS/Jigyasa.jpg",
        rules: [
            "Open for everyone.",
        ],
        prizePool: "INR 10,000",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
        registrationLink: "https://forms.gle/Sz4xhpp7J3Tg12sF7",
    },
    {
        id: "flashmob",
        slug: "flashmob",
        title: "FLASHMOB – The Ultimate Dance Surprise",
        category: "Spotlight",
        shortDescription: "The high-energy launch of Manthan 2026.",
        fullDescription: "Experience the ultimate dance surprise with our signature flashmob, marking the electric beginning of Manthan 2026.",
        date: "11th February, 2026",
        venue: "Near Dining Hall, TISS Main Campus",
        image: "/images/01_HERO/Copy of HERO BANNER _MANTHAN.png",
        rules: [
            "Registration: Not required.",
        ],
        prizePool: "—",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
    },
    {
        id: "sneak-snap",
        slug: "sneak-snap",
        title: "SNEAK & SNAP- TREASURE HUNT",
        category: "Spotlight",
        shortDescription: "Explore, solve and find the hidden treasure",
        fullDescription: "Explore, solve and find the hidden treasure",
        date: "13th February, 2026",
        venue: "Amphitheatre, TISS New Campus",
        image: "/images/SPOTLIGHT_EVENTS/Sneak and snap.JPG",
        rules: [
            "Open for everyone.",
        ],
        prizePool: "Exciting Goodies",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
        registrationLink: "https://forms.gle/Sz4xhpp7J3Tg12sF7",
    },
    {
        id: "kismat-konnection",
        slug: "kismat-konnection",
        title: "Kismat Konnection- Fate, Fun &Feats",
        category: "Spotlight",
        shortDescription: "Is it fate or just great chemistry?",
        fullDescription: "Is it fate or just great chemistry? Join us for an evening of lighthearted games and sparks as we discover which duos are truly written in the stars",
        date: "13th February, 2026",
        venue: "Amphitheatre, TISS New Campus",
        image: "/images/SPOTLIGHT_EVENTS/Kismat Connection.JPG",
        rules: [
            "Open for everyone.",
        ],
        prizePool: "Exciting Goodies",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
    },
    {
        id: "step-up",
        slug: "step-up",
        title: "STEP UP – Western & Hip-Hop Dance Face-off",
        category: "Cultural",
        shortDescription: "Showcase your energy and style on the floor.",
        fullDescription: "The ultimate face-off for western and hip-hop dance styles. Show your best moves and dominate the stage.",
        date: "13th February, 2026",
        venue: "Amphitheatre",
        image: "",
        rules: [
            "Registration via Google Form.",
        ],
        prizePool: "INR 5,000",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
        registrationLink: "https://forms.gle/Sz4xhpp7J3Tg12sF7",
    },
    {
        id: "unbeatable",
        slug: "unbeatable",
        title: "UNBEATABLE – Solo/Duo Performance Lounge",
        category: "Cultural",
        shortDescription: "A stage for individual and duo excellence.",
        fullDescription: "From contemporary to freestyle, this is the lounge for solo and duo performers to shine in their own unique way.",
        date: "12th February, 2026",
        venue: "Convention Hall",
        image: "",
        rules: [],
        prizePool: "INR 25,000",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
    },
    {
        id: "raagmalhar",
        slug: "raagmalhar",
        title: "RAAGMALHAR – Classical & Semi-Classical Night",
        category: "Cultural",
        shortDescription: "A tribute to the rich heritage of Indian music.",
        fullDescription: "Experience the elegance of classical and semi-classical music in this soul-stirring competition.",
        date: "13th February, 2026",
        venue: "Amphitheatre",
        image: "",
        rules: [],
        prizePool: "INR 5,000",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
    },
    {
        id: "rangmanch-rhapsody",
        slug: "rangmanch-rhapsody",
        title: "RANGMANCH RHAPSODY – Theatre & Mono-Act Stage",
        category: "Cultural",
        shortDescription: "Express your dramatic flair.",
        fullDescription: "A stage for theatrical excellence, featuring mono-acts and dramatic performances that tell powerful stories.",
        date: "13th February, 2026",
        venue: "Amphitheatre",
        image: "",
        rules: [],
        prizePool: "INR 5,000",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
    },
    {
        id: "khyaal-e-bandish",
        slug: "khyaal-e-bandish",
        title: "Khayal-e-Bandish- Sufi Band Performance",
        category: "Spotlight",
        shortDescription: "Sufi Band Performance",
        fullDescription: "Sufi Band Performance",
        date: "12th Feb, 2026",
        venue: "Convention Hall",
        image: "/images/SPOTLIGHT_EVENTS/Khayal-e-Bandish.jpg",
        rules: [],
        prizePool: "—",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
    },
    {
        id: "star-night",
        slug: "star-night",
        title: "Star Night – Guess Who?",
        category: "Spotlight",
        shortDescription: "Artist: COMING SOON",
        fullDescription: "The grand finale star night. Artist to be announced soon! Exclusive for TISS students and guest performers.",
        date: "12th Feb, 2026",
        venue: "Convention Hall",
        image: "/images/SPOTLIGHT_EVENTS/Copy of HERO BANNER _MANTHAN.png",
        rules: [
            "Coming Soon",
        ],
        prizePool: "—",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
    },
    {
        id: "fashion-show",
        slug: "fashion-show",
        title: "Fashion Show- Unleash Your Style.",
        category: "Spotlight",
        shortDescription: "Fashion Unscripted. Not a competition, but a statement.",
        fullDescription: "Fashion Unscripted. Not a competition, but a statement. This showcase celebrates fashion as an expression of confidence, culture, and creativity",
        date: "13th February, 2026",
        venue: "Convention Hall",
        image: "/images/SPOTLIGHT_EVENTS/Fashion Show.jpg",
        rules: [],
        prizePool: "—",
        contactPerson: {
            name: "Team Manthan",
            phone: "+91 95998 74790",
        },
    },
];


export const SPONSORS: Sponsor[] = [
    {
        id: '1',
        name: 'Bajaj Auto Ltd.',
        type: 'Title Sponsor',
        logo: '/SPONSORS_ LOGO/Bajaj Auto Ltd.- TITLE SPONSOR.png',
        website: 'https://www.bajajauto.com/about-us/about-bajaj-group#'
    },
    {
        id: '2',
        name: 'NTPC',
        type: 'Associate Sponsor',
        logo: '/SPONSORS_ LOGO/NTPC - Associate Sponsor.png',
        website: 'https://ntpc.co.in/about-us'
    },
    {
        id: '3',
        name: 'WictroniX',
        type: 'Tech Partner',
        logo: '/SPONSORS_ LOGO/Wictronix_Tech Partner.png',
        website: 'https://wictronix.com/about'
    },
    {
        id: '4',
        name: 'BHEL',
        type: 'Event Partner',
        logo: '/SPONSORS_ LOGO/BHEL-EVENT PARTNER.png',
        website: 'https://www.bhel.com/about-us'
    },
    {
        id: '5',
        name: 'Powergrid Corporation',
        type: 'Event Partner',
        logo: '/SPONSORS_ LOGO/Powergrid Corporation_Event Partner.png',
        website: 'https://www.powergrid.in/en/company-overview'
    },
    {
        id: '6',
        name: 'Rashtriya Chemicals & Fertilizers',
        type: 'Event Partner',
        logo: '/SPONSORS_ LOGO/Rashtriya Chemicals & Fertilizers- Event Partner.png',
        website: 'https://www.rcfltd.com/rcf-at-glance-1'
    },
    {
        id: '7',
        name: 'Safexpress',
        type: 'Logistics Partner',
        logo: '/SPONSORS_ LOGO/Safexpress-Logistics Partner.png',
        website: 'https://www.safexpress.com/about/overview'
    },
    {
        id: '8',
        name: 'MYOP',
        type: 'Gifting Partner',
        logo: '/SPONSORS_ LOGO/MYOP- GIFTING PARTNER.webp',
        website: 'https://myop.in/pages/about-us?srsltid=AfmBOordL0-1oRU3bm_Qlz8s1ilXO6dbE34pWSLU-1e7X1JVMxjLx72i'
    },
    {
        id: '9',
        name: 'Nutribs',
        type: 'Skincare Partner',
        logo: '/SPONSORS_ LOGO/Nutribs-Skincare Partner.png',
        website: 'https://nutribs.com/about-us'
    },
    {
        id: '10',
        name: 'Sbooch',
        type: 'Kombucha Partner',
        logo: '/SPONSORS_ LOGO/Sbooch- Kombucha Partner.png',
        website: 'https://sbooch.com/pages/about-us'
    },
    {
        id: '11',
        name: 'Tata Consumer Products',
        type: 'Snacking Partner',
        logo: '/SPONSORS_ LOGO/Tata Consumer Products_Snacking Partner.png',
        website: 'https://www.tataconsumer.com/about'
    }
];

export const FAQS: Faq[] = [
    {
        id: '1',
        question: 'How do I register for events?',
        answer: 'You can register by clicking the "Register" button on the event details page. It will redirect you to a Google Form.'
    },
    {
        id: '2',
        question: 'Is accommodation provided?',
        answer: 'Yes, limited accommodation is available for outstation participants. Please contact the hospitality team.'
    },
    {
        id: '3',
        question: 'Are there entry fees?',
        answer: 'Entry to the fest grounds is free. Specific events may have a registration fee.'
    }
];

export const TEAM: TeamMember[] = [
    {
        id: "1",
        name: "Aadarsh Ambastha",
        role: "Team Member",
        image: "/team/Aadarsh_Junior forum.jpg",
        phone: "+91 95998 74790",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "2",
        name: "Amandeep Hyanki",
        role: "Team Member",
        image: "/team/Aman_junior.jpg",
        phone: "+91 81716 67353",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "3",
        name: "Ilaa Vasishtha",
        role: "Team Member",
        image: "/team/Ilaa_Junior forum.jpg",
        phone: "+91 70222 84248",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "4",
        name: "Mohit Giri",
        role: "Team Member",
        image: "/team/Mohit_ Junior .jpg",
        phone: "+91 97117 07039",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "5",
        name: "Shreepriya Jha",
        role: "Team Member",
        image: "/team/Shreepriya_Junior.jpg",
        phone: "+91 78570 91072",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "6",
        name: "Swaraj Patil",
        role: "Team Member",
        image: "/team/Swaraj_ Junior.jpg",
        phone: "+91 98341 59970",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "7",
        name: "Nikhil Kumar",
        role: "Team Member",
        image: "/team/Nikhil Kumar.jpg",
        phone: "+91 86769 75650",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "8",
        name: "Akash Sonwane",
        role: "Team Member",
        image: "/team/Akash_senior forum.jpg",
        phone: "+91 93704 05998",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "9",
        name: "Ameesh Devwrat",
        role: "Team Member",
        image: "/team/Ameesh.png",
        phone: "+91 99206 01359",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "10",
        name: "Ghanshyam",
        role: "Team Member",
        image: "/team/Ghanshyam_Senior forum .jpg",
        phone: "+91 95886 73511",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "11",
        name: "Grusha Krishnani",
        role: "Team Member",
        image: "/team/Grusha_Senior Forum.jpg",
        phone: "+91 84460 48393",
        email: "tissforum.manthan2026@gmail.com"
    },
    {
        id: "12",
        name: "Sheetal Koul",
        role: "Team Member",
        image: "/team/Sheetal_senior forum.jpg",
        phone: "+91 98111 28822",
        email: "tissforum.manthan2026@gmail.com"
    }
];

export const GUESTS = [
    { id: '1', name: 'Arundhati Bhattacharya', year: 'Prev', role: 'Chairperson & CEO, Salesforce India' },
    { id: '2', name: 'Usha Thorat', year: 'Prev', role: 'Former Deputy Governor, RBI' },
    { id: '3', name: 'Kiran Rao', year: 'Prev', role: 'Filmmaker' },
    { id: '4', name: 'Varun Grover', year: 'Prev', role: 'Writer & Comedian' },
    { id: '5', name: 'Shakti Mohan', year: 'Prev', role: 'Dancer' },
    { id: '6', name: 'Tahira Kashyap', year: 'Prev', role: 'Writer' },
    { id: '7', name: 'Anand Neelakantan', year: 'Prev', role: 'Author' },
    { id: '8', name: 'Rajat Chauhan', year: 'Prev', role: 'Stand-up Comedian' },
];
