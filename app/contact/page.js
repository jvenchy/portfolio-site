// app/contact/page.tsx
"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from 'next/navigation';
import SendMail from "../../components/SendMail";
import Socials from "../../components/Socials";
import Navbar from "../../components/Navbar";

export default function Contact() {
  const [activeSection, setActiveSection] = useState("socials");
  const scrollTimeout = useRef(null);
  const scrolling = useRef(false);
  const pathname = usePathname();

  const sections = ["socials", "sendmail"];

  // ... copy all the scrolling logic from your portfolio page ...
  // (smoothScrollTo, handleScroll, and all useEffects should be the same)
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
    // Run immediately
    window.scrollTo(0, 0);
    
    // Run after a brief delay to ensure all content is loaded
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  
    // Also handle the router events if using Next.js
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
    }
  
    return () => {
      clearTimeout(timeoutId);
      if (typeof window !== 'undefined') {
        window.history.scrollRestoration = 'auto';
      }
    };
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
      <div className="pt-16">
        <div className="relative h-screen">
        <section id="socials" className="min-h-screen snap-start">
            <Socials />
          </section>
          <section id="sendmail" className="min-h-screen snap-start">
            <SendMail />
          </section>
        </div>
      </div>
      <div className="fixed top-1/2 transform -translate-y-1/2 right-8 flex flex-col space-y-2 z-50">
        {sections.map((section) => (
          <div
            key={section}
            className={`w-5 h-5 rounded-full transition-colors duration-700 ${
              activeSection === section ? "bg-theme" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </main>
  );
}