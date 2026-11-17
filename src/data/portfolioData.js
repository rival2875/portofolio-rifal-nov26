// ============================================================================
// DATA PORTOFOLIO RIFALDI VALOZA (VERSI BAHASA INDONESIA — BERDASARKAN CV)
// ============================================================================

export const portfolioData = {
  // 1. BRAND & NAVBAR
  brand: {
    name: "Rifaldi Valoza",
    dot: ".",
    navLinks: [
      { label: "Beranda", href: "#home" },
      { label: "Layanan", href: "#services" },
      { label: "Proyek", href: "#projects" },
      { label: "Prestasi", href: "#achievement" },
      { label: "Tentang Saya", href: "#about" },
    ],
  },

  // 2. HERO SECTION
  hero: {
    greeting: "Saya",
    fullName: "Rifaldi Valoza",
    role: "Front End Developer",
    portraitImage: "/potogue.png",
    quote:
      "Mahasiswa Teknologi Rekayasa Perangkat Lunak di IPB University — Punya passion besar di Front End Development & UI/UX!",
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
    floatingSkills: [
      { label: "React.js", variant: "dark" },
      { label: "Next.js", variant: "orange" },
      { label: "Laravel", variant: "dark" },
      { label: "Tailwind CSS", variant: "dark" },
      { label: "Figma", variant: "orange" },
      { label: "CorelDraw", variant: "dark" },
    ],
  },

  // 3. MARQUEE BANNER
  marqueeItems: [
    "React.js",
    "Next.js",
    "Laravel",
    "Tailwind CSS",
    "Figma",
    "CorelDraw",
    "Front End Development",
    "UI/UX Design",
  ],

  // 4. SERVICES SECTION
  servicesSection: {
    subtitle: "Layanan Saya",
    titlePrefix: "Cara Saya Mewujudkan",
    titleHighlight: "Ide Menjadi Nyata",
    defaultOpenIndex: 0,
    items: [
      {
        number: "01.",
        title: "Pengembangan Web (React.js & Laravel)",
        tags: [
          "Frontend React.js",
          "Next.js",
          "Full-Stack Laravel",
          "Tailwind CSS",
          "Web App Responsif",
        ],
        description:
          "Membangun website dan aplikasi web modern yang cepat dan responsif dengan React.js, Laravel, dan Tailwind CSS.",
        href: "#contact",
      },
      {
        number: "02.",
        title: "Desain UI/UX & Website",
        tags: [
          "Prototyping Figma",
          "Wireframing",
          "UI Landing Page",
          "Desain Interaktif",
        ],
        description:
          "Merancang antarmuka web dan mobile yang intuitif, ramah pengguna, dan menarik secara visual — tersusun rapi di Figma.",
        href: "#contact",
      },
      {
        number: "03.",
        title: "Desain Grafis & Media Sosial",
        tags: [
          "Desain Media Sosial",
          "Infografis",
          "CorelDraw",
          "Branding Visual",
        ],
        description:
          "Membuat branding visual, infografis, dan kampanye media sosial yang berdampak untuk institusi dan brand, termasuk IPB University dan Makpanen Indonesia.",
        href: "#contact",
      },
      {
        number: "04.",
        title: "Animasi & Konten Kreatif",
        tags: [
          "Animasi 2D",
          "Motion Graphics",
          "Kampanye Digital",
          "Motion Design",
        ],
        description:
          "Memproduksi visual animasi dan aset kreatif yang menarik, didukung pengalaman langsung sebagai Animator di Kementerian Pariwisata dan Ekonomi Kreatif RI.",
        href: "#contact",
      },
      {
        number: "05.",
        title: "IT Support & Jaringan Komputer",
        tags: [
          "Tersertifikasi BNSP Level II",
          "Troubleshooting IT",
          "Perawatan Sistem",
        ],
        description:
          "Tersertifikasi BNSP Level II bidang Teknik Komputer dan Jaringan dengan pengalaman praktis sebagai IT Support Specialist di DPRD Provinsi Jawa Barat.",
        href: "#contact",
      },
    ],
  },

  // 5. ABOUT ME SECTION
  about: {
    subtitle: "Tentang Saya",
    titlePrefix: "Siapa itu",
    titleHighlight: "Rifaldi Valoza?",
    description:
      "Halo, saya Rifaldi Valoza — mahasiswa semester 5 Teknologi Rekayasa Perangkat Lunak di IPB University dengan passion besar di pengembangan software dan desain visual.",
    secondaryDescription:
      "Didukung pengalaman kepemimpinan dan freelance sejak 2021 di IPB University, Kementerian Pariwisata & Ekonomi Kreatif RI, serta berbagai agensi kreatif, saya membawa kemampuan problem-solving yang efektif, kolaborasi tim yang kuat, dan dedikasi tinggi untuk menghadirkan solusi digital yang berdampak.",
    image: "/foto-about.jpeg",
    floatingTags: [
      { label: "React.js & Laravel", variant: "dark" },
      { label: "UI/UX & Figma", variant: "dark" },
      { label: "Next.js", variant: "orange" },
    ],
    stats: [
      { value: 5, suffix: "+", label: "Tahun Pengalaman" },
      { value: 6, suffix: "+", label: "Peran Industri & Freelance" },
      { value: 3, suffix: "x", label: "Juara Kompetisi Nasional" },
    ],
    cvButtonText: "Unduh CV",
    cvUrl: "/CV-Rifaldi-Valoza.pdf",
  },

  // 6. PROJECTS / PORTFOLIO SECTION
  projectsSection: {
    subtitle: "Portofolio Saya",
    titlePrefix: "Proyek",
    titleHighlight: "Terbaru Unggulan",
    categories: ["Semua", "Pengembangan Web", "UI/UX & AR", "E-Commerce"],
    items: [
      {
        id: 1,
        title:
          "Sistem Informasi Manajemen Keuangan Berbasis Web — CV. Muda Kita Indonesia",
        year: "2026",
        category: "Pengembangan Web",
        filterCategories: ["Pengembangan Web"],
        tags: [
          "Sistem Informasi Web",
          "Manajemen Proyek",
          "Rekayasa Kebutuhan",
          "2026",
        ],
        image: "/project-mudain.jpg",
        description:
          "Memimpin manajemen proyek dari inisiasi hingga selesai untuk memastikan sistem informasi manajemen keuangan berbasis web terselesaikan tepat waktu dan sesuai proses bisnis klien, menjadi jembatan utama antara developer dan stakeholder dalam rekayasa kebutuhan software.",
        liveUrl: "https://github.com/daffaarrasyid/mudain-project",
      },
      {
        id: 2,
        title:
          "BUDAYA.ID — Aplikasi Pembelajaran Budaya Berbasis Augmented Reality (AR)",
        year: "2026",
        category: "UI/UX & AR",
        filterCategories: ["Pengembangan Web", "UI/UX & AR"],
        tags: ["UI/UX Figma", "Unity 3D & AR", "Marker Tracking", "2026"],
        image: "/project-budayaid.jpg",
        description:
          "Merancang antarmuka pengguna secara menyeluruh di Figma — mulai dari user flow, wireframe, hingga prototype high-fidelity — serta mengembangkan fitur Augmented Reality (AR) terintegrasi di Unity dengan pemodelan aset 3D dan marker tracking untuk mendigitalkan budaya Indonesia bagi Gen Z.",
        liveUrl: "https://github.com/rival2875/budaya-id",
      },
      {
        id: 3,
        title:
          "Website Promosi Pemuliaan Tanaman & Teknologi Benih (PTB) — SV IPB University",
        year: "2025",
        category: "Pengembangan Web",
        filterCategories: ["Pengembangan Web", "UI/UX & AR"],
        tags: [
          "Front-End & Back-End",
          "UI/UX Responsif",
          "SV IPB University",
          "2025",
        ],
        image: "/project-ptb.png",
        description:
          "Merancang dan membangun arsitektur web front-end dan back-end untuk program studi Pemuliaan Tanaman dan Teknologi Benih (PTB) Sekolah Vokasi IPB University, menghadirkan UI/UX yang responsif dan interaktif di perangkat desktop maupun mobile.",
        liveUrl: "https://github.com/rival2875",
      },
      {
        id: 4,
        title:
          "Valoza Store — E-Commerce Web & Infrastruktur Rantai Pasok Operasional",
        year: "2024",
        category: "Pengembangan Web",
        filterCategories: ["Pengembangan Web", "E-Commerce"],
        tags: [
          "E-Commerce Web",
          "Manajemen Rantai Pasok",
          "Alur Bisnis",
          "2024",
        ],
        image: "/project-valozastore.png",
        description:
          "Membangun, mengoperasikan, dan mengelola platform e-commerce web mandiri untuk produksi digital printing dan merchandise, merekayasa alur bisnis digital end-to-end mulai dari pengumpulan spesifikasi klien, manajemen inventori, hingga distribusi produk.",
        liveUrl: "https://github.com/rival2875",
      },
    ],
  },

  // 7. PRESTASI / PENGHARGAAN
  blogsSection: {
    subtitle: "Prestasi & Pencapaian",
    titlePrefix: "Penghargaan &",
    titleHighlight: "Prestasi",
    items: [
      {
        id: 1,
        date: "Oktober 2026",
        readTime: "SV IPB University",
        category: "Juara 1",
        title:
          "Juara 1 Lomba Infografis — Agridation 2026 di SV IPB University",
        image: "/prestasi-infografis.jpeg",
      },
      {
        id: 2,
        date: "Maret 2026",
        readTime: "ITB Bandung",
        category: "Juara 3 Hackathon",
        title:
          "Juara 3 IYREF SRE Hackathon 2026 — Institut Teknologi Bandung (ITB)",
        image: "/prestasi-hackathon.jpeg",
      },
      {
        id: 3,
        date: "September 2026",
        readTime: "Universitas Sebelas Maret",
        category: "Juara 3 Business Plan",
        title:
          "Juara 3 Lomba Business Plan — Dekan Cup 2026 di Universitas Sebelas Maret",
        image: "/prestasi-businessplan.jpeg",
      },
    ],
  },

  // 8. CONTACT & FOOTER
  contact: {
    subtitle: "Hubungi Saya",
    titlePrefix: "Ayo Kerja",
    titleHighlight: "Bareng!",
    description:
      "Punya ide proyek atau lagi cari Front End Developer & Desainer untuk tim kamu? Kirim pesan dan mari wujudkan visi kamu bersama-sama.",
    email: "rifaldi2875@gmail.com",
    phone: "+62 858-8966-2159",
    location: "Cianjur, Jawa Barat, Indonesia",
    linkedin: "https://www.linkedin.com/in/valoza-rifaldi-812b8a221/",
    copyright: "© 2026 Rifaldi Valoza. Hak cipta dilindungi.",
  },
};