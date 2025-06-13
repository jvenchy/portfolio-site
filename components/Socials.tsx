import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Socials() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4">
      <div ref={titleRef}>
        {titleVisible && (
          <BlurText
            text="SOCIALS."
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-7xl font-bold text-white mb-12"
          />
        )}
      </div>
      <div ref={contentRef} className="font-mono text-white space-y-8">
        {contentVisible && (
          <>
            <div style={{ animationDelay: '200ms', opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out 0.2s' }}>
              <a 
                href="https://github.com/jvenchy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-theme transition-colors"
              >
                <FaGithub size={24} />
                <span>github.com/jvenchy</span>
              </a>
            </div>
            
            <div style={{ animationDelay: '400ms', opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out 0.4s' }}>
              <a 
                href="https://linkedin.com/in/joshshergill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-theme transition-colors"
              >
                <FaLinkedin size={24} />
                <span>linkedin.com/in/joshshergill</span>
              </a>
            </div>
            
            <div style={{ animationDelay: '600ms', opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out 0.6s' }}>
              <a 
                href="mailto:josh.shergill@mail.utoronto.ca"
                className="flex items-center gap-4 hover:text-theme transition-colors"
              >
                <FaEnvelope size={24} />
                <span>josh.shergill@mail.utoronto.ca</span>
              </a>
            </div>

            <div style={{ animationDelay: '800ms', opacity: contentVisible ? 1 : 0, transform: contentVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out 0.8s' }}>
              <div className="flex items-center gap-4">
                <FaPhone size={24} />
                <span>206-518-7279</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}