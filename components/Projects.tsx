"use client";

import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCalendarAlt, FaCode } from 'react-icons/fa';
import Image from 'next/image';
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type Project = {
  id: number;
  tech: string;
  title: string;
  year: string;
  imagelink: string;
  description: string;
  githubLink: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 14,
    imagelink: "/project-images/14.png",
    title: "Campus Event Discovery Platform",
    tech: "Next.js, React, Tailwind, Docker, SQLite",
    year: "1/2025 - Present",
    description:
      "This is Camel. I engineered a machine learning recommendation engine with TF-IDF vectorization and category-aware similarity scoring, featuring real-time preference learning from user interactions, achieving average accuracy of 92%. I also implemented secure JWT authentication, account personalization, and calendar integration to create the perfect solution to finding campus events - one that can currently serve 10,000+ university students. I automated a data pipeline using Selenium, Apify and Gemini API for scraping and enriching 200+ events daily.",
    githubLink: "https://saycamel.com",
    featured: true,
  },
  {
  id: 16,
  imagelink: "/project-images/16.png",
  title: "SmartCircles: AI-Powered Social Shopping Platform",
  tech: "Vite, React, TypeScript, OpenAI API, Neo4j, OpenCage API",
  year: "12/2024",
  description: "Hackathon project for no name hacks: an AI platform that transforms individual grocery shopping into collaborative community experiences. Built an intelligent circle formation algorithm using Haversine distance calculations and life-stage classification via OpenAI to automatically group neighbors with similar shopping patterns. Implemented weekend cash challenges with real money rewards, group discount engines, and dynamic circle rebalancing as users' life stages evolve. Features comprehensive transaction analysis, geocoding integration with OpenCage API, and a mobile-responsive interface. Created for Loblaw's corporate hackathon addressing social commerce and healthy spending habits.",
  githubLink: "https://github.com/jvenchy/smart-circle-savings-flow",
  featured: true
  },
  {
    id: 15,
    imagelink: "/project-images/15.png",
    title: "Stopwatch-Powered Pay Logger",
    tech: "Swift",
    year: "3/2025",
    description:
    "I was working as a contract developer and needed a good way to log my time and know how much I was making at the same time. A MacOS application, it uses local memory to track and store your payouts even after closing out of the app - no more spreadsheets! Low CPU usage: less than the native stopwatch app! Set your own pay rate. Swap between USD and CAD currencies using an API. Great motivator to keep working",
    githubLink: "https://github.com/jvenchy/MoneyWatch",
    featured: true,
  },
  {
    id: 1,
    imagelink: "/project-images/1.png",
    title: "Social Media & Code Execution Platform",
    tech: "Next.js, React, Tailwind, Docker, SQLite",
    year: "10/2024",
    description: "Implemented real-time code execution across various languages, saving and viewing code snippets, creating blog posts with code templates, account creation, and commenting and voting on posts, all using a Monorepo strategy. All done through custom API endpoints for each individual task. Then, created responsive and dynamic front-end with dark mode capabilities and an engaging yet simplistic interface.",
    githubLink: "https://github.com/jvenchy/scriptorium",
    featured: true,
  },
  {
    id: 2,
    imagelink: "/project-images/6.png",
    title: "American Sign Language Detection with ML",
    tech: "Python, YOLOv5, PyTorch",
    year: "08/2024",
    description: "Used YOLOv5 and PyTorch to train a custom model on a dataset of 120 images, each labeled with one of six common signs from American Sign Language (ASL). The model achieved high accuracy in sign recognition with comprehensive training metrics available.",
    githubLink: "https://github.com/jvenchy/AmericanSignLanguage-Detection-with-YOLOv5",
    featured: true,
  },
  {
    id: 3,
    imagelink: "/project-images/3.png",
    title: "BalanceAI: K-12 Literacy Assessment Platform",
    tech: "React, TypeScript, Google Firebase",
    year: "09/2024",
    description:
      "Web-based literacy assessment platform for grade 1-6 students that utilizes AI in assessing oral production, reading, and writing skills. Built for the Research lab at the Department of Applied Psychology & Human Development in OISE.",
    githubLink: "https://balanceai.ca",
    featured: true,
  },
  {
    id: 4,
    imagelink: "/project-images/4.png",
    title: "Shell Command Language Interpreter",
    tech: "Objective-C",
    year: "01/2024",
    description:
      "Implemented interactive and scriptable shell functionalities, allowing for command line arguments and stdin/stdout/stderr interactions. Enabled execution of executables through system calls such as fork, exec, and wait.",
    githubLink: "https://github.com/jvenchy/cscshell",
  },
  {
    id: 5,
    imagelink: "/project-images/5.png",
    title: "Eventuary: Personalized Events for UofT students",
    tech: "React, Next.js, JavaScript, AWS",
    year: "11/2024",
    description: "Hackathon winning project that creates personalized event recommendations for University of Toronto students. Features intelligent matching and seamless event discovery.",
    githubLink: "https://github.com/jvenchy/eventuary",
  },
  {
    id: 6,
    imagelink: "/project-images/2.png",
    title: "Ingredient and Diet-based Recipe Finder for MacOS",
    tech: "Swift",
    year: "06/2024",
    description:
      "Leveraged Alamofire and the Spoonacular API for recipe recommendation data, efficient networking, and API integration in a MacOS application.",
    githubLink: "https://github.com/jvenchy/Ingreedy-Recipe-Finder-MacOS",
  },
  {
    id: 7,
    imagelink: "/project-images/7.png",
    title: "Breast Cancer Classifier through ML",
    tech: "Java",
    year: "2021",
    description:
      "Developed a breast cancer classifier using the kNN algorithm to accurately classify cell clumps as either malignant or benign based on their features with comprehensive accuracy metrics.",
    githubLink: "https://github.com/jvenchy/breast-cancer-classifier",
  },
  {
    id: 8,
    imagelink: "/project-images/8.png",
    title: "Pokemon Trading Card & Battle Simulator",
    tech: "Java, JSwing",
    year: "10/2023",
    description:
      "Comprehensive software for Pokémon card enthusiasts, integrating collection, deck building, and trading functionalities. Utilized API calls for a database of over 15,000 cards with Clean Architecture principles.",
    githubLink: "https://github.com/jvenchy/Pokemon-Battle-Simulator",
  },
  {
    id: 9,
    imagelink: "/project-images/9.png",
    title: "Map Navigation Routing & Transportation Calculator",
    tech: "Swift",
    year: "07/2024",
    description:
      "Map routing application with source and destination coordinate input, calculating distance and time between locations for different transportation types: driving, walking, and biking.",
    githubLink: "https://github.com/jvenchy/map-router-with-swift",
  },
  {
    id: 10,
    imagelink: "/project-images/10.png",
    title: "Image's Dominant Color Extractor",
    tech: "Python, Flask",
    year: "08/2024",
    description:
      "Web application using Flask framework with Numpy, SciKit, and Pillow libraries. Implements K-Means algorithm for determining dominant colors in uploaded images.",
    githubLink: "https://github.com/jvenchy/Dominant-Color-Extraction-Flask-Python",
  },
  {
    id: 12,
    imagelink: "/project-images/12.png",
    title: "Web-Based Recipe Finder",
    tech: "React, Tailwind, Next.js",
    year: "11/2024",
    description:
      "Web-deployed version of the recipe finder using Spoonacular API with React-based Next.js, featuring ingredient-based recipe discovery and dietary filtering.",
    githubLink: "https://github.com/jvenchy/assignment-2-ai-app-jvenchy",
  },
  {
    id: 13,
    imagelink: "/project-images/13.png",
    title: "iOS App Figma Designs for Alarm Clock app",
    tech: "Figma",
    year: "10/2024",
    description:
      "UI/UX designs for a cute cartoon dog companion alarm app that wakes users by making them scan their bed. Created comprehensive user flow and interaction designs.",
    githubLink: "https://www.figma.com/design/1Rv1eSlyWcbNmG1p4HcKGY/Clark?node-id=1669-162202&t=DxwcgqUeOlcVwmjy-1",
  },
];

