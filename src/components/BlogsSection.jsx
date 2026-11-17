"use client";

import { useRef } from "react";
import { Calendar, Clock } from "lucide-react";
import { SectionBadge, SparkleRays } from "./Decorations";
import { useScrollReveal, useHoverTilt } from "@/lib/animations";

export default function BlogsSection({ blogsSection }) {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);
  useHoverTilt(sectionRef, "[data-tilt]", 6);

  return (
    <section
      id="achievement"
      ref={sectionRef}
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div data-reveal className="text-center max-w-2xl mx-auto mb-12">
          <SectionBadge text={blogsSection.subtitle} />
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-white leading-tight">
            {blogsSection.titlePrefix}{" "}
            <span className="text-[#C084FC] relative inline-block">
              {blogsSection.titleHighlight}
              <SparkleRays color="#FFFFFF" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogsSection.items.map((post) => (
            <article
              key={post.id}
              data-reveal
              data-tilt
              className="group bg-[#140D25] rounded-3xl overflow-hidden border border-white/10 hover:border-[#A855F7]/50 hover:-translate-y-2 shadow-md hover:shadow-2xl hover:shadow-[#9333EA]/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-[#0B0714]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#9333EA] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-2.5">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C084FC]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C084FC]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#C084FC] transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}