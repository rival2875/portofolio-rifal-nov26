"use client";

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