const ProjectCard: React.FC<{ 
  project: Project; 
  onClick: () => void;
  index: number;
  isVisible: boolean;
}> = ({ project, onClick, index, isVisible }) => {
  return (
    <div
      className={`group relative font-helvetica tracking-tighter backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:-translate-y-2 ${
        project.featured ? 'ring-2 ring-purple-500/30' : ''
      }`}
      onClick={onClick}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      {/* {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-orange-500 text-white text-xs font-bold rounded-full">
            FEATURED
          </div>
        </div>
      )} */}
      
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={project.imagelink || "/placeholder.svg"} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Hover overlay with tech stack */}
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex items-center space-x-2 text-white">
            <FaCode className="text-sm" />
            <span className="text-sm font-mono truncate">{project.tech}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
            {project.title}
          </h3>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-400 text-sm mb-3">
          <FaCalendarAlt className="text-xs" />
          <span>{project.year}</span>
        </div>
        
        <p className="text-gray-300 text-sm line-clamp-3 leading-relaxed">
          {project.description}
        </p>
        
        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-700" />
      </div>
    </div>
  );
};

const ProjectModal: React.FC<{ 
  project: Project; 
  onClose: () => void;
  isOpen: boolean;
}> = ({ project, onClose, isOpen }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-helvetica tracking-tighter ">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-500 slide-in-from-bottom-10">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="relative h-80">
            <Image 
              src={project.imagelink || "/placeholder.svg"} 
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 backdrop-blur-md bg-black/30 hover:bg-black/50 border border-white/20 rounded-full text-white hover:text-red-400 transition-all duration-300 group"
            >
              <FaTimes className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            
            {/* {project.featured && (
              <div className="absolute top-6 left-6">
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white text-sm font-bold rounded-full">
                  FEATURED PROJECT
                </div>
              </div>
            )} */}
            
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                {project.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-200">
                <div className="flex items-center space-x-2">
                  <FaCalendarAlt className="text-sm" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCode className="text-sm" />
                  <span className="font-mono text-sm">{project.tech}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-4">About This Project</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <FaGithub className="text-lg group-hover:rotate-12 transition-transform duration-300" />
                  <span>View on GitHub</span>
                  <FaExternalLinkAlt className="text-sm opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProjects = filter === 'featured' 
    ? projects.filter(p => p.featured)
    : projects;

  // Dynamic projects per page based on screen size
  const [projectsPerPage, setProjectsPerPage] = useState(6);
  
  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth < 640) {
        setProjectsPerPage(2); // Mobile: 2 rows × 1 column = 2 projects
      } else if (window.innerWidth < 1024) {
        setProjectsPerPage(4); // Tablet: 2 rows × 2 columns = 4 projects
      } else {
        setProjectsPerPage(6); // Desktop: 2 rows × 3 columns = 6 projects
      }
    };

    updateProjectsPerPage();
    window.addEventListener('resize', updateProjectsPerPage);
    return () => window.removeEventListener('resize', updateProjectsPerPage);
  }, []);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(0);
  }, [filter]);

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <div className="w-full max-w-7xl font-helvetica tracking-tighter mx-auto px-6">
        {/* Title */}
        <div className="text-center" ref={titleRef}>
          {titleVisible && (
            <BlurText
              text="PROJECTS"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl text-white font-bold mb-6"
            />
          )}
          <div className="mt-4 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my passion for full-stack development, 
              machine learning, and creating meaningful digital experiences.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px]">
            {currentProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${currentPage}`}
                project={project}
                onClick={() => setSelectedProject(project)}
                index={index}
                isVisible={gridVisible}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center mt-12 space-x-4">
              <button
                onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                disabled={currentPage === 0}
                className="p-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-10 h-10 rounded-xl font-semibold transition-all duration-300 ${
                      currentPage === i
                        ? 'bg-gradient-to-r from-purple-600 to-orange-600 text-white shadow-lg scale-110'
                        : 'backdrop-blur-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                disabled={currentPage === totalPages - 1}
                className="p-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <div className="ml-4 text-sm text-gray-400">
                Page {currentPage + 1} of {totalPages}
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject!}
          onClose={() => setSelectedProject(null)}
          isOpen={!!selectedProject}
        />
      </div>
    </section>
  );
}