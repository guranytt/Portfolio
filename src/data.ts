import { TimelineEntry, LegacyAchievement, PortfolioItem, MediaItem, TestimonialItem } from "./types";

// Cloudinary Hosted Verified Resources
export const drNkantaPortrait = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780381425/IMG-20260602-WA0006_jcsbky.jpg";
export const wifePortrait = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780381428/IMG-20260602-WA0011_s4fqde.jpg";
export const himAndWife1 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780381427/IMG-20260602-WA0005_r5aunn.jpg";
export const himAndWife2 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780381426/IMG-20260602-WA0007_britda.jpg";
export const friendsAndFamily = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780381427/IMG-20260602-WA0008_tzjhar.jpg";
export const daughters1 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780381431/IMG-20260602-WA0009_h51hm1.jpg";
export const daughters2 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780381427/IMG-20260602-WA0010_bvsdpe.jpg";

// Verified Cloudinary Hosted Business Portfolios
export const businessImg1 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780383350/IMG-20260602-WA0016_javfuq.jpg";
export const businessImg2 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780383350/IMG_20260602_074901_843_vtqa0k.jpg";
export const businessImg3 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780383350/IMG-20260602-WA0012_nlqrwn.jpg";
export const businessImg4 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780383350/IMG-20260602-WA0013_ffp1rg.jpg";
export const businessImg5 = "https://res.cloudinary.com/dojayb3ro/image/upload/q_auto/f_auto/v1780383350/IMG-20260602-WA0017_yxumdl.jpg";

export const profileDetails = {
  name: "Dr. Edidiong Dominic Nkanta",
  honorific: "Founder & Group CEO, FlyBooking Arena",
  titleAndEra: "Dr. Edidiong Dominic Nkanta • Group CEO, Entrepreneur & Philanthropist",
  shortTitle: "Founder & Group CEO • Fellow Risk Manager • Strategic Tech Partner",
  avatarImage: drNkantaPortrait,
  introQuote: "The only language I practice is that which adds value to life.",
  biographySummary: "Born in Akwa Ibom State and established as a premier multi-sector captain of industry in Lagos, Dr. Edidiong Dominic Nkanta combines profound faith, academic rigor, and visionary resourcefulness. He directs a prestigious group of corporations spanning global logistics, aviation reservation portals, software consultation, and e-commerce.",
  contactEmail: "ceo.office@flybookingarena.com",
  officeAddress: "FlyBooking Arena Plaza, Lagos Corporate District, Nigeria",
  socials: {
    twitter: "https://x.com/nkantaman",
    facebook: "https://www.fb.com/l/6lp1kJRRR",
    linkedin: "https://www.linkedin.com/in/dr-edidiong-nkanta-3532b6141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    guardianOffice: "https://flybookingarena.com"
  }
};

