"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogsSection from "@/components/BlogsSection";
import ContactFooter from "@/components/ContactFooter";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("Beranda");
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLightMode
          ? "light-mode bg-[#F7F5FF] text-[#160D2B]"
          : "bg-[#0B0714] text-white"
      }`}
    >
      <Navbar
        brand={portfolioData.brand}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isLightMode={isLightMode}
        onToggleTheme={() => setIsLightMode((prev) => !prev)}
      />

      <main>
        <HeroSection hero={portfolioData.hero} />
        <MarqueeBanner items={portfolioData.marqueeItems} />
        <ServicesSection servicesSection={portfolioData.servicesSection} />
        <AboutSection about={portfolioData.about} />
        <ProjectsSection projectsSection={portfolioData.projectsSection} />
        <BlogsSection blogsSection={portfolioData.blogsSection} />
      </main>

      <ContactFooter
        contact={portfolioData.contact}
        brand={portfolioData.brand}
      />
    </div>
  );
}