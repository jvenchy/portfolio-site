import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import BlurText from "./BlurText";

export default function Introduction() {
  const [phase, setPhase] = useState(1);
  const [showSecondText, setShowSecondText] = useState(false);

  const handleFirstAnimationComplete = () => {
    console.log('First animation completed!');
    setTimeout(() => {
      setPhase(2);
      setShowSecondText(true);
    }, 2000);
  };

  const handleSecondAnimationComplete = () => {
    console.log('Second animation completed!');
  };

  return (
    <section
      id="introduction"
      className="min-h-screen px-4 md:px-0 py-8 flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Content Layer - Aurora is now handled at page level */}
      <div className="flex flex-col items-center relative z-10">
        <div className="w-48 mb-8">
          <Image
            src="/better_picture.jpg"
            alt="Josh Shergill"
            width={200}
            height={200}
            className="rounded-full object-cover aspect-square overflow-hidden border-4 border-white transition-all duration-500 hover:scale-90 hover:border-theme"
          />
        </div>
        <div className="text-center">
          <div className="relative">
            <h1 className="text-4xl md:text-7xl font-helvetica tracking-tighter mb-4 md:mb-8 text-theme flex items-center justify-center">
              {phase === 1 && (
                <BlurText
                  text="Hi There."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleFirstAnimationComplete}
                  className="text-4xl md:text-7xl font-bold text-white"
                />
              )}
              {phase === 2 && showSecondText && (
                <BlurText
                  text="My Name's Josh."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  onAnimationComplete={handleSecondAnimationComplete}
                  className="text-4xl md:text-7xl font-bold text-white"
                />
              )}
            </h1>
          </div>
          <p className="mb-4 font-mono text-transparent text-base md:text-lg transition-all bg-clip-text text-white bg-black">
              I'm an aspiring software engineer with a passion for full-stack web development, system architecture, and UX.
          </p>
          <div className="flex flex-row justify-center font-helvetica tracking-tighter space-x-4 mt-4">
            <a
              href="https://linkedin.com/in/joshshergill"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-bold text-theme transition-all duration-200 hover:underline"
            >
              <FaLinkedin className="text-lg md:text-xl" />
              <span className="text-sm md:text-base">LinkedIn</span>
            </a>
            <a
              href="https://github.com/jvenchy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-bold text-theme transition-all duration-200 hover:underline"
            >
              <FaGithub className="text-lg md:text-xl" />
              <span className="text-sm md:text-base">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}