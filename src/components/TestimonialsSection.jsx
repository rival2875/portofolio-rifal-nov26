import React from "react";
import { Star } from "lucide-react";
import { SectionBadge, SparkleRays } from "./Decorations";

export default function TestimonialsSection({ testimonialsSection }) {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#080510] border-y border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Center Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionBadge text={testimonialsSection.subtitle} />
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-white leading-tight">
            {testimonialsSection.titlePrefix}{" "}
            <span className="text-[#C084FC] relative inline-block">
              {testimonialsSection.titleHighlight}
              <SparkleRays color="#FFFFFF" />
            </span>
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsSection.items.map((item, idx) => {
            const isMiddle = idx === 1;
            return (
              <div
                key={item.id}
                className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isMiddle
                    ? "bg-gradient-to-b from-[#261447] to-[#170C2E] text-white border border-[#A855F7]/50 shadow-2xl shadow-[#9333EA]/20 md:-translate-y-2"
                    : "bg-[#140D25] text-white border border-white/10 shadow-md"
                }`}
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-4 h-4 fill-[#C084FC] text-[#C084FC]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm leading-relaxed text-gray-200">
                    “{item.comment}”
                  </p>
                </div>

                {/* Reviewer Info */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#A855F7]"
                  />
                  <div>
                    <h4 className="text-sm font-extrabold text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
