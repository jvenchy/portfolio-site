"use client";

import React, { useEffect, useState } from 'react';
import Introduction from '../components/Introduction';
import Awards from "../components/Awards";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Technologies from '../components/Technologies';
import About from '../components/About';
import PersonalInterests from '../components/PersonalInterests';
import Navbar from "../components/Navbar";
import ScrollDirectionIndicator from '../components/Scroll';
import Aurora from '@/components/Aurora';

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");

  // Make sure these IDs exactly match the section IDs in your JSX
  const sections = ["introduction", "about", "projects", "awards", "experiences", "technologies", "personal-life"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: [0, 0.5, 1],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative">
      {/* Fixed Aurora Background for entire page */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Aurora 
          colorStops={["#5227FF", "#7cff67", "#5227FF"]}
          amplitude={1.2}
          blend={0.3}
          speed={0.8}
        />
      </div>

      {/* All content with relative positioning to appear above aurora */}
      <div className="relative z-10">
        <Navbar />
        <div className="relative">
          <section id="introduction" className="h-screen">
            <Introduction />
          </section>
          <section id="about" className="h-screen">
            <About />
          </section>
          <section id="projects" className="h-screen">
            <Projects />
          </section>
          <section id="awards" className="h-screen">
            <Awards />
          </section>
          <section id="experiences" className="h-screen">
            <Experiences />
          </section>
          <section id="technologies" className="h-screen">
            <Technologies />
          </section>
          <section id="personal-life" className="h-screen">
            <PersonalInterests />
          </section>
        </div>
      </div>

      {/* Section indicators */}
      <div className="fixed bottom-2/3 right-2 xl:right-8 flex flex-col space-y-2 z-50">
        {sections.map((section) => (
          <div
            key={section}
            className={`w-3 h-3 right-4 rounded-full transition-colors duration-500 ${
              activeSection === section ? "bg-theme" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
      {/* <ScrollDirectionIndicator activeSection={activeSection} sections={sections} /> */}
    </main>
  );
}