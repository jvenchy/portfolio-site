"use client";

import React, { useState } from 'react';
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaTimes, FaAward, FaCalendarAlt } from 'react-icons/fa';

type Award = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  details?: string[];
  logoUrl: string;
  link?: string;
};

const awards: Award[] = [
  {
    id: 1,
    title: "Feb '26 CfE Venture Spotlight Series Recipient",
    issuer: "UofT Centre for Entrepreneurship",
    date: "January 2026",
    description: "Selected as a featured AI/ML student venture by U of T's Centre for Entrepreneurship's newsletter.",
    details: [
      "Featured as Co-Founder & Development Lead of Camel, an event curation platform that leverages AI and machine learning to collect, tag and recommend student events from over 1000 sources.",
      "This exciting venture has been brought to life by a team of over 10 U of T students, showcasing collaborative innovation in the AI/ML space.",
      "Recognized for building scalable technology that serves the University of Toronto student community."
    ],
    logoUrl: "/cfe-logo.png",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7420460183539216384/"
  },
  {
    id: 2,
    title: "Amazon Web Services x UofT Hackathon, First Place 🏆",
    issuer: "Amazon Web Services & University of Toronto",
    date: "November 29th, 2024",
    description: "Won first place in a competitive hackathon focused on AWS cloud architecture and innovative solutions for campus event discovery.",
    details: [
      "My teammates and I created a web app that lets University of Toronto students register for school events that match their interests by using personalized recommendations and scraping from several different event websites. It's employed with AWS Architecture like Lambda, DynamoDB, Bedrock, Kendra, and Cognito.",
      "I led cloud architecture design decisions and developed the entire front-end web application. It was a great time learning to use Amazon Web Services while having actual solution architects on standby (thank god for y'all).",
      "After posting about this experience and meeting a Rotman Commerce student just as passionate about creating a consolidated campus event platform as I was, this project evolved into Camel!"
    ],
    logoUrl: "/hackathon-banner.png",
    link: "https://devpost.com/software/eventuary"
  },
];

const AwardCard: React.FC<{
  award: Award;
  onClick: () => void;
  index: number;
  isVisible: boolean;
}> = ({ award, onClick, index, isVisible }) => {
  return (
    <div
      className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer font-helvetica tracking-tighter transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1"
      onClick={onClick}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
      }}
    >
      {/* Logo/Image */}
      <div className="relative h-48 w-full bg-white/5 overflow-hidden">
        <div
          className="absolute inset-0 brightness-90 contrast-110 transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${award.logoUrl})`,
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.5
        }} />
      </div>

      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 mb-3 line-clamp-2">
          {award.title}
        </h3>

        {/* Issuer & Date */}
        <div className="space-y-2 mb-4 text-gray-300">
          <div className="flex items-center space-x-2">
            <FaAward className="text-sm" />
            <span className="text-sm">{award.issuer}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-sm" />
            <span className="text-sm">{award.date}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
          {award.description}
        </p>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-200 to-white group-hover:w-full transition-all duration-700" />
      </div>
    </div>
  );
};

const AwardModal: React.FC<{
  award: Award;
  onClose: () => void;
  isOpen: boolean;
}> = ({ award, onClose, isOpen }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-helvetica tracking-tighter">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-500 slide-in-from-bottom-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="relative bg-white/5 p-8 border-b border-white/10">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-3 backdrop-blur-md bg-black/30 hover:bg-black/50 border border-white/20 rounded-full text-white hover:text-red-400 transition-all duration-300 group"
            >
              <FaTimes className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Logo */}
            <div className="relative w-full h-32 mb-6 overflow-hidden rounded-lg z-0">
              <div
                className="absolute inset-0 brightness-90 contrast-110"
                style={{
                  backgroundImage: `url(${award.logoUrl})`,
                  backgroundSize: 'auto 100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'repeat'
                }}
              />
              <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                opacity: 0.5
              }} />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                {award.title}
              </h1>
              <h2 className="text-xl text-blue-100 font-semibold mb-4">
                {award.issuer}
              </h2>
              <div className="flex items-center space-x-2 text-gray-200">
                <FaCalendarAlt />
                <span>{award.date}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Description */}
              <div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {award.description}
                </p>
              </div>

              {/* Details */}
              {award.details && (
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Details</h3>
                  <div className="space-y-4">
                    {award.details.map((detail, index) => (
                      <p key={index} className="text-gray-300 leading-relaxed">
                        {detail.includes('Camel!') ? (
                          <>
                            {detail.split('Camel!')[0]}
                            <a href="https://saycamel.com" className="text-blue-100 hover:text-white hover:underline transition-all duration-300">
                              Camel
                            </a>
                            !
                          </>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Link */}
              {award.link && (
                <div className="flex flex-wrap gap-4">
                  <a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-6 py-3 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <span>View More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Awards() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <div className="w-full max-w-5xl font-helvetica tracking-tighter mx-auto px-6">
        {/* Title */}
        <div className="text-center" ref={titleRef}>
          {titleVisible && (
            <>
              <BlurText
                text="awards & recognition"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-7xl text-white font-bold mb-6"
              />
              <p className="mt-4 mb-8 text-white text-sm md:text-lg font-mono text-left">
                a few times people said "hey, what you built is pretty cool" and <span className="text-[#7a9d7e]">gave me something shiny. </span>
              </p>
            </>
          )}
        </div>

        {/* Awards Grid */}
        <div ref={gridRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {awards.map((award, index) => (
              <AwardCard
                key={award.id}
                award={award}
                onClick={() => setSelectedAward(award)}
                index={index}
                isVisible={gridVisible}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        <AwardModal
          award={selectedAward!}
          onClose={() => setSelectedAward(null)}
          isOpen={!!selectedAward}
        />
      </div>
    </section>
  );
}