import React from "react";
import { FourPointStar } from "./Decorations";

export default function MarqueeBanner({ items }) {
  const loopItems = [...items, ...items, ...items];

  return (
    <div className="bg-gradient-to-r from-[#170E2C] via-[#221242] to-[#170E2C] text-white py-4 overflow-hidden border-y border-[#A855F7]/30 select-none shadow-lg">
      <div className="animate-marquee flex items-center gap-8 sm:gap-12">
        {loopItems.map((label, idx) => (
          <div key={idx} className="flex items-center gap-8 sm:gap-12 shrink-0">
            <span className="text-base sm:text-xl font-bold tracking-tight text-white">
              {label}
            </span>
            <FourPointStar className="w-5 h-5 shrink-0" color="#C084FC" />
          </div>
        ))}
      </div>
    </div>
  );
}
