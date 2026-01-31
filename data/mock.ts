import { Event, Faq, Sponsor, TeamMember } from "@/types";

export const EVENTS: Event[] = [
    {
        id: "1",
        slug: "tattvabodha",
        title: "Tattvabodha",
        category: "Flagship",
        shortDescription: "Idea conclave focused on dialogue, policy, and social change.",
        fullDescription:
            "Tattvabodha is the intellectual forum of Manthan, bringing together thinkers, students, and professionals to discuss contemporary social, economic, and policy challenges.",
        date: "February 12, 2026",
        time: "10:00 AM",
        venue: "Convention Centre",
        image: "/images/02_FLAGSHIP_EVENTS/Tattvabodha.jpg",
        rules: [
            "Pre-registration is mandatory.",
            "Formal or semi-formal attire is preferred.",
            "Interactive discussion and Q&A session included.",
        ],
        prizePool: "Certificates & Recognition",
        contactPerson: {
            name: "Academic Team",
            phone: "+91 91234 56789",
        },
        registrationLink: "#",
    },

    {
        id: "2",
        slug: "consultiss",
        title: "ConsultISS",
        category: "Flagship",
        shortDescription: "National case study competition on real-world challenges.",
        fullDescription:
            "ConsultISS is a national-level case study competition where participants analyze real-life management and social problems and present actionable solutions.",
        date: "February 12, 2026",
        time: "11:00 AM",
        venue: "Auditorium",
        image: "/images/02_FLAGSHIP_EVENTS/consultiss.png",
        rules: [
            "Team size: 3 members.",
            "Case submission in PDF format.",
            "Original work only. Plagiarism is not allowed.",
        ],
        prizePool: "₹50,000",
        contactPerson: {
            name: "Management Team",
            phone: "+91 55555 44444",
        },
        registrationLink: "#",
    },

    {
        id: "3",
        slug: "dakshya",
        title: "Dakshya",
        category: "Flagship",
        shortDescription: "Analytics and problem-solving challenge using data.",
        fullDescription:
            "Dakshya tests participants on data interpretation, analytical thinking, and practical problem-solving using real datasets and scenarios.",
        date: "February 13, 2026",
        time: "11:00 AM",
        venue: "Main Courtyard",
        image: "/images/02_FLAGSHIP_EVENTS/Dakshya.jpg",
        rules: [
            "Participants must bring their own laptops.",
            "Basic knowledge of analytics is required.",
            "Open to postgraduate students.",
        ],
        prizePool: "₹30,000",
        contactPerson: {
            name: "Analytics Team",
            phone: "+91 77777 66666",
        },
        registrationLink: "#",
    },

    {
        id: "4",
        slug: "srijan",
        title: "Srijan",
        category: "Flagship",
        shortDescription: "Human resource and leadership strategy competition.",
        fullDescription:
            "Srijan focuses on people management, leadership decision-making, and ethical problem-solving through interactive and role-based rounds.",
        date: "February 13, 2026",
        time: "2:00 PM",
        venue: "Seminar Hall",
        image: "/images/02_FLAGSHIP_EVENTS/Srijan.jpg",
        rules: [
            "Team size: 2 members.",
            "Role-play and presentation rounds.",
            "Judging based on ethics and creativity.",
        ],
        prizePool: "₹25,000",
        contactPerson: {
            name: "HR Team",
            phone: "+91 77777 66666",
        },
        registrationLink: "#",
    },

    {
        id: "5",
        slug: "jigyasa",
        title: "Jigyasa",
        category: "Flagship",
        shortDescription: "Quiz competition testing knowledge and awareness.",
        fullDescription:
            "Jigyasa is Manthan’s flagship quiz event, challenging participants on current affairs, social issues, culture, and general awareness.",
        date: "February 12, 2026",
        time: "3:00 PM",
        venue: "Lecture Hall",
        image: "/images/02_FLAGSHIP_EVENTS/Jigyasa.jpg",
        rules: [
            "Team size: 2 members.",
            "Preliminary written round followed by finals.",
            "Quizmaster’s decision will be final.",
        ],
        prizePool: "₹20,000",
        contactPerson: {
            name: "Quiz Team",
            phone: "+91 88888 77777",
        },
        registrationLink: "#",
    },

    {
        id: "6",
        slug: "udghosh",
        title: "Udghosh",
        category: "Flagship",
        shortDescription: "Opening ceremony featuring performances and addresses.",
        fullDescription:
            "Udghosh marks the grand opening of Manthan, featuring keynote addresses, cultural performances, and the official inauguration of the fest.",
        date: "February 12, 2026",
        time: "6:00 PM",
        venue: "Open Air Theatre",
        image: "/images/02_FLAGSHIP_EVENTS/Udghosh.jpg",
        rules: [
            "Open to all registered participants.",
            "Entry on a first-come basis.",
            "Follow campus decorum guidelines.",
        ],
        prizePool: "—",
        contactPerson: {
            name: "Cultural Committee",
            phone: "+91 99999 88888",
        },
        registrationLink: "#",
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
        name: "Arjun Verma",
        role: "Chairperson",
        image: "https://placehold.co/300x300?text=Arjun",
        phone: "+91 99999 88888",
        email: "chairperson@manthan-tiss.edu"
    },
    {
        id: "2",
        name: "Sanya Malhotra",
        role: "Cultural Secretary",
        image: "https://placehold.co/300x300?text=Sanya",
        phone: "+91 77777 66666",
        email: "culture@manthan-tiss.edu"
    },
    {
        id: "3",
        name: "Rohan Das",
        role: "Management Head",
        image: "https://placehold.co/300x300?text=Rohan",
        phone: "+91 55555 44444",
        email: "management@manthan-tiss.edu"
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
