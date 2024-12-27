import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import the icons

export default function Introduction() {
  return (
    <section id="introduction" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-200 to-blue-200">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/4 mt-8 md:mt-0 md:-mr-8">
          <Image
            src="/picture.jpeg"
            alt="Josh Shergill"
            width={200}
            height={200}
            className="rounded-full object-cover aspect-square overflow-hidden border-4 border-white transition-all duration-500 hover:scale-125 hover:border-theme"
          />
        </div>
        <div className="md:w-3/4">
          <h1 className="text-8xl font-bold mb-4 text-theme">Hi There! I'm Josh.</h1>
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
              <FaLinkedin size="1.25rem" /> {/* LinkedIn icon */}
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/jvenchy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-bold text-theme transition-all duration-200 hover:underline"
            >
              <FaGithub size="1.25rem" /> {/* GitHub icon */}
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
