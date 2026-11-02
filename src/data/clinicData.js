export const services = [
  {
    id: 1,
    title: "General Dentistry",
    category: "Dental",
    description:
      "Routine dental examinations, oral hygiene advice, and preventive care.",
    price: 800,
    recovery: "Same day",
    icon: "tooth",
  },
  {
    id: 2,
    title: "Teeth Cleaning",
    category: "Dental",
    description:
      "Professional cleaning to remove plaque and support healthy gums.",
    price: 1200,
    recovery: "Same day",
    icon: "sparkles",
  },
  {
    id: 3,
    title: "Dental Filling",
    category: "Dental",
    description:
      "Treatment for cavities designed to restore tooth function.",
    price: 1800,
    recovery: "1–2 days",
    icon: "shield-check",
  },
  {
    id: 4,
    title: "Orthodontic Consultation",
    category: "Dental",
    description:
      "Assessment and guidance for braces and teeth alignment.",
    price: 1000,
    recovery: "Varies by treatment",
    icon: "smile",
  },
  {
    id: 5,
    title: "Sports Physiotherapy",
    category: "Physiotherapy",
    description:
      "Personalized rehabilitation support for sports-related injuries.",
    price: 1500,
    recovery: "Depends on injury",
    icon: "activity",
  },
  {
    id: 6,
    title: "Back and Neck Therapy",
    category: "Physiotherapy",
    description:
      "Movement assessment and exercises for back and neck discomfort.",
    price: 1200,
    recovery: "Depends on condition",
    icon: "accessibility",
  },
  {
    id: 7,
    title: "Posture Correction",
    category: "Physiotherapy",
    description:
      "Guided exercises to improve posture, movement, and flexibility.",
    price: 1000,
    recovery: "Several sessions may be needed",
    icon: "person-standing",
  },
  {
    id: 8,
    title: "Post-Surgery Rehabilitation",
    category: "Physiotherapy",
    description:
      "Individualized rehabilitation after surgery, guided by clinical advice.",
    price: 1800,
    recovery: "Depends on recovery plan",
    icon: "heart-pulse",
  },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    specialty: "General Dentist",
    department: "Dental",
    experience: "8 years of experience",
    qualification: "BDS, MDS",
    image:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    availability: [
      { day: "Monday", time: "09:00 AM – 01:00 PM" },
      { day: "Wednesday", time: "02:00 PM – 06:00 PM" },
      { day: "Friday", time: "09:00 AM – 01:00 PM" },
    ],
  },
  {
    id: 2,
    name: "Dr. Rahul Mehta",
    specialty: "Orthodontic Dentist",
    department: "Dental",
    experience: "10 years of experience",
    qualification: "BDS, MDS Orthodontics",
    image:
      "https://images.unsplash.com/photo-1659353888101-6e53e32515fe?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    availability: [
      { day: "Tuesday", time: "10:00 AM – 02:00 PM" },
      { day: "Thursday", time: "02:00 PM – 06:00 PM" },
      { day: "Saturday", time: "09:00 AM – 12:00 PM" },
    ],
  },
  {
    id: 3,
    name: "Dr. Priya Deshmukh",
    specialty: "Senior Physiotherapist",
    department: "Physiotherapy",
    experience: "9 years of experience",
    qualification: "BPT, MPT",
    image:
      "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    availability: [
      { day: "Monday", time: "02:00 PM – 06:00 PM" },
      { day: "Wednesday", time: "09:00 AM – 01:00 PM" },
      { day: "Friday", time: "02:00 PM – 06:00 PM" },
    ],
  },
  {
    id: 4,
    name: "Dr. Arjun Patil",
    specialty: "Sports Physiotherapist",
    department: "Physiotherapy",
    experience: "7 years of experience",
    qualification: "BPT, MPT Sports Physiotherapy",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
    availability: [
      { day: "Tuesday", time: "09:00 AM – 01:00 PM" },
      { day: "Thursday", time: "09:00 AM – 01:00 PM" },
      { day: "Saturday", time: "02:00 PM – 06:00 PM" },
    ],
  },
];