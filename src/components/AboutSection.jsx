import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionBadge, SparkleRays } from "./Decorations";

export default function AboutSection({ about }) {
  return (
    <section
      id="about"
      className="bg-[#080510] border-y border-white/10 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Ambient Purple Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#9333EA]/15 blur-[110px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* LEFT: Purple Geometric Portrait Frame + Tilted Floating Skill Tags */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 sm:w-80">
              {/* Purple Geometric Card Backdrop with Notched Corners */}
              <div className="relative bg-gradient-to-b from-[#9333EA] to-[#581C87] rounded-3xl pt-4 px-4 pb-0 overflow-hidden shadow-2xl shadow-[#9333EA]/30">
                {/* Decorative corner cutouts */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#080510] rotate-45" />
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#080510] rotate-45" />

                {/* Portrait Image */}
                <img
                  src={about.image}
                  alt={about.titleHighlight}
                  className="w-full h-80 sm:h-88 object-cover object-top rounded-t-2xl relative z-10"
                />

                {/* Gradient at bottom of frame */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080510] via-[#080510]/60 to-transparent z-10" />
              </div>

              {/* Tilted Floating Skill Pills at Bottom of Portrait */}
              <div className="relative z-20 -mt-10 flex flex-wrap justify-center gap-2 px-2">
                <span className="-rotate-6 bg-[#150E26] text-white border border-white/25 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg">
                  {about.floatingTags[0]?.label || "React.js & Laravel"}
                </span>
                <span className="rotate-3 bg-white text-[#0B0714] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg">
                  {about.floatingTags[1]?.label || "UI/UX & Figma"}
                </span>
                <span className="-rotate-2 bg-[#9333EA] text-white border border-white/20 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg">
                  {about.floatingTags[2]?.label || "Graphic Design"}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: About Content, Stats & Download CV */}
          <div className="lg:col-span-7">
            <SectionBadge text={about.subtitle} />

            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight leading-tight">
              {about.titlePrefix}{" "}
              <span className="text-[#C084FC] relative inline-block">
                {about.titleHighlight}
                <SparkleRays color="#FFFFFF" />
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-gray-200 leading-relaxed">
              {about.description}
            </p>

            {about.secondaryDescription && (
              <p className="mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                {about.secondaryDescription}
              </p>
            )}

            {/* Key Metrics / Stats Row */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#C084FC]">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button (Direct CV Download / View) */}
            <div className="mt-8">
              <a
                href={about.cvUrl}
                target="_blank"
                rel="noreferrer"
                download="CV-Rifaldi-Valoza.pdf"
                className="group inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/20 p-1.5 rounded-full transition-all"
              >
                <span className="bg-[#9333EA] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md shadow-[#9333EA]/30">
                  {about.cvButtonText}
                </span>
                <span className="w-9 h-9 rounded-full bg-white text-[#0B0714] flex items-center justify-center group-hover:translate-x-0.5 transition-transform mr-0.5">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
