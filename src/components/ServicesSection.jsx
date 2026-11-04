import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionBadge, SparkleRays } from "./Decorations";

export default function ServicesSection({ servicesSection }) {
  const [openIndex, setOpenIndex] = useState(
    servicesSection.defaultOpenIndex ?? 1
  );

  const handleToggle = (idx) => {
    setOpenIndex(idx);
  };

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <SectionBadge text={servicesSection.subtitle} />
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              {servicesSection.titlePrefix}{" "}
              <span className="text-[#C084FC] relative inline-block">
                {servicesSection.titleHighlight}
                <SparkleRays color="#FFFFFF" />
              </span>
            </h2>
          </div>

          {/* Right Dual Pill CTA ("View All Services" in Purple + White Arrow Circle) */}
          <a
            href={servicesSection.ctaHref}
            className="group self-start sm:self-auto inline-flex items-center gap-2 bg-[#160F29] border border-white/15 p-1.5 rounded-full shadow-lg hover:scale-[1.02] transition-transform"
          >
            <span className="bg-[#9333EA] text-white font-bold text-xs sm:text-sm px-5 py-2 rounded-full shadow-sm">
              {servicesSection.ctaText}
            </span>
            <span className="w-8 h-8 rounded-full bg-white text-[#0B0714] flex items-center justify-center group-hover:translate-x-0.5 transition-transform mr-0.5">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>

        {/* Interactive Numbered Service Cards */}
        <div className="space-y-4">
          {servicesSection.items.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={service.number}
                onClick={() => handleToggle(idx)}
                className={`group relative cursor-pointer transition-all duration-300 rounded-2xl overflow-hidden ${
                  isOpen
                    ? "bg-gradient-to-br from-[#251346] via-[#1B0F35] to-[#130A24] text-white border border-[#A855F7]/50 shadow-2xl shadow-[#9333EA]/20 py-7 px-6 sm:px-8"
                    : "bg-[#140D25] hover:bg-[#1B1232] text-white border border-white/10 py-4 px-6 sm:px-8"
                }`}
              >
                {/* Decorative Chamfered / Stepped Corner Accent */}
                <div
                  className={`hidden sm:block absolute left-0 bottom-0 w-28 h-2.5 rounded-tr-xl bg-[#0B0714]`}
                />
                <div
                  className={`hidden sm:block absolute right-0 top-0 w-8 h-2.5 rounded-bl-xl ${
                    isOpen ? "bg-[#0B0714]" : "bg-transparent"
                  }`}
                />

                {/* Top Row: Number + Dotted Connector + Title + Purple/White Arrow Circle */}
                <div className="flex items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1">
                    {/* Number + Dotted Connector */}
                    <div className="flex items-center gap-3 sm:w-44 shrink-0">
                      <span className="text-sm sm:text-base font-extrabold text-[#C084FC]">
                        {service.number}
                      </span>
                      <span
                        className={`flex-1 border-b border-dashed ${
                          isOpen ? "border-[#A855F7]/40" : "border-white/15"
                        }`}
                      />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Diagonal Arrow Button */}
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-white text-[#0B0714] scale-105 shadow-md"
                        : "bg-[#9333EA] text-white group-hover:bg-white group-hover:text-[#0B0714] group-hover:rotate-12"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </div>

                {/* Expanded Content (Tags + Description) */}
                {isOpen && (
                  <div className="mt-4 sm:pl-50 pr-4 sm:pr-14 animate-fadeIn">
                    {/* Sub-service Tag Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-semibold text-white bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-200/90 leading-relaxed max-w-xl">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