export const timelineData: TimelineEntry[] = [
  {
    year: "1981",
    title: "Birth & Akwa Ibom Heritage",
    subtitle: "December 23, 1981 • Otoro, Abak",
    description: "Born into Akwa Ibom State, starting an ambitious journey rooted in strong regional pride, Christian discipline, and high family values.",
    highlights: ["Born in Otoro, Abak Local Government Area", "Laid down values of hard work and community support from an early age"],
    location: "Akwa Ibom State"
  },
  {
    year: "1994",
    title: "Early Foundations & Education",
    subtitle: "Ikot Etuk Primary & Midtown Commercial",
    description: "Began formal education at Ikot Etuk Government Primary School, building outstanding discipline before moving to Midtown Secondary Commercial School in Ikot Ekpene.",
    highlights: ["Excelled in commercial subjects, arithmetic, and leadership positions", "Represented Midtown in regional academic competitions"],
    location: "Ikot Ekpene"
  },
  {
    year: "2005",
    title: "Professional Accountancy Credentials",
    subtitle: "University of Nigeria, Nsukka",
    description: "Earned his academic Degree in Accountancy from the prestigious University of Nigeria, Nsukka (UNN), laying the core financial blueprints for his later corporate expansion.",
    highlights: ["Specialized in cost management, auditing, and corporate frameworks", "Developed deep technical knowledge in enterprise resource management"],
    location: "Nsukka"
  },
  {
    year: "2013",
    title: "The Birth of Equipremark Resources",
    subtitle: "Corporate Software & Tax Advisory Launch",
    description: "After several years directing senior accounts and consulting roles for leading conglomerates in Lagos, he founded Equipremark Resources, offering premium corporate software setup and specialized tax counsel.",
    highlights: ["Successfully configured ERP systems for over 50 regional enterprises", "Pioneered integrated accounting training programs in Lagos"],
    location: "Lagos State"
  },
  {
    year: "2022",
    title: "State Coordinator & National Fellowship",
    subtitle: "Chartered Institute of Loan & Risk Management",
    description: "Inducted as a prestigious Fellow of the Chartered Institute of Loan and Risk Management of Nigeria, and appointed State Coordinator for Akwa Ibom State in March 2022.",
    highlights: ["Recognized for outstanding practice in mitigation of investment vulnerabilities", "Chairs state summits aimed at stabilizing credit and SME loan accessibility"],
    location: "Uyo & Lagos"
  },
  {
    year: "2024",
    title: "DHL Licensed Service Partnership",
    subtitle: "Global Outlets & SME Shipping Solutions",
    description: "Secured a prestigious DHL Authorized Service Partner license in 2024. GSC Logistics now operates DHL service outlets across Lagos and parts of Ogun State, giving SMEs faster access to international shipping.",
    highlights: [
      "Operates active DHL service hubs across key commercial districts",
      "Democratized high-speed global shipping access for thousands of local SMEs"
    ],
    location: "Lagos & Ogun State"
  },
  {
    year: "2026",
    title: "Diversified Corporate Leadership",
    subtitle: "A Powerful Multi-Sector Conglomerate",
    description: "Leads a massive portfolio of enterprise conglomerates in Lagos consisting of GSC Logistics, FlyBooking Arena, Zentech Software Hub, and Naija Online Stores.",
    highlights: ["Directs top-tier global shipping routes and air freight systems", "Honored among the 100 Young Progressive Business Leaders in Africa"],
    location: "Lagos Headquarters"
  }
];

