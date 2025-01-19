import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 to-blue-100">
      <h2 className="text-5xl md:text-7xl font-bold text-theme mb-12">Technologies 🌴</h2>
        {/* Mosaic of Skill Logos */}
        <div className="ml-12 mr-12 mb-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-6 mt-6 text-theme">
          {[
            { src: "/skills-logos/java.png", alt: "Java" },
            { src: "/skills-logos/python.png", alt: "Python" },
            { src: "/skills-logos/swift.png", alt: "Swift" },
            { src: "/skills-logos/typescript.png", alt: "TypeScript" },
            { src: "/skills-logos/c.png", alt: "C" },
            { src: "/skills-logos/postgresql.png", alt: "PostgreSQL" },
            { src: "/skills-logos/javascript.png", alt: "JavaScript" },
            { src: "/skills-logos/r.png", alt: "R" },
            { src: "/skills-logos/pandas.png", alt: "Pandas" },
            { src: "/skills-logos/react.png", alt: "React" },
            { src: "/skills-logos/nextjs.png", alt: "Next.js" },
            { src: "/skills-logos/svelte.png", alt: "Svelte" },
            { src: "/skills-logos/nodejs.png", alt: "Node.js" },
            { src: "/skills-logos/docker.png", alt: "Docker" },
            { src: "/skills-logos/tailwind.png", alt: "Tailwind" },
            { src: "/skills-logos/aws.png", alt: "AWS" },
            { src: "/skills-logos/gcp.png", alt: "GCP" },
            { src: "/skills-logos/mongo.png", alt: "MongoDB" },
          ].map(({ src, alt }, index) => (
            <div key={index} className="relative group">
              <img
                src={src}
                alt={alt}
                className="object-contain w-full h-8 md:h-8 lg:h-12 xl:h-16 transition-all duration-200 group-hover:scale-125"
              />
            </div>
          ))}
        </div>

        {/* Resume Link */}
        <p className="mt-12 font-mono text-black">
        💡 See more on my{' '}
          <Link href="/resume">
            <span className="transition-all duration-500 text-theme hover:underline hover:text-themedark cursor-pointer">Resume</span>
          </Link>
          !
        </p>
    </section>
  );
}