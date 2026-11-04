import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar({
  brand,
  activeSection,
  setActiveSection,
  isLightMode,
  onToggleTheme,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 pt-2">
      <div className="max-w-6xl mx-auto">
        <nav className="bg-[#150E26]/95 backdrop-blur-xl text-white rounded-full px-3.5 py-2.5 shadow-2xl shadow-[#9333EA]/15 border border-white/15 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => setActiveSection("Home")}
            className="flex items-center pl-3 group"
          >
            <span className="text-lg font-extrabold tracking-tight text-white">
              {brand.name}
              <span className="text-[#A855F7]">{brand.dot}</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {brand.navLinks.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(item.label)}
                    className={`relative py-1 transition-colors duration-200 ${
                      isActive
                        ? "text-[#C084FC] font-bold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#A855F7] rounded-full shadow-[0_0_8px_#A855F7]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Action: Theme Toggle Button (Light Mode / Dark Mode) */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 bg-white text-[#0B0714] hover:bg-[#9333EA] hover:text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-md cursor-pointer"
            >
              {isLightMode ? (
                <>
                  <Moon className="w-4 h-4 text-[#7E22CE] group-hover:text-white" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-[#9333EA] group-hover:text-white" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open Menu"
            className="md:hidden w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 bg-[#150E26] text-white rounded-3xl p-5 shadow-2xl border border-white/15">
            <ul className="flex flex-col gap-3 text-sm font-medium">
              {brand.navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.label);
                      setMobileOpen(false);
                    }}
                    className={`block py-2 px-3 rounded-xl ${
                      activeSection === item.label
                        ? "bg-[#9333EA] text-white font-bold"
                        : "text-gray-200 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  onToggleTheme();
                  setMobileOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-[#0B0714] font-bold text-sm py-2.5 rounded-full cursor-pointer"
              >
                {isLightMode ? (
                  <>
                    <Moon className="w-4 h-4 text-[#7E22CE]" />
                    <span>Switch to Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-[#9333EA]" />
                    <span>Switch to Light Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
