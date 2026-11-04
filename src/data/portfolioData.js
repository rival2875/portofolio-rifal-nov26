// ============================================================================
// RIFALDI VALOZA PORTFOLIO DATA (ENGLISH VERSION — BASED ON CV)
// ============================================================================

export const portfolioData = {
  // 1. BRAND & NAVBAR
  brand: {
    name: "Rifaldi Valoza",
    dot: ".",
    ctaText: "Light Mode",
    ctaHref: "#contact",
    navLinks: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Achievement", href: "#achievement" },
      { label: "About Me", href: "#about" },
    ],
  },

  // 2. HERO SECTION
  hero: {
    badgeText: "Software Engineering Technology — IPB University",
    badgeAvatar: "/potogue.png",
    greeting: "I'm",
    fullName: "Rifaldi Valoza",
    role: "Web Developer",
    portraitImage: "/potogue.png",
    primaryButton: {
      text: "Portfolio",
      href: "#projects",
    },
    secondaryButton: {
      text: "Hire Me",
      href: "#contact",
    },
    quote:
      "Software Engineering Technology Student at IPB University — Passionate about Web Development & Graphic Design!",
    reviews: {
      countText: "5+ Years",
      ratingText: "(2021 - Present)",
      subText: "Freelance & Leadership Experience",
      avatars: [],
    },
    socials: [
      {
        name: "Facebook",
        icon: "facebook",
        url: "https://www.facebook.com/share/19zQaMds51/",
      },
      {
        name: "TikTok",
        icon: "tiktok",
        url: "https://www.tiktok.com/@valozza_?_r=1&_t=ZS-9B7EbtXQja9",
      },
      {
        name: "Github",
        icon: "github",
        url: "https://github.com/rival2875",
      },
      {
        name: "Instagram",
        icon: "instagram",
        url: "https://www.instagram.com/valozza_?obrf=eTlrYmZ1ZGYzM2R3",
      },
    ],
    // Skills from CV
    floatingSkills: [
      { label: "React.js", variant: "dark" },
      { label: "Laravel", variant: "orange" },
      { label: "Tailwind CSS", variant: "dark" },
      { label: "Figma", variant: "dark" },
      { label: "CorelDraw", variant: "orange" },
      { label: "Canva", variant: "dark" },
    ],
  },

  // 3. MARQUEE BANNER (SKILLS & COMPETENCIES FROM CV)
  marqueeItems: [
    "React.js",
    "Laravel",
    "Tailwind CSS",
    "Figma",
    "CorelDraw",
    "Canva",
    "Microsoft Office",
    "Web Development",
    "Graphic Design",
  ],

  // 4. SERVICES SECTION (BASED ON CV SKILLS & EXPERIENCE)
  servicesSection: {
    subtitle: "My Services",
    titlePrefix: "How I Bring",
    titleHighlight: "Ideas to Life",
    ctaText: "View All Services",
    ctaHref: "#contact",
    defaultOpenIndex: 0,
    items: [
      {
        number: "01.",
        title: "Web Development (React.js & Laravel)",
        tags: [
          "React.js Frontend",
          "Laravel Full-Stack",
          "Tailwind CSS",
          "Responsive Web Apps",
        ],
        description:
          "Developing modern, fast, and responsive websites and web applications powered by React.js, Laravel, and Tailwind CSS.",
        href: "#contact",
      },
      {
        number: "02.",
        title: "UI/UX & Website Design",
        tags: [
          "Figma Prototyping",
          "Wireframing",
          "Landing Page UI",
          "Interactive Design",
        ],
        description:
          "Designing intuitive, user-friendly, and visually compelling web and mobile interfaces structured cleanly in Figma.",
        href: "#contact",
      },
      {
        number: "03.",
        title: "Graphic & Social Media Design",
        tags: [
          "Social Media Design",
          "Infographics",
          "CorelDraw & Canva",
          "Visual Branding",
        ],
        description:
          "Crafting impactful visual branding, infographics, and social media campaigns for institutions and brands including IPB University and Makpanen Indonesia.",
        href: "#contact",
      },
      {
        number: "04.",
        title: "Animation & Creative Content",
        tags: [
          "2D Animation",
          "Motion Graphics",
          "Digital Campaigns",
          "Canva Mentoring",
        ],
        description:
          "Producing engaging animated visuals and creative assets, backed by hands-on experience as an Animator at the Ministry of Tourism and Creative Economy RI.",
        href: "#contact",
      },
      {
        number: "05.",
        title: "IT Support & Computer Networking",
        tags: [
          "BNSP Level II Certified",
          "IT Troubleshooting",
          "System Maintenance",
          "Microsoft Office",
        ],
        description:
          "BNSP Level II certified in Computer and Network Engineering with practical experience as an IT Support Specialist at DPRD West Java Province.",
        href: "#contact",
      },
    ],
  },

  // 5. ABOUT ME SECTION (ENGLISH TRANSLATION OF CV PROFILE)
  about: {
    subtitle: "About Me",
    titlePrefix: "Who is",
    titleHighlight: "Rifaldi Valoza?",
    description:
      "Hey there, I'm Rifaldi Valoza — a 5th-semester Software Engineering Technology student at IPB University with a strong passion for software development and visual design.",
    secondaryDescription:
      "Backed by extensive leadership and freelance experience since 2021 across IPB University, the Ministry of Tourism & Creative Economy RI, and creative agencies, I bring effective problem-solving skills, strong team collaboration, and high dedication to delivering impactful digital solutions.",
    image: "/potogue.png",
    floatingTags: [
      { label: "React.js & Laravel", variant: "dark" },
      { label: "UI/UX & Figma", variant: "dark" },
      { label: "Graphic Design", variant: "orange" },
    ],
    stats: [
      { value: "5+", label: "Years of Experience" },
      { value: "6+", label: "Industry & Freelance Roles" },
      { value: "3x", label: "National Award Winner" },
    ],
    cvButtonText: "Download CV",
    cvUrl: "/CV-Rifaldi-Valoza.pdf",
  },

  // 6. PROJECTS / PORTFOLIO SECTION
  projectsSection: {
    subtitle: "My Portfolio",
    titlePrefix: "Featured",
    titleHighlight: "Recent Projects",
    categories: ["All", "Web Development", "UI/UX & AR", "E-Commerce"],
    items: [
      {
        id: 1,
        title:
          "Web-Based Financial Management Information System — CV. Muda Kita Indonesia",
        year: "2026",
        category: "Web Development",
        filterCategories: ["Web Development"],
        tags: [
          "Web Information System",
          "Project Management",
          "Requirements Engineering",
          "2026",
        ],
        image: "/project-mudain.jpg",
        description:
          "Led project management from initiation to completion to ensure the web-based financial management information system was delivered on time and aligned with client business processes, acting as the primary bridge between developers and stakeholders for software requirements engineering.",
        liveUrl: "https://github.com/daffaarrasyid/mudain-project",
      },
      {
        id: 2,
        title:
          "BUDAYA.ID — Augmented Reality (AR) Cultural Learning Application",
        year: "2026",
        category: "UI/UX & AR",
        filterCategories: ["Web Development", "UI/UX & AR"],
        tags: ["Figma UI/UX", "Unity 3D & AR", "Marker Tracking", "2026"],
        image: "/project-budayaid.jpg",
        description:
          "Comprehensively designed the visual user interface in Figma—covering user flows, wireframes, and high-fidelity prototypes—and developed integrated Augmented Reality (AR) features in Unity with 3D asset modeling and marker tracking to digitize Indonesian culture for Gen Z.",
        liveUrl: "https://github.com/rival2875/budaya-id",
      },
      {
        id: 3,
        title:
          "Promotional Website for Plant Breeding & Seed Technology (PTB) — SV IPB University",
        year: "2025",
        category: "Web Development",
        filterCategories: ["Web Development", "UI/UX & AR"],
        tags: [
          "Front-End & Back-End",
          "Responsive UI/UX",
          "SV IPB University",
          "2025",
        ],
        image: "/project-ptb.png",
        description:
          "Designed and built the front-end and back-end web architecture for the Plant Breeding and Seed Technology (PTB) study program at the Vocational School of IPB University, delivering a responsive and interactive UI/UX across desktop and mobile devices.",
        liveUrl: "https://github.com/rival2875",
      },
      {
        id: 4,
        title:
          "Valoza Store — Web E-Commerce & Operational Supply Chain Infrastructure",
        year: "2024",
        category: "Web Development",
        filterCategories: ["Web Development", "E-Commerce"],
        tags: [
          "Web E-Commerce",
          "Supply Chain Management",
          "Business Workflow",
          "2024",
        ],
        image: "/project-valozastore.png",
        description:
          "Built, operated, and managed an independent web e-commerce platform for digital printing and merchandise production, engineering end-to-end digital business workflows from client specification gathering and inventory management to product distribution.",
        liveUrl: "https://github.com/rival2875",
      },
    ],
  },

  // 7. BLOGS / ACHIEVEMENTS SECTION
  blogsSection: {
    subtitle: "Achievements & Highlights",
    titlePrefix: "Honors &",
    titleHighlight: "Awards",
    items: [
      {
        id: 1,
        date: "October 2026",
        readTime: "SV IPB University",
        category: "1st Place Winner",
        title: "1st Place in Infographic Competition — Agridation 2026 at SV IPB University",
        image:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
        url: "#about",
      },
      {
        id: 2,
        date: "March 2026",
        readTime: "ITB Bandung",
        category: "3rd Place Hackathon",
        title: "3rd Place in IYREF SRE Hackathon 2026 — Bandung Institute of Technology (ITB)",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=80",
        url: "#about",
      },
      {
        id: 3,
        date: "September 2026",
        readTime: "Sebelas Maret University",
        category: "3rd Place Business Plan",
        title: "3rd Place in Business Plan Competition — Dekan Cup 2026 at Sebelas Maret University",
        image:
          "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=80",
        url: "#about",
      },
    ],
  },

  // 8. CONTACT & FOOTER
  contact: {
    subtitle: "Contact Me",
    titlePrefix: "Let's Work",
    titleHighlight: "Together!",
    description:
      "Have a project idea or looking for a Web Developer & Designer for your team? Drop a message and let's bring your vision to life.",
    email: "rifaldi2875@gmail.com",
    phone: "+62 858-8966-2159",
    location: "Cianjur, West Java, Indonesia",
    linkedin: "https://www.linkedin.com/in/valoza-rifaldi-812b8a221/",
    copyright: "© 2026 Rifaldi Valoza. All rights reserved.",
  },
};
