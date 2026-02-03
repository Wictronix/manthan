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
        title: "SNEAK & SNAP – Street Photography & Treasure Hunt",
        category: "Spotlight",
        shortDescription: "Explore, click, and solve the mystery.",
        fullDescription: "A unique blend of street photography and a treasure hunt. Uncover hidden gems of the campus through your lens while solving clues.",
        date: "13th February, 2026",
        venue: "Amphitheatre, TISS New Campus",
        image: "",
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
        title: "KISMAT KONNECTION – The Fun Mixer Event",
        category: "Spotlight",
        shortDescription: "The ultimate ice-breaking mixer.",
        fullDescription: "An interactive and fun-filled event designed to break the ice and build new connections through quirky games and activities.",
        date: "13th February, 2026",
        venue: "Amphitheatre, TISS New Campus",
        image: "",
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
        title: "KHYAAL-E-BANDISH – Fusion & Band Battle",
        category: "Spotlight",
        shortDescription: "The ultimate clash of the bands.",
        fullDescription: "Witness the convergence of musical genres as bands from across the country battle it out with fusion and electric performances.",
        date: "12th Feb, 2026",
        venue: "Convention Hall",
        image: "",
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
        title: "STAR NIGHT – The Grand Finale",
        category: "Spotlight",
        shortDescription: "Artist: COMING SOON",
        fullDescription: "The grand finale star night. Artist to be announced soon! Exclusive for TISS students and guest performers.",
        date: "12th Feb, 2026",
        venue: "Convention Hall",
        image: "",
        rules: [
            "Coming Soon",
        ],
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
        name: 'Heritage Foundation',
        tier: 'Platinum',
        logo: 'https://placehold.co/400x200?text=Heritage+Foundation'
    },
    {
        id: '2',
        name: 'BevCo',
        tier: 'Gold',
        logo: 'https://placehold.co/400x200?text=BevCo'
    },
    {
        id: '3',
        name: 'EduMate',
        tier: 'Silver',
        logo: 'https://placehold.co/400x200?text=EduMate'
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
        name: "Sheetak Koul",
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
