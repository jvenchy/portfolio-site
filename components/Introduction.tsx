import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayText('');
    setIsTypingComplete(false);

    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return [displayText, isTypingComplete];
};

export default function Introduction() {
  const [phase, setPhase] = useState(1);
  const [displayText, isTypingComplete] = useTypewriter(
    phase === 1 ? "Hi there!" : "My Name's Josh.",
    25
  );
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setIsCursorVisible((prev) => !prev);
    }, 300); // Blink interval

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (phase === 1 && isTypingComplete) {
      setTimeout(() => setPhase(2), 2000); // 1-second pause before next phase
    }
  }, [phase, isTypingComplete]);

  return (
    <section
      id="introduction"
      className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-200 to-blue-200"
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/4 mt-8 md:mt-0 md:-mr-8">
          <Image
            src="/picture.jpeg"
            alt="Josh Shergill"
            width={200}
            height={200}
            className="rounded-full object-cover aspect-square overflow-hidden border-4 border-white transition-all duration-500 hover:scale-90 hover:border-theme"
          />
        </div>
        <div className="md:w-3/4">
          <div className="relative">
            <h1 className="text-7xl font-bold mb-4 text-theme flex items-center">
              <span className="whitespace-nowrap">{displayText}</span>
              <span
                className={`inline-block w-1 h-[72px] bg-theme transition-opacity duration-25 ${
                  isCursorVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ marginLeft: '8px', marginTop: '4px', backgroundColor: 'steelblue' }}
              />
            </h1>
          </div>
          <p className="mb-4 font-mono text-black">
            I'm an aspiring software engineer with a passion for full-stack web development, system architecture, and UX. 🌿
          </p>
          <div className="flex flex-row space-x-4 mt-4">
            <a
              href="https://linkedin.com/in/joshshergill"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-bold text-theme transition-all duration-200 hover:underline"
            >
              <FaLinkedin size="1.25rem" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/jvenchy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-bold text-theme transition-all duration-200 hover:underline"
            >
              <FaGithub size="1.25rem" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}