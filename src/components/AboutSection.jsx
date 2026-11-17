"use client";

import { useRef, useLayoutEffect } from "react";
import { ArrowRight } from "lucide-react";
import { SectionBadge, SparkleRays } from "./Decorations";
import { gsap, useScrollReveal, useHoverTilt } from "@/lib/animations";

export default function AboutSection({ about }) {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);
  useHoverTilt(sectionRef, "[data-about-frame]", 5);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-about-frame]", {
        x: -60,
        rotation: -4,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-about-frame]",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from("[data-about-tag]", {
        scale: 0,
        opacity: 0,
        stagger: 0.12,
        duration: 0.5,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: "[data-about-frame]",
          start: "top 70%",
          once: true,
        },
      });

      gsap.utils.toArray("[data-stat-value]").forEach((el) => {
        const target = Number(el.dataset.statValue);
        const suffix = el.dataset.statSuffix || "";
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.value)}${suffix}`;
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#080510] border-y border-white/10 text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#9333EA]/15 blur-[110px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          {/* KIRI: Frame Potret Geometris + Skill Tags Miring */}
          <div className="lg:col-span-5 flex justify-center">
            <div data-about-frame className="relative w-72 sm:w-80">
              <div className="relative bg-gradient-to-b from-[#9333EA] to-[#581C87] rounded-3xl pt-4 px-4 pb-0 overflow-hidden shadow-2xl shadow-[#9333EA]/30">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#080510] rotate-45" />
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#080510] rotate-45" />

                <img
                  src={about.image}
                  alt={about.titleHighlight}
                  className="w-full h-80 sm:h-88 object-cover object-top rounded-t-2xl relative z-10 transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080510] via-[#080510]/60 to-transparent z-10" />
              </div>

              <div className="relative z-20 -mt-10 flex flex-wrap justify-center gap-2 px-2">
                <span
                  data-about-tag
                  className="-rotate-6 bg-[#150E26] text-white border border-white/25 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg"
                >
                  {about.floatingTags[0]?.label}
                </span>
                <span
                  data-about-tag
                  className="rotate-3 bg-white text-[#0B0714] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg"
                >
                  {about.floatingTags[1]?.label}
                </span>
                <span
                  data-about-tag
                  className="-rotate-2 bg-[#9333EA] text-white border border-white/20 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg"
                >
                  {about.floatingTags[2]?.label}
                </span>
              </div>
            </div>
          </div>

          {/* KANAN: Konten Tentang, Statistik & Unduh CV */}
          <div className="lg:col-span-7">
            <div data-reveal>
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
            </div>

            <div
              data-reveal
              className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8"
            >
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    data-stat-value={stat.value}
                    data-stat-suffix={stat.suffix}
                    className="text-2xl sm:text-3xl font-extrabold text-[#C084FC]"
                  >
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 font-medium mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div data-reveal className="mt-8">
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