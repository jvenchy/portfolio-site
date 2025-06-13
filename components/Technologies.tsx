import Link from 'next/link';
import React from 'react';
import GlareHover from './GlareHover';
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Technologies() {
  const [titleRef, titleVisible] = useScrollAnimation();

  return (
    <section id="technologies" className="h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg px-4">
        <div className="font-helvetica tracking-tighter" ref={titleRef}>
          {titleVisible && (
            <BlurText
              text="TECHNOLOGIES"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl font-bold text-white mb-12"
            />
          )}
        </div>
        
        {/* Mosaic of Skill Logos */}
        <div className="ml-12 mr-12 mb-8 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4 mt-6">
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
              <GlareHover
                width="100%"
                height="100%"
                background="rgba(255, 255, 255, 0.05)"
                borderRadius="16px"
                borderColor="rgba(255, 255, 255, 0.1)"
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={150}
                transitionDuration={700}
                playOnce={false}
                className="beveled-tile"
                style={{ 
                  minHeight: '80px',
                  aspectRatio: '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  boxShadow: `
                    inset 0 1px 0 rgba(255, 255, 255, 0.2),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                    inset 1px 0 0 rgba(255, 255, 255, 0.1),
                    inset -1px 0 0 rgba(0, 0, 0, 0.1),
                    0 4px 20px rgba(0, 0, 0, 0.3),
                    0 2px 8px rgba(0, 0, 0, 0.2)
                  `,
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none"></div>
                <img
                  src={src}
                  alt={alt}
                  className="object-contain w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 relative z-10 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </GlareHover>
              
              {/* Hover enhancement */}
              <style jsx>{`
                .group:hover .beveled-tile {
                  transform: translateY(-2px);
                  box-shadow: 
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.3),
                    inset 1px 0 0 rgba(255, 255, 255, 0.2),
                    inset -1px 0 0 rgba(0, 0, 0, 0.2),
                    0 8px 30px rgba(0, 0, 0, 0.4),
                    0 4px 12px rgba(0, 0, 0, 0.3),
                    0 0 20px rgba(82, 39, 255, 0.2) !important;
                  border-color: rgba(255, 255, 255, 0.25);
                  background: rgba(255, 255, 255, 0.08);
                }
              `}</style>
            </div>
          ))}
        </div>

        {/* Resume Link */}
        <p className="mt-12 font-mono text-white text-center">
          💡 See more on my{' '}
          <Link href="/resume">
            <span className="transition-all duration-500 text-theme hover:underline hover:text-themedark cursor-pointer">Resume</span>
          </Link>
          !
        </p>
      </div>
    </section>
  );
}