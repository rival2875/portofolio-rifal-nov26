"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  // rAF berhenti saat tab/panel preview tersembunyi; paksa tick agar
  // animasi entrance tidak membekukan elemen di keadaan opacity 0.
  // lagSmoothing dimatikan: interval fallback ter-throttle 1s di tab hidden,
  // tanpa ini tiap tick cuma maju 33ms dan animasi terlihat membeku.
  gsap.ticker.lagSmoothing(0);
  setInterval(() => {
    if (document.hidden) gsap.ticker.tick();
  }, 120);
}

export { gsap, ScrollTrigger };

export function useScrollReveal(ref, selector = "[data-reveal]") {
  useLayoutEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(selector).forEach((el, i) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: (i % 4) * 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [ref, selector]);
}

export function useHoverTilt(ref, selector, max = 7, deps = []) {
  useLayoutEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll(selector);
    const handlers = [];

    els.forEach((el) => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(el, {
          rotationY: x * max,
          rotationX: -y * max,
          transformPerspective: 900,
          duration: 0.4,
          ease: "power2.out",
        });
      };
      const onLeave = () => {
        gsap.to(el, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.5)",
        });
      };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      handlers.push([el, onMove, onLeave]);
    });

    return () => {
      handlers.forEach(([el, onMove, onLeave]) => {
        el.removeEventListener("mousemove", onMove);
        el.removeEventListener("mouseleave", onLeave);
        gsap.set(el, { rotationX: 0, rotationY: 0 });
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, selector, max, ...deps]);
}