export const legacyAchievements: LegacyAchievement[] = [
  {
    icon: "ShieldAlert",
    title: "Risk Management",
    value: "Fellow Status",
    description: "Inducted into the highest professional tier of the Chartered Institute of Loan and Risk Management of Nigeria.",
    category: "Service"
  },
  {
    icon: "Globe2",
    title: "GSC Logistics",
    value: "Global Routes",
    description: "Spearheading state-of-the-art global logistics, clearance, and freight forwarding solutions connecting Nigerian businesses internationally.",
    category: "Environment"
  },
  {
    icon: "Tv",
    title: "FlyBooking Arena",
    value: "Online Hub",
    description: "The digital gateway of choice for flight reservations, prestigious hotel arrangements, and seamless visa assistance.",
    category: "Patronages"
  },
  {
    icon: "GraduationCap",
    title: "Zentech Software",
    value: "Gold Partner",
    description: "Official implementation experts for Zoho, RetailMan, and QuickBooks bookkeeping suites, empowering SME transparency.",
    category: "Environment"
  },
  {
    icon: "Leaf",
    title: "Staff Well-being",
    value: "100% Payroll",
    description: "Dedicated to prompt, fair compensation, modeling the belief that business is an avenue of faith to support families.",
    category: "Service"
  },
  {
    icon: "Fingerprint",
    title: "Naija Online Stores",
    value: "Multi-Vendor",
    description: "A secure online marketplace empowering thousands of local vendors to catalog and trade goods directly across Nigeria.",
    category: "Patronages"
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "speech-value",
    title: "Adding Value to Life",
    subtitle: "Corporate Philosophy in Modern Commerce",
    date: "2025-08",
    category: "speeches",
    summary: "Dr. Nkanta explains how commercial enterprise can serve as a vessel for faith and the eradication of regional underemployment.",
    body: "The only language I practice is that which adds value to life. In business, we must not seek purely short-term profits. Our duty is to meet Christ through business—not in abstraction, but by creating concrete jobs, paying employees respectably and promptly, and fostering absolute corporate honesty.",
    tags: ["Leadership", "Business Philosophy", "Faith", "Ethics"],
    featuredImage: drNkantaPortrait,
    quote: {
      text: "Power is not the privilege to command, but the absolute duty to safeguard families.",
      source: "Dr. Edidiong Dominic Nkanta"
    }
  },
  {
    id: "proj-flybooking",
    title: "The FlyBooking Arena Portal",
    subtitle: "Aviation Reservation Infrastructure",
    date: "2024-04",
    category: "projects",
    summary: "Introducing absolute comfort to domestic and international air travel through rapid flight bookings, premium concierge, and automated visa assistance routes.",
    body: "Under his direct supervision, FlyBooking Arena developed a secure real-time api reservation framework. By connecting with dozens of global airlines and premier hotel partners, the platform processes complex multi-city bookings and streamlines high-profile corporate charters with precision.",
    tags: ["Aviation Tech", "Customer First", "SaaS Systems"],
    featuredImage: businessImg4,
    quote: {
      text: "Travel should not be a series of stresses, but a smooth extension of executive focus.",
      source: "FlyBooking Executive Annual"
    }
  },
  {
    id: "pub-risk-blueprint",
    title: "The Risk Blueprint",
    subtitle: "Sovereign Frameworks for Corporate Loans in Africa",
    date: "2022-10",
    category: "publications",
    summary: "A milestone study in credit management and institutional risk mitigation presented to state ministries by the Chartered Institute of Loan & Risk Management.",
    body: "High interest rates and unpredictable regional trade cycles require modern risk modeling. This paper outlines tools that financial institutes can implement to evaluate credit profiles fairly, ensuring that small-to-medium businesses gain continuous asset security without default.",
    tags: ["Risk Management", "Tax Law", "Auditing"],
    featuredImage: businessImg3
  },
  {
    id: "appear-zentech-summit",
    title: "Zentech Modern Hub",
    subtitle: "Launching Digital Accounting Solutions",
    date: "2024-09",
    category: "appearances",
    summary: "Inaugurating Zentech's software hub in association with Zoho, RetailMan, and QuickBooks to transition legacy warehouses into smart digital operations.",
    body: "Bringing advanced cloud-based general ledgers and multi-location asset trackers to local merchants. Dr. Nkanta led the ribbon-cutting, stating that transparent audit trails are the armor of modern commerce.",
    tags: ["Accounting Software", "SME Digitalization", "Lagos Commerce"],
    featuredImage: businessImg5
  },
  {
    id: "proj-dhl-logistics",
    title: "DHL Authorized Service Partnership",
    subtitle: "Global Outlets & SME Shipping Solutions",
    date: "2024-05",
    category: "projects",
    summary: "Securing a DHL Authorized Service Partner license in 2024 to operate outlets across Lagos and Ogun State, facilitating fast international shipping for SMEs.",
    body: "As part of his expansion in logistics, Dr. Nkanta secured a DHL Authorized Service Partner license in 2024. GSC Logistics now operates DHL service outlets across Lagos and parts of Ogun State, giving SMEs faster access to international shipping. This strategic alliance has empowered thousands of small-to-meaningful enterprises, lowering transit friction and establishing reliable air cargo routes to over 220 countries.",
    tags: ["Logistics", "DHL Partner", "Global Shipping", "SME Growth"],
    featuredImage: businessImg2,
    quote: {
      text: "Our partnership with DHL isn't merely transactional—it's a critical bridge linking the industrious spirit of local SMEs with global marketplaces.",
      source: "Dr. Edidiong Dominic Nkanta"
    }
  }
];

