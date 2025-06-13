import React from 'react';
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PersonalInterests() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section id="personal-life" className="h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg px-4 md:px-8">
        <div className="font-helvetica tracking-tighter" ref={titleRef}>
          {titleVisible && (
            <BlurText
              text="🏂 other stuff 🏔️💿"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl font-bold mb-12 text-white text-center"
            />
          )}
        </div>

        <div ref={contentRef} className="text-sm md:text-lg ml-12 mr-12">
          {contentVisible && (
            <>
              <p className="mb-8 font-mono text-white text-left">
                When I'm not coding, you can find me on the basketball court or in my home studio producing music.
              </p>
              <p className="mb-8 font-mono text-white text-left">
                I live in Seattle, Washington and also love hiking, lifting weights, and snowboarding.
              </p>
              <div className="mb-8 font-mono text-white text-left">
                <span>Check out my beats at<a 
                  href="https://soundcloud.com/northcedar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-all duration-500 text-theme hover:text-themedark hover:underline ml-2"
                >
                  soundcloud.com/northcedar
                </a> & drop a follow!</span>
                
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}