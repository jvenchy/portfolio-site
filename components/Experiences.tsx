"use client";

import React, { useState } from "react";
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Experience = {
  id: number;
  title: string;
  year: string;
  description: string;
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Engineer @ BalanceAI",
    year: "2024",
    description:
      "Worked with Dr. Jang's research lab at UofT to gamify their AI literacy assessment platform for K-12 students, https://balanceai.ca. Increased user engagement by 50% through a new interactive map interface using React states, replacing the original navigation. Optimized backend dashboard functionality to display student data 2x faster from Google Firebase, enhancing accessibility for teachers viewing student data.",
  },
  {
    id: 2,
    title: "Software Developer for LLMs @ DataAnnotation",
    year: "2023 - Present",
    description:
      "Led multiple micro-development projects that advanced artificial intelligence models by utilizing languages/frameworks such as Python, Java, Swift, and React, enhancing my ability to rapidly acquire new technologies and apply innovative solutions. Wrote hundreds of high-quality tests and performed intensive code reviews, thoroughly assessing data points fed to the LLM.",
  },
  {
    id: 3,
    title: "Software Engineering Intern @ Cloptim",
    year: "2023",
    description:
      "Reduced customer business costs by $3,000 through AWS cloud resource utilization optimization. Designed an Apache Spark-based data pipeline from S3, with Databricks warehousing and Spark analytics. Created dynamic data visualization for clients using React.js and HTML/CSS.",
  },
];

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg px-4">
      <div className="font-helvetica tracking-tighter" ref={titleRef}>
        {titleVisible && (
          <BlurText
            text="EXPERIENCE"
            delay={100}
            animateBy="words"
            direction="top"
            className="text-5xl md:text-7xl text-white font-bold mb-12"
          />
        )}
      </div>
      <div ref={contentRef} className="flex flex-col space-y-4 font-mono text-white overflow-x-auto pb-4 ml-16 mr-16">
        {contentVisible && experiences.map((experience, index) => (
          <div
            key={experience.id}
            className="relative w-full bg-white text-black shadow-md rounded-lg p-4 cursor-pointer transition-all duration-500 hover:scale-95 hover:text-theme hover:shadow-lg"
            onClick={() => setSelectedExperience(experience)}
            style={{ 
              animationDelay: `${index * 200}ms`, 
              opacity: contentVisible ? 1 : 0,
              transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease-out'
            }}
          >
            <p className="text-sm text-theme italic mb-2">{experience.year}</p>
            <h3 className="text-lg font-bold mb-2 line-clamp-1">{experience.title}</h3>
            <p className="text-sm text-gray-700 line-clamp-2">{experience.description}</p>
          </div>
        ))}
      </div>

      {/* Modal remains the same */}
      {selectedExperience && (
        <div
          onClick={() => setSelectedExperience(null)}
          className="fixed inset-0 z-50 flex items-center justify-center text-theme bg-white bg-opacity-85 transition-opacity duration-500 ease-in-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-black text-theme font-mono rounded-lg shadow-lg p-6 w-full max-w-md transition-transform duration-500 ease-in-out transform scale-95"
          >
            <button
              onClick={() => setSelectedExperience(null)}
              className="mb-4 px-3 py-1 bg-red-400 text-white hover:px-5 transition-all duration-300 rounded-full hover:bg-red-500"
            >
              X
            </button>
            <h2 className="text-2xl font-bold ml-4 mb-4">{selectedExperience.title}</h2>
            <p className="ml-4 text-theme italic mb-2">{selectedExperience.year}</p>
            <p className="ml-4 mb-4">{selectedExperience.description}</p>
          </div>
        </div>
      )}
      </div>
    </section>
  );
}