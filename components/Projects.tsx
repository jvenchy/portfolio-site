"use client";

import React, { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaLink } from 'react-icons/fa';
import Image from 'next/image';

type Project = {
  id: number;
  tech: string;
  title: string;
  year: string;
  imagelink: string; // images will be in public/projectImages/
  description: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    id: 1,
    imagelink: "/project-images/1.png",
    title: "Social Media & Code Execution Platform",
    tech: "Next.js, React, Tailwind, Docker, SQLite",
    year: "10/2024",
    description:
      "Implemented real-time code execution across various languages, saving and viewing code snippets, creating blog posts with code templates, account creation, and commenting and voting on posts, all using a Monorepo strategy. All done through custom API endpoints for each individual task. Then, created responsive and dynamic front-end with dark mode capabilities and an engaging yet simplistic interface. See more on the Github.",
    githubLink: "https://github.com/jvenchy/scriptorium",
  },
  {
    id: 2,
    imagelink: "/project-images/2.png",
    title: "Ingredient and Diet-based Recipe Finder for MacOS",
    tech: "Swift",
    year: "06/2024",
    description:
      "Leveraged Alamofire and the Spoonacular API for recipe recommendation data, efficient networking, and API integration in a MacOS application.",
    githubLink: "https://github.com/jvenchy/Ingreedy-Recipe-Finder-MacOS",
  },
  {
    id: 3,
    imagelink: "/project-images/3.png",
    title: "BalanceAI: K-12 Literacy Assessment Platform",
    tech: "React, TypeScript, Google Firebase",
    year: "09/2024",
    description:
      "As a part of my internship, I worked on BalanceAI: a web-based literacy assessment platform for grade 1-6 students that utilizes AI in assessing oral production, reading, and writing skills. This project is for the Research lab at the Department of Applied Psychology & Human Development in OISE. Since BalanceAI is an existing web-based product, we built over it by adding a gamification component, improving the website robustness and data handling, and enhanced the user interface.",
    githubLink: "https://balanceai.ca",
  },
  {
    id: 4,
    imagelink: "/project-images/4.png",
    title: "Shell Command Language Interpreter",
    tech: "Objective-C",
    year: "01/2024",
    description:
      " Implemented interactive and scriptable shell functionalities, allowing for command line arguments and stdin/stdout/stderr interactions. Enabled the execution of executables through system calls such as `fork`, `exec`, and `wait`, ensuring compatibility with commands like `cd`, `ls`, `mkdir` and others. Incorporated advanced features like custom `PATH` handling, variable assignments, and processing of commands from script files",
    githubLink: "hhttps://github.com/jvenchy/cscshell",
  },
  {
    id: 5,
    imagelink: "/project-images/5.png",
    title: "Eventuary: Personalized Events for UofT students",
    tech: "React, Next.js, JavaScript, AWS",
    year: "11/2024",
    description: "Hackathon Project. See https://devpost.com/software/eventuary or the Awards section for more info",
    githubLink: "https://github.com/jvenchy/eventuary",
  },
  {
    id: 6,
    imagelink: "/project-images/6.png",
    title: "American Sign Language Detection with ML",
    tech: "Python, YOLOv5, PyTorch",
    year: "08/2024",
    description: "For this project I used YOLOv5 and PyTorch to train a custom model on a dataset of 120 images, each labeled with one of six common signs from American Sign Language (ASL). The actual training data is not provided in this github repository, but the metrics (and some images) from the most recent training run of 500 iterations is available to see in the env7 folder. Currently, the model struggles with differentiating 'Please' and 'Sorry', as well as 'Hello' and 'I Love You' to a lesser extent.",
    githubLink: "https://github.com/jvenchy/AmericanSignLanguage-Detection-with-YOLOv5",
  },
  {
    id: 7,
    imagelink: "/project-images/7.png",
    title: "Breast Cancer Classifier through ML",
    tech: "Java",
    year: "2021",
    description:
      "The project focuses on accurately classifying cell clumps as either malignant or benign based on their features. I developed a breast cancer classifier using the kNN algorithm. Key Features: Distance calculation between data points. Nearest neighbor search to find K closest neighbors. Classification of instances as benign (2) or malignant (4) based on neighbor labels. Accuracy calculation and result presentation. Visualization of distances between training data instances.",
    githubLink: "https://github.com/jvenchy/breast-cancer-classifier",
  },
  {
    id: 8,
    imagelink: "/project-images/8.png",
    title: "Pokemon Trading Card & Battle Simulator",
    tech: "Java, JSwing",
    year: "10/2023",
    description:
      "Engineered a comprehensive software for Pokémon card enthusiasts, integrating collection, deck building, and trading functionalities. Proficiently used the Git terminal, merged and pulled branch requests, and performed code reviews on Github. Utilized API calls for obtaining and using a database of over 15,000 cards. Emphasized Clean Architecture and SOLID to create a robust and scalable design, iterated on and resolved design with UofT professor consultations.",
    githubLink: "https://github.com/jvenchy/Pokemon-Battle-Simulator",
  },
  {
    id: 9,
    imagelink: "/project-images/9.png",
    title: "Map Navigation Routing & Transportation Calculator",
    tech: "Swift",
    year: "07/2024",
    description:
      "Simple map routing application. Enter source and destination coordinates and see distance and time between them based on different transportation types: driving, walking, and even biking.",
    githubLink: "https://github.com/jvenchy/map-router-with-swift",
  },
  {
    id: 10,
    imagelink: "/project-images/10.png",
    title: "Image's Dominant Color Extractor",
    tech: "Python, Flask",
    year: "08/2024",
    description:
      "Coded using the Flask web framework for Python. Also used Numpy, SciKit, and Pillow. Used the K-Means algorithm for determining dominant color.",
    githubLink: "https://github.com/jvenchy/Dominant-Color-Extraction-Flask-Python",
  },
  {
    id: 11,
    imagelink: "/project-images/11.png",
    title: "Figma Designs for EventBox: A Card-Based Event Application",
    tech: "Figma",
    year: "10/2024",
    description:
      "Created Figma mockup designs for a website that simplifies finding clubs for college students. Prioritized a simplistic and trendy design that resonated with college students.",
    githubLink: "https://www.figma.com/design/WE0JkxXU8rQZSYgqMCmKAU/eventPill?node-id=0-1&p=f&t=k7ft0ZQ1ny4zkiT6-0",
  },
  {
    id: 12,
    imagelink: "/project-images/12.png",
    title: "Web-Based Ingredient and Diet-based Recipe Finder",
    tech: "React, Tailwind, Next.js",
    year: "11/2024",
    description:
      "I got the idea by remembering I had made a similar recipe finder using the Spoonacular API in XCode using Swift. This time, I wanted to create something that could be deployed to the web. This version of Ingreedy uses the same API with a different interface and web deployment through React-based Next.js.",
    githubLink: "https://github.com/jvenchy/assignment-2-ai-app-jvenchy",
  },
  {
    id: 13,
    imagelink: "/project-images/13.png",
    title: "iOS App Figma Designs for Alarm Clock app",
    tech: "Figma",
    year: "10/2024",
    description:
      "Created Figma mockup designs for my UI/UX class in college. The app is a cute cartoon dog companion that wakes you up in the morning by making you scan your bed. Figma link provided.",
    githubLink: "https://www.figma.com/design/1Rv1eSlyWcbNmG1p4HcKGY/Clark?node-id=1669-162202&t=DxwcgqUeOlcVwmjy-1",
  },

];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ProjectCard: React.FC<{ project: Project; onClick: (event: React.MouseEvent<HTMLDivElement>) => void }> = ({ project, onClick }) =>(
  <div
    className="scale-95 bg-gradient-to-r from-green-400 to-blue-400 text-white font-mono rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:opacity-90 hover:scale-100"
    onClick={onClick}
  >
    <div className="h-72 relative">
      <Image src={project.imagelink || "/placeholder.svg"} alt={project.title} layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-gray-600">{project.tech}</p>
    </div>
  </div>
);

const ProjectPopup: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => (
  <div className="mt-10 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative bg-gradient-to-r from-green-400 to-blue-400 text-white font-mono rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
    >
      <button
        onClick={() => onClose()}
        className="absolute top-4 right-4 mb-4 px-3 py-1 bg-red-400 text-white transition-all duration-300 rounded-full hover:bg-red-500"
      >
        x
      </button>
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-lg text-gray-700 mb-2">{project.tech}</p>
      <p className="text-md text-gray-600 mb-4">{project.year}</p>
      <div className="mb-4 h-64 relative">
        <Image src={project.imagelink || "/placeholder.svg"} alt={project.title} fill style={{ objectFit: "cover" }} />

      </div>
      <p className="text-gray-800 mb-4">{project.description}</p>
      <a
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-all duration-500 inline-flex items-center text-white hover:underline hover:text-theme"
      >
        <FaLink size={16} className="mr-2" />
         View Project
      </a>
    </div>
  </div>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 to-blue-100 py-16">
      <h2 className="text-6xl md:text-7xl text-theme font-bold mb-12">My Projects 🛠️</h2>

      <div className="w-full max-w-7xl px-4">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </Carousel>
      </div>

      {selectedProject && <ProjectPopup project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
