"use client";

import React, { useState, useEffect } from "react";
import { FaBriefcase, FaCalendarAlt, FaTimes, FaBuilding, FaChevronRight } from 'react-icons/fa';
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Experience = {
  id: number;
  title: string;
  company: string;
  year: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'part-time' | 'internship' | 'contract';
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "Department of Computer Science @ UofT, SDS Team",
    year: "May 2025 - Present",
    duration: "2+ months",
    type: "part-time",
    description:
      "Developing and enhancing educational technology tools for computer science education, with a focus on improving learning experiences for novice Python programmers.",
    achievements: [
      "Developing and enhancing a TypeScript-based memory visualization library used by CS educators",
      "Improving tooling and UX for novice Python learners",
      "Executing a high quality CI/CD workflow with automated testing",
      "Implementing extensive code coverage analysis"
    ],
    technologies: ["TypeScript", "Python", "CI/CD", "Testing", "Educational Technology", "UX Design"]
  },
  {
    id: 2,
    title: "Software Engineer Research Intern",
    company: "Ontario Institute for Studies in Education @ UofT",
    year: "Sept. 2024 - Dec. 2024",
    duration: "4 months",
    type: "internship",
    description:
      "Worked on educational technology research focusing on user engagement and backend optimization for student assessment platforms.",
    achievements: [
      "Increased user engagement by 50% through a redesigned interactive map interface using new React states",
      "Optimized backend dashboard functionality to display student data 2x faster from Google Firebase",
      "Enhanced accessibility for teachers viewing student data on https://balanceai.ca"
    ],
    technologies: ["React", "Google Firebase", "UI/UX Design", "Backend Optimization", "Educational Technology"]
  },
  {
    id: 3,
    title: "Software QA Dev",
    company: "DataAnnotation",
    year: "Dec. 2023 - May 2025",
    duration: "1+ years",
    type: "contract",
    description:
      "Led quality assurance and development projects for cutting-edge AI systems, focusing on comprehensive testing and code review processes for large language models.",
    achievements: [
      "Wrote high-quality tests and intensive code quality assurance reviews",
      "Thoroughly assessed data fed to LLMs for quality assurance",
      "Led multiple micro-development projects advancing cutting-edge large language models",
      "Worked on agentic AI such as Google's Jules, utilizing various languages/frameworks"
    ],
    technologies: ["Python", "AI/ML", "LLM Development", "Testing", "Quality Assurance", "Multiple Programming Languages"]
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Cloptim",
    year: "Jun. 2023 - Aug. 2023",
    duration: "3 months",
    type: "internship",
    description:
      "Focused on cloud optimization and data analytics, delivering significant cost savings through AWS resource optimization and building scalable data processing pipelines.",
    achievements: [
      "Designed AWS cloud optimization strategies reducing client costs by $3,000+",
      "Built Apache Spark analytics pipelines processing 1TB+ client data daily",
      "Enabled real-time business insights via React dashboards",
      "Implemented data-driven resource allocation strategies"
    ],
    technologies: ["AWS", "Apache Spark", "React", "Data Analytics", "Cloud Optimization", "Big Data"]
  }
];

const getTypeColor = (type: Experience['type']) => {
  switch (type) {
    case 'part-time':
      return 'from-green-500 to-emerald-500';
    case 'internship':
      return 'from-blue-500 to-cyan-500';
    case 'contract':
      return 'from-purple-500 to-orange-500';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const getTypeLabel = (type: Experience['type']) => {
  switch (type) {
    case 'part-time':
      return 'Part Time';
    case 'internship':
      return 'Internship';
    case 'contract':
      return 'Contract';
    default:
      return 'Position';
  }
};

const ExperienceCard: React.FC<{ 
  experience: Experience; 
  onClick: () => void;
  index: number;
  isVisible: boolean;
}> = ({ experience, onClick, index, isVisible }) => {
  return (
    <div
      className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 cursor-pointer font-helvetica tracking-tighter transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-1"
      onClick={onClick}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
      }}
    >
      {/* Type Badge
      <div className="absolute top-4 right-4">
        <div className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(experience.type)} text-white text-xs font-bold rounded-full`}>
          {getTypeLabel(experience.type)}
        </div>
      </div> */}

      {/* Company Icon */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 backdrop-blur-md bg-white/10 rounded-xl">
          <FaBuilding className="text-xl text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
            {experience.title}
          </h3>
          <p className="text-purple-300 font-semibold">{experience.company}</p>
        </div>
      </div>

      {/* Duration Info */}
      <div className="flex items-center space-x-4 mb-4 text-gray-300">
        <div className="flex items-center space-x-2">
          <FaCalendarAlt className="text-sm" />
          <span className="text-sm">{experience.year}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaBriefcase className="text-sm" />
          <span className="text-sm">{experience.duration}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
        {experience.description}
      </p>

      {/* Technologies Preview */}
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.technologies.slice(0, 3).map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20"
          >
            {tech}
          </span>
        ))}
        {experience.technologies.length > 3 && (
          <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20">
            +{experience.technologies.length - 3} more
          </span>
        )}
      </div>

      {/* Click to expand hint */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">Click to view details</span>
        <FaChevronRight className="text-gray-400 text-sm group-hover:translate-x-1 transition-transform duration-300" />
      </div>

      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-700" />
    </div>
  );
};

const ExperienceModal: React.FC<{ 
  experience: Experience; 
  onClose: () => void;
  isOpen: boolean;
}> = ({ experience, onClose, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 font-helvetica tracking-tighter flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-500 slide-in-from-bottom-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-purple-600/20 to-orange-600/20 p-8 border-b border-white/10">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 backdrop-blur-md bg-black/30 hover:bg-black/50 border border-white/20 rounded-full text-white hover:text-red-400 transition-all duration-300 group"
            >
              <FaTimes className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            .
            <div className="absolute top-6 left-6">
              <div className={`px-4 py-2 bg-gradient-to-r ${getTypeColor(experience.type)} text-white text-sm font-bold rounded-full`}>
                {getTypeLabel(experience.type)}
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                {experience.title}
              </h1>
              <h2 className="text-xl text-purple-300 font-semibold mb-4">
                {experience.company}
              </h2>
              <div className="flex items-center space-x-6 text-gray-200">
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt />
                  <span>{experience.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaBriefcase />
                  <span>{experience.duration}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">About This Role</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {experience.description}
              </p>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-orange-600/20 border border-purple-500/30 text-white rounded-lg font-medium hover:from-purple-600/30 hover:to-orange-600/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Experiences() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <div className="w-full max-w-5xl mx-auto px-6">
        {/* Title */}
        <div className="text-center" ref={titleRef}>
          {titleVisible && (
            <BlurText
              text="EXPERIENCE"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl text-white font-bold mb-6"
            />
          )}
          <div className="mt-8 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Professional experiences that have shaped my journey as a software engineer, 
              from AI research to cloud optimization and full-stack development.
            </p>
          </div>
        </div>

        {/* Experiences Grid */}
        <div ref={contentRef}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                onClick={() => setSelectedExperience(experience)}
                index={index}
                isVisible={contentVisible}
              />
            ))}
          </div>
        </div>

        {/* Modal */}
        <ExperienceModal
          experience={selectedExperience!}
          onClose={() => setSelectedExperience(null)}
          isOpen={!!selectedExperience}
        />
      </div>
    </section>
  );
}