export const mediaGallery: MediaItem[] = [
  {
    id: "m_landing",
    type: "photo",
    src: drNkantaPortrait,
    title: "Dr. Edidiong Dominic Nkanta (Group CEO)",
    description: "Official executive portrait of Dr. Edidiong Dominic Nkanta, capturing corporate vision and foundational strength.",
    category: "Official",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-1"
  },
  {
    id: "m_wife",
    type: "photo",
    src: wifePortrait,
    title: "Mrs. Nkanta (Matriarch of the Estate)",
    description: "An elegant portrait of Dr. Nkanta's wife, embodying professional grace, family support, and serene leadership.",
    category: "Family",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-1"
  },
  {
    id: "m_couple1",
    type: "photo",
    src: himAndWife1,
    title: "Dr. Nkanta & Partner in Greatness",
    description: "A shared celebration of faith and destiny, proving that stable families form the core foundation of successful commerce.",
    category: "Family",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-2"
  },
  {
    id: "m_couple2",
    type: "photo",
    src: himAndWife2,
    title: "Dr. Edidiong & Wife - Shared Covenant",
    description: "Modeling high ethical partnerships in business and life. Driven by deep commitment to Christ and regional advancement.",
    category: "Family",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-2"
  },
  {
    id: "m_family",
    type: "photo",
    src: friendsAndFamily,
    title: "Friends, Relatives & Community Inflows",
    description: "Surrounded by loved ones, modeling active support systems, corporate community empowerment, and deep-seated local unity.",
    category: "Family",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-1"
  },
  {
    id: "m_daughters1",
    type: "photo",
    src: daughters1,
    title: "The Legacy Indicators: Beloved Daughters",
    description: "Dr. Dominic Nkanta's daughters representing the future generation of professional excellence and leadership.",
    category: "Family",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-2"
  },
  {
    id: "m_daughters2",
    type: "photo",
    src: daughters2,
    title: "Daughters' Academic & Spiritual Journey",
    description: "Joyful and focused presentation of his princesses. Fostering future female tech leaders and captains of industry.",
    category: "Family",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-1"
  },
  {
    id: "m_bus1",
    type: "photo",
    src: businessImg1,
    title: "GSC Logistics Operations Control",
    description: "Multi-layered corporate team briefing under Dr. Nkanta's direction, coordinating bulk delivery systems and customs clearing pathways.",
    category: "Official",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-1"
  },
  {
    id: "m_bus2",
    type: "photo",
    src: businessImg2,
    title: "Sealing the DHL Partnership Alliance",
    description: "Dr. Edidiong Dominic Nkanta signing the historic international DHL Authorized Service Partner licensing, driving regional access for Nigerian SMEs.",
    category: "Official",
    date: "2024-05",
    aspectRatioClassName: "md:col-span-1"
  },
  {
    id: "m_bus3",
    type: "photo",
    src: businessImg3,
    title: "Strategic Corporate Governance Session",
    description: "High-level board meeting reviewing audit logs and scaling the distribution networks across Lagos and Ogun State.",
    category: "Official",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-2"
  },
  {
    id: "m_bus4",
    type: "photo",
    src: businessImg4,
    title: "DHL Authorized Service Outlet Hub",
    description: "A fast-operating front-office shipment center supporting SME custom entries and worldwide air cargo routing seamlessly.",
    category: "Diplomacy",
    date: "2024-05",
    aspectRatioClassName: "md:col-span-1"
  },
  {
    id: "m_bus5",
    type: "photo",
    src: businessImg5,
    title: "Dr. Nkanta’s Leadership Mandate Briefing",
    description: "Addressing branch executives and cargo managers on maintaining impeccable corporate ethics, 100% prompt payroll, and premium delivery execution.",
    category: "Official",
    date: "2026-06",
    aspectRatioClassName: "md:col-span-2"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "t1",
    quote: "Dr. Edidiong Dominic Nkanta represents a remarkable rare model of modern African leadership: profound professional accountancy rigor matched with deep personal faith and uncompromised dedication to family. His systems rescued our corporate credit profile.",
    author: "Sir Alistair Vance",
    role: "Senior Enterprise Consultant",
    organization: "The Lagos Commerce Registry",
    initials: "AV"
  },
  {
    id: "t2",
    quote: "Under Dr. Dominic's coordination at the Chartered Institute of Loan & Risk Management, Akwa Ibom State has witnessed a complete evolution in credit audit transparency and professional standards. A true statesperson of business.",
    author: "Dr. Elena Rostova",
    role: "Executive Secretary",
    organization: "West African Risk Coalition",
    initials: "ER"
  },
  {
    id: "t3",
    quote: "His staff welfare philosophy is unparalleled. In an era where corporate administrative delays are common, FlyBooking Arena pays outstanding wages on time, every time, supporting employees' spiritual and family foundations.",
    author: "Prof. Charles de Troyes",
    role: "Patron",
    organization: "The Ethical Business Guild of Africa",
    initials: "CT"
  }
];
