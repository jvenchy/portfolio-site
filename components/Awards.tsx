import Image from 'next/image';
import React from 'react';
import BlurText from './BlurText';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Awards() {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg px-4">
        <div className="font-helvetica tracking-tighter" ref={titleRef}>
          {titleVisible && (
            <BlurText
              text="AWARDS"
              delay={100}
              animateBy="words"
              direction="top"
              className="text-5xl md:text-7xl font-bold text-white mb-4"
            />
          )}
        </div>
        <div ref={contentRef} className="font-mono text-white">
          {contentVisible && (
            <>
              <BlurText
                text="Amazon Web Services x UofT Hackathon, First Place 🏆"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-lg md:text-2xl font-bold mb-2"
              />
              <BlurText
                text="November 29th, 2024"
                delay={300}
                animateBy="words"
                direction="top"
                className="text-xs md:text-sm mb-4"
              />
              <a href="https://hackstudentlife.ca/">
                <Image
                  src="/hackathon-banner.png"
                  alt="AWS x UofT Hackathon Award"
                  width={500}
                  height={500}
                  className="rounded-lg mb-4 transition-all duration-500 hover:scale-95"
                />
              </a>
              <div className="text-xs md:text-base mr-8 ml-2">
                <a href="https://devpost.com/software/eventuary" className="transition-all duration-500 text-theme hover:text-themedark hover:underline">
                  Click Here To View Project's DevPost
                </a>
                <p className="mt-4">
                  My teammates and I created a web app that lets University of Toronto students register for school events that match their interests by using personalized recommendations and scraping from several different event websites. It's employed with AWS Architecture like Lambda, DynamoDB, Bedrock, Kendra, and Cognito.
                </p>
                <p className="mt-4">
                  I led cloud architecture design decisions and developed the entire front-end web application. It was a great time learning to use Amazon Web Services while having actual solution architects on standby (thank god for y'all).
                </p>
                <p className="mt-4">
                  After posting about this experience and meeting a Rotman Commerce student just as passionate about creating a consolidated campus event platform as I was, this project evolved into <a href="https://saycamel.com" className="transition-all duration-500 text-theme hover:text-themedark hover:underline">Camel</a>!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}