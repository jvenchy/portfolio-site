import Image from 'next/image'
import React from 'react';

export default function Awards() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="w-full max-w-screen-lg px-4">
      <h2 className="text-7xl font-bold text-theme mb-4">Awards</h2>
      <div className="font-mono text-black">
        <h3 className="text-2xl font-bold mb-2">Amazon Web Services x UofT Hackathon, First Place 🏆</h3>
        <p className="mb-4">November 29th, 2024</p>
        <a href="https://hackstudentlife.ca/"><Image
          src="/hackathon-banner.png"
          alt="AWS x UofT Hackathon Award"
          width={600}
          height={600}
          className="rounded-lg mb-4 transition-all duration-500 hover:scale-110"
        /></a>
        <a href="https://devpost.com/software/eventuary" className="transition-all duration-500 text-theme hover:text-themedark hover:underline">Click Here To View Project's DevPost</a>
        <p className="mt-4">
        My teammates and I created {" "}
        <a 
          href="https://eventuary.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="transition-all duration-500 text-theme hover:underline hover:text-themedark"
        >
        Eventuary
          </a>  - a web app that lets University of Toronto students register for school events that match their interests by using personalized recommendations and scraping from several different event websites. It's employed with AWS Architecture like Lambda, DynamoDB, Bedrock, Kendra, and Cognito. 
        </p>

        <p className="mt-4">
        I led cloud architecture design decisions and developed the entire front-end web application. It was a great time learning to use Amazon Web Services while having actual solution architects on standby (thank god for y'all).
        </p>

        <p className="mt-4">
        As winners, we're currently in talks with UofT faculty in regards to potentially implementing Eventuary into student life!
        </p>
      </div>
      </div>
    </section>
  )
}

