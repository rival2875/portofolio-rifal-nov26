import React from "react";
import {
  ArrowRight,
  Facebook,
  Dribbble,
  Github,
  Instagram,
  Globe,
} from "lucide-react";
import { SparkleRays, FourPointStar } from "./Decorations";

function SocialIcon({ type }) {
  switch (type) {
    case "facebook":
      return <Facebook className="w-3.5 h-3.5" />;
    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-3.5 h-3.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
    case "dribbble":
      return <Dribbble className="w-3.5 h-3.5" />;
    case "github":
      return <Github className="w-3.5 h-3.5" />;
    case "instagram":
      return <Instagram className="w-3.5 h-3.5" />;
    default:
      return <Globe className="w-3.5 h-3.5" />;
  }
}

export default function HeroSection({ hero }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 pb-0 px-4 sm:px-6 lg:px-8"
    >
      {/* Ambient Purple Glow Effects */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[550px] h-[320px] rounded-full bg-[#9333EA]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#A855F7]/20 blur-[110px]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Center Heading Block */}
        <div className="text-center max-w-2xl mx-auto relative z-10">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            {hero.greeting}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#A855F7] to-white relative inline-block">
              {hero.fullName}
              <SparkleRays color="#FFFFFF" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-2.5 text-sm sm:text-base font-medium text-gray-300">
            {hero.role}
          </p>
        </div>

        {/* Main 3-Column Hero Composition */}
        <div className="mt-6 lg:mt-4 grid grid-cols-1 lg:grid-cols-12 items-end gap-8 relative">
          {/* LEFT COLUMN: Follow Me On */}
          <div className="lg:col-span-3 flex flex-col justify-center lg:pb-24 order-2 lg:order-1 z-10">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-3">
                Follow Me On
              </p>
              <div className="flex items-center gap-2.5">
                {hero.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={soc.name}
                    className="w-8 h-8 rounded-full bg-[#1B1130] border border-white/15 text-white hover:bg-[#9333EA] hover:border-[#C084FC] flex items-center justify-center transition-all duration-200 shadow-sm"
                  >
                    <SocialIcon type={soc.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER COLUMN: Portrait + Portfolio Button */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-end order-1 lg:order-2">
            {/* Decorative Subtle Circular Backdrop (Purple & Dark Rings) */}
            <div className="absolute bottom-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-b from-[#231344] to-[#140B29] border border-[#A855F7]/30 -z-0 flex items-center justify-center shadow-[0_0_60px_rgba(147,51,234,0.2)]">
              <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border-[18px] border-[#0B0714]/70" />
            </div>

            {/* Portrait Image */}
            <div className="relative z-10 w-64 sm:w-80 md:w-[350px] aspect-[4/4.6] overflow-hidden rounded-t-full border-t-2 border-x-2 border-[#A855F7]/40 shadow-2xl">
              <img
                src={hero.portraitImage}
                alt={hero.fullName}
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle dark-purple gradient overlay at bottom for clean CTA contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0714] via-[#0B0714]/40 to-transparent" />
            </div>

            {/* Overlapping Pill Button (Portfolio Only) */}
            <div className="relative z-20 -mt-14 mb-5 bg-[#150E26]/95 backdrop-blur-md p-1.5 rounded-full shadow-2xl border border-white/20 inline-flex items-center">
              <a
                href={hero.primaryButton.href}
                className="group inline-flex items-center gap-3 bg-[#9333EA] hover:bg-[#7E22CE] text-white font-bold text-sm pl-6 pr-2.5 py-2.5 rounded-full transition-all shadow-md shadow-[#9333EA]/40"
              >
                <span>{hero.primaryButton.text}</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#0B0714] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Testimonial Quote + Floating Skill Pills */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end gap-8 lg:pb-12 order-3 z-10">
            {/* Quote Block */}
            <div className="lg:text-right max-w-[230px]">
              <div className="text-[#C084FC] text-4xl font-serif leading-none mb-1 select-none">
                “
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-300 leading-relaxed">
                {hero.quote}
              </p>
            </div>

            {/* Floating Skill Pills Cluster (Mix of Purple & White Pills) */}
            <div className="flex flex-wrap lg:justify-end items-center gap-2 max-w-[270px]">
              {hero.floatingSkills.map((skill, idx) => (
                <span
                  key={skill.label}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md ${
                    skill.variant === "orange"
                      ? "bg-[#9333EA] text-white shadow-[#9333EA]/30"
                      : idx === 0
                      ? "bg-white text-[#0B0714]"
                      : "bg-[#1B1130] text-white border border-white/20"
                  }`}
                >
                  {skill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
