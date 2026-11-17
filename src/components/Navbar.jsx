"use client";

import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sun, Moon, Menu, X, LogIn, LogOut } from "lucide-react";
import { gsap } from "@/lib/animations";
import { getSession, clearSession } from "@/lib/auth";

export default function Navbar({
  brand,
  activeSection,
  setActiveSection,
  isLightMode,
  onToggleTheme,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [session, setSession] = useState(null);
  const headerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setSession(getSession());
  }, []);

  const handleLogout = () => {
    clearSession();
    setSession(null);
    setMobileOpen(false);
    router.push("/login");
  };

  const handleNavClick = (e, href, label) => {
    e.preventDefault();
    setActiveSection(label);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    gsap.to(window, {
      duration: 1.1,
      ease: "power2.inOut",
      scrollTo: { y: target, offsetY: 96 },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-navbar]", {
        y: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="sticky top-4 z-50 px-4 sm:px-6 lg:px-8 pt-2"
    >
      <div className="max-w-6xl mx-auto">
        <nav
          data-navbar
          className="bg-[#150E26]/95 backdrop-blur-xl text-white rounded-full px-3.5 py-2.5 shadow-2xl shadow-[#9333EA]/15 border border-white/15 flex items-center justify-between"
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home", "Beranda")}
            className="flex items-center pl-3 group"
          >
            <span className="text-lg font-extrabold tracking-tight text-white">
              {brand.name}
              <span className="text-[#A855F7]">{brand.dot}</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {brand.navLinks.map((item) => {
              const isActive = activeSection === item.label;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
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

          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 bg-white text-[#0B0714] hover:bg-[#9333EA] hover:text-white font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-md cursor-pointer"
            >
              {isLightMode ? (
                <>
                  <Moon className="w-4 h-4 text-[#7E22CE]" />
                  <span>Mode Gelap</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-[#9333EA]" />
                  <span>Mode Terang</span>
                </>
              )}
            </button>
            {session ? (
              <div className="flex items-center gap-2">
                <img
                  src={session.user.image}
                  alt={session.user.firstName}
                  className="w-8 h-8 rounded-full border-2 border-[#A855F7] shadow-md shadow-[#9333EA]/30"
                />
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 bg-[#9333EA] text-white hover:bg-[#7E22CE] hover:scale-105 active:scale-95 font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-[#9333EA]/30 cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar</span>
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-[#9333EA] text-white hover:bg-[#7E22CE] hover:scale-105 active:scale-95 font-bold text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-md shadow-[#9333EA]/30"
              >
                <LogIn className="w-4 h-4" />
                <span>Masuk</span>
              </Link>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka Menu"
            className="md:hidden w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden mt-2 bg-[#150E26] text-white rounded-3xl p-5 shadow-2xl border border-white/15">
            <ul className="flex flex-col gap-3 text-sm font-medium">
              {brand.navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
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
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2.5">
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
                    <span>Ganti ke Mode Gelap</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-[#9333EA]" />
                    <span>Ganti ke Mode Terang</span>
                  </>
                )}
              </button>
              {session ? (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#9333EA] text-white font-bold text-sm py-2.5 rounded-full cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar ({session.user.firstName})</span>
                </button>
              ) : (
                <Link
                  href="/login"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#9333EA] text-white font-bold text-sm py-2.5 rounded-full"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Masuk</span>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}