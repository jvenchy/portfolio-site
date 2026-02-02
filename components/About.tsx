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
              text="about me."
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl font-bold text-white mb-12 mr-4 ml-4 md:mr-10 md:ml-10"
            />
          )}
        </div>
        <div ref={contentRef}>
          {contentVisible && (
            <div>
              <BlurText
                text="⛳️ adaptive, creatively motivated, and goal oriented"
                delay={100}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 ml-4 md:ml-10 mb-8 font-mono text-white text-sm md:text-lg"
              />
              <BlurText
                text="📍 university of toronto - toronto, canada 🇨🇦"
                delay={100}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 ml-4 md:ml-10 mb-8 font-mono text-white text-sm md:text-lg"
              />
              <BlurText
                text="🖥️ computer science major, statistics minor 📊"
                delay={100}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 ml-4 md:ml-10 mb-8 font-mono text-white text-sm md:text-lg"
              />
              <BlurText
                text="🎓 graduating in 2027"
                delay={100}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 ml-4 md:ml-10 mb-8 font-mono text-white text-sm md:text-lg"
              />
              <BlurText
                text="🏆 2x hackathon winner"
                delay={100}
                animateBy="words"
                direction="top"
                className="transition-all duration-200 hover:scale-110 ml-4 md:ml-10 mb-8 font-mono text-white text-sm md:text-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}