"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge, SparkleRays } from "./Decorations";
import { gsap, useScrollReveal, useHoverTilt } from "@/lib/animations";

export default function ProjectsSection({ projectsSection }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const sectionRef = useRef(null);
  const isFirstRender = useRef(true);
  useScrollReveal(sectionRef);
  useHoverTilt(sectionRef, "[data-reveal-card]", 6, [activeCategory]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal-card]",
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
          overwrite: "auto",
          clearProps: "transform",
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === "Semua"
      ? projectsSection.items
      : projectsSection.items.filter((item) =>
          item.filterCategories
            ? item.filterCategories.includes(activeCategory)
            : item.category === activeCategory
        );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div
          data-reveal
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <SectionBadge text={projectsSection.subtitle} />
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-white leading-tight">
              {projectsSection.titlePrefix}{" "}
              <span className="text-[#C084FC] relative inline-block">
                {projectsSection.titleHighlight}
                <SparkleRays color="#FFFFFF" />
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {projectsSection.categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#9333EA] text-white shadow-lg shadow-[#9333EA]/30"
                      : "bg-[#150E26] text-gray-300 hover:bg-white hover:text-[#0B0714] border border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              data-reveal
              data-reveal-card
              className="group bg-[#140D25] rounded-3xl p-4 sm:p-5 border border-white/10 hover:border-[#A855F7]/50 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-[#9333EA]/15 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#0B0714]"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#150E26]/90 backdrop-blur-sm border border-white/15 text-[#C084FC] text-xs font-bold px-3.5 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </a>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold bg-white/10 text-white/90 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block mt-3 text-xl font-extrabold text-white group-hover:text-[#C084FC] transition-colors"
                >
                  {project.title}
                </a>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs sm:text-sm font-bold text-white hover:text-[#C084FC] transition-colors"
                >
                  Lihat Studi Kasus
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={project.title}
                  className="w-9 h-9 rounded-full bg-[#9333EA] text-white group-hover:bg-white group-hover:text-[#0B0714] group-hover:scale-110 group-hover:rotate-45 flex items-center justify-center transition-all duration-300 shadow-sm"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}