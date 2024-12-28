"use client";

import React, { useEffect, useState, useRef } from 'react';
import Introduction from '../components/Introduction';
import Awards from "../components/Awards";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import Technologies from '../components/Technologies';
import About from '../components/About';
import PersonalInterests from '../components/PersonalInterests';
import Navbar from "../components/Navbar";
import ScrollDirectionIndicator from '../components/Scroll';

export default function Home() {
  const [activeSection, setActiveSection] = useState("introduction");
  const scrollTimeout = useRef(null);
  const scrolling = useRef(false);

  // Make sure these IDs exactly match the section IDs in your JSX
  const sections = ["introduction", "about", "projects", "awards", "experiences", "technologies",  "personal-life"];

  const smoothScrollTo = (element, duration = 800) => {
    if (!element) return;

    const start = window.pageYOffset;
    const target = element.getBoundingClientRect().top + start;
    const startTime = performance.now();

    const scroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      window.scrollTo(0, start + (target - start) * ease(progress));

      if (progress < 1) {
        requestAnimationFrame(scroll);
      } else {
        setTimeout(() => {
          scrolling.current = false;
        }, 100);
      }
    };

    requestAnimationFrame(scroll);
  };

  const handleScroll = () => {
    if (scrolling.current) return;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = sectionId;
          }
        }
      });

      if (closestSection && closestSection !== activeSection) {
        scrolling.current = true;
        const targetElement = document.getElementById(closestSection);
        smoothScrollTo(targetElement);
        setActiveSection(closestSection);
      }
    }, 150);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: [0, 0.5, 1],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !scrolling.current) {
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [activeSection]);

  return (
    <main className="relative h-screen overflow-y-auto snap-y snap-mandatory">
      <Navbar />
      <div className="relative h-screen">
        <section id="introduction" className="h-screen snap-start">
          <Introduction />
        </section>
        <section id="about" className="h-screen snap-start">
          <About />
        </section>
        <section id="projects" className="h-screen snap-start">
          <Projects />
        </section>
        <section id="awards" className="h-screen snap-start">
          <Awards />
        </section>
        <section id="experiences" className="h-screen snap-start">
          <Experiences />
        </section>
        <section id="technologies" className="h-screen snap-start">
          <Technologies />
        </section>
        <section id="personal-life" className="h-screen snap-start">
          <PersonalInterests />
        </section>
      </div>
      <div className="fixed top-1/2 transform -translate-y-1/2 right-8 flex flex-col space-y-2 z-50">
        {sections.map((section) => (
          <div
            key={section}
            className={`w-3 h-3 right-4 rounded-full transition-colors duration-500 ${
              activeSection === section ? "bg-theme" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
      <ScrollDirectionIndicator activeSection={activeSection} sections={sections} />
    </main>
  );
}
