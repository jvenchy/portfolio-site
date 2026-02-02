"use client";

import React, { useEffect, useState, lazy, Suspense } from 'react';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Navbar from "../components/Navbar";
import ScrollDirectionIndicator from '../components/Scroll';
import Beams from '@/components/Beams';

const Experiences = lazy(() => import('../components/Experiences'));
const Projects = lazy(() => import('../components/Projects'));
const Awards = lazy(() => import("../components/Awards"));
const PersonalInterests = lazy(() => import('../components/PersonalInterests'));
const Technologies = lazy(() => import('../components/Technologies'));

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");

  // Make sure these IDs exactly match the section IDs in your JSX
  const sections = ["introduction", "about", "experiences", "projects", "awards", "personal-life"];

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
    <main className="relative bg-[#0a0a0a] min-h-screen">
      {/* Fixed Beams Background for entire page */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0" style={{ opacity: 0.5 }}>
          <Beams
            beamWidth={20}
            beamHeight={50}
            beamNumber={3}
            lightColor="#ffffff"
            speed={6.9}
            noiseIntensity={4.5}
            scale={0.125}
            rotation={255}
          />
        </div>
        <div className="absolute inset-0" style={{ opacity: 0.5, mixBlendMode: 'screen' }}>
          <Beams
            beamWidth={20}
            beamHeight={50}
            beamNumber={3}
            lightColor="#ffffff"
            speed={6.9}
            noiseIntensity={4.5}
            scale={0.125}
            rotation={75}
            transparent={true}
          />
        </div>
      </div>

      {/* All content with relative positioning to appear above aurora */}
      <div className="relative z-10">
        <Navbar />
        <div className="relative">
          <section id="introduction" className="min-h-screen">
            <Introduction />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <Suspense fallback={<div className="min-h-screen" />}>
            <section id="experiences" className="min-h-screen">
              <Experiences />
            </section>
          </Suspense>
          {/* Projects section gets more space - no height constraint */}
          <Suspense fallback={<div className="min-h-screen py-20" />}>
            <section id="projects" className="min-h-screen py-20">
              <Projects />
            </section>
          </Suspense>
          <Suspense fallback={<div className="min-h-screen" />}>
            <section id="awards" className="min-h-screen">
              <Awards />
            </section>
          </Suspense>
          {/* <section id="technologies" className="min-h-screen">
            <Technologies />
          </section> */}
          <Suspense fallback={<div className="min-h-screen" />}>
            <section id="personal-life" className="min-h-screen">
              <PersonalInterests />
            </section>
          </Suspense>
        </div>
      </div>

      {/* Section indicators */}
      <div className="fixed bottom-2/3 top-8 right-8 flex flex-col space-y-2 z-50 opacity-0">
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