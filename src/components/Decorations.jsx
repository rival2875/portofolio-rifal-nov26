import React from "react";

// Logo bulat ungu + putih seperti di desain "Jenny." versi Dark Purple
export function BrandLogo({ size = "md" }) {
  const dims = size === "sm" ? "w-8 h-8" : "w-10 h-10";
  return (
    <div
      className={`${dims} rounded-full bg-gradient-to-tr from-[#7E22CE] to-[#A855F7] flex items-center justify-center shrink-0 shadow-md shadow-[#9333EA]/30`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 13.5L11.5 7H16.5L11 13.5H6Z" fill="#FFFFFF" />
        <path d="M9.5 17L15 10.5H19L13.5 17H9.5Z" fill="#0B0714" />
      </svg>
    </div>
  );
}

// 3 garis aksen (doodle rays) di ujung kanan atas judul
export function SparkleRays({ color = "#FFFFFF", className = "" }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      className={`inline-block w-5 h-5 md:w-6 md:h-6 -mt-5 ml-1 select-none ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 14L2 5M13 17L19 8M15 22L25 20"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Badge kecil di atas judul section: ikon ●◗◗ + teks
export function SectionBadge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 mb-2.5">
      <div className="flex items-center -space-x-1">
        <span className="w-3.5 h-3.5 rounded-full bg-white" />
        <svg
          viewBox="0 0 20 16"
          fill="none"
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 2C7.5 2 10 4.686 10 8C10 11.314 7.5 14 4 14"
            stroke="#A855F7"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M11 2C14.5 2 17 4.686 17 8C17 11.314 14.5 14 11 14"
            stroke="#A855F7"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <span className="text-sm font-semibold tracking-tight text-gray-200">
        {text}
      </span>
    </div>
  );
}

// Bintang 4 sudut untuk Marquee & Skill Tag
export function FourPointStar({ className = "w-5 h-5", color = "#A855F7" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1L14.8 9.2L23 12L14.8 14.8L12 23L9.2 14.8L1 12L9.2 9.2L12 1Z"
        fill={color}
      />
      <circle cx="12" cy="12" r="2" fill="#FFFFFF" />
    </svg>
  );
}

// Stamp Bulat Bergerigi "HIRE ME" yang berputar di Hero Section
export function HireMeStamp({ href = "#contact" }) {
  return (
    <a
      href={href}
      aria-label="Hire Me"
      className="group relative inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 select-none transition-transform duration-300 hover:scale-105"
    >
      {/* Scalloped / Zigzag outer dark purple badge */}
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full animate-spin-slow drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          fill="#1B1130"
          stroke="#A855F7"
          strokeWidth="1.5"
          points="60,2 67,8 75,4 80,12 89,10 92,19 101,20 101,29 110,33 108,42 115,48 111,56 116,64 110,71 113,80 105,85 106,94 97,97 95,106 86,106 82,114 73,112 67,118 60,113 53,118 47,112 38,114 34,106 25,106 23,97 14,94 15,85 7,80 10,71 4,64 9,56 5,48 12,42 10,33 19,29 19,20 28,19 31,10 40,12 45,4 53,8"
        />
        <defs>
          <path
            id="hireMeCirclePath"
            d="M 60, 60 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          />
        </defs>
        <text
          fill="#FFFFFF"
          fontSize="8.5"
          fontWeight="700"
          letterSpacing="2.9px"
        >
          <textPath href="#hireMeCirclePath" startOffset="0%">
            • HIRE ME • HIRE ME • HIRE ME
          </textPath>
        </text>
      </svg>

      {/* Center purple circle */}
      <span className="absolute w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#9333EA] text-white flex items-center justify-center shadow-md shadow-[#9333EA]/50 group-hover:bg-white group-hover:text-[#0B0714] transition-colors">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-5 h-5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </span>
    </a>
  );
}
