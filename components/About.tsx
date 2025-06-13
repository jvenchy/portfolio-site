import Link from 'next/link';
import React from 'react';
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg px-4 ">
        <div className="font-helvetica tracking-tighter" ref={titleRef}>
          {titleVisible && (
            <BlurText
              text="ABOUT ME"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl font-bold text-white mb-12 mr-10 ml-10"
            />
          )}
        </div>
        <div ref={contentRef}>
          {contentVisible && (
            <div>
              <BlurText
                text="⛳️ Adaptive, Creatively Motivated, and Goal Oriented"
                delay={200}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-white text-sm md:text-lg"
              />
              <BlurText
                text="📍 University of Toronto - Toronto, Canada 🇨🇦"
                delay={300}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-white text-sm md:text-lg"
              />
              <BlurText
                text="🖥️ Computer Science Major, Statistics Minor 📊"
                delay={400}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-white text-sm md:text-lg"
              />
              <BlurText
                text="🎓 Junior Year / Graduating in 2026"
                delay={500}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-white text-sm md:text-lg"
              />
              <BlurText
                text="🏆 2x Hackathon Winner"
                delay={600}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-white text-sm md:text-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}