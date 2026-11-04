import React, { useState } from "react";
import { portfolioData } from "./data/portfolioData";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MarqueeBanner from "./components/MarqueeBanner";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogsSection from "./components/BlogsSection";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isLightMode, setIsLightMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLightMode
          ? "light-mode bg-[#F7F5FF] text-[#160D2B]"
          : "bg-[#0B0714] text-white"
      }`}
    >
      {/* Floating Pill Navbar */}
      <Navbar
        brand={portfolioData.brand}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isLightMode={isLightMode}
        onToggleTheme={() => setIsLightMode((prev) => !prev)}
      />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection hero={portfolioData.hero} />

        {/* 2. Dark Marquee Strip */}
        <MarqueeBanner items={portfolioData.marqueeItems} />

        {/* 3. My Services Accordion ("How I Bring Ideas to Life") */}
        <ServicesSection servicesSection={portfolioData.servicesSection} />

        {/* 4. About Me Section ("Who is Rifaldi Valoza?") */}
        <AboutSection about={portfolioData.about} />

        {/* 5. Featured Projects Section */}
        <ProjectsSection projectsSection={portfolioData.projectsSection} />

        {/* 6. Blogs & Design Insights Section */}
        <BlogsSection blogsSection={portfolioData.blogsSection} />
      </main>

      {/* 7. Contact & Footer */}
      <ContactFooter
        contact={portfolioData.contact}
        brand={portfolioData.brand}
      />
    </div>
  );
}
