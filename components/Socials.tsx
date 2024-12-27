// components/Socials.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Socials() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 bg-gradient-to-r from-green-200 to-blue-200">
      <h2 className="text-8xl font-bold text-theme mb-12">Socials.</h2>
      <div className="font-mono text-black space-y-8">
        <a 
          href="https://github.com/jvenchy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-theme transition-colors"
        >
          <FaGithub size={24} />
          <span>github.com/jvenchy</span>
        </a>
        
        <a 
          href="https://linkedin.com/in/joshshergill" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-4 hover:text-theme transition-colors"
        >
          <FaLinkedin size={24} />
          <span>linkedin.com/in/joshshergill</span>
        </a>
        
        <a 
          href="mailto:josh.shergill@mail.utoronto.ca"
          className="flex items-center gap-4 hover:text-theme transition-colors"
        >
          <FaEnvelope size={24} />
          <span>josh.shergill@mail.utoronto.ca</span>
        </a>

        <div className="flex items-center gap-4">
          <FaPhone size={24} />
          <span>206-518-7279</span>
        </div>

      </div>
    </div>
  );
}