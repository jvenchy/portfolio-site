import React from 'react';

export default function PersonalInterests() {
  return (
    <section id="personal-life" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 to-blue-100">
      <div className="w-full max-w-screen-lg px-4 md:px-8">
        <h2 className="text-8xl font-bold mb-12 text-theme text-center">🏂 Other Stuff 🏔️💿</h2>

        <p className="mb-8 font-mono text-black text-center">
          When I'm not coding, you can find me on the{' '}
          basketball court{' '}
          or in my home studio{' '}
          producing music.
        </p>

        <p className="mb-8 font-mono text-black text-center">
          I live in Seattle, Washington and also love hiking, lifting weights, and snowboarding.</p>

        <p className="mb-8 font-mono text-black text-center">
          Check out my beats at{' '}
          <a 
            href="https://soundcloud.com/northcedar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-all duration-500 text-theme hover:text-themedark hover:underline"
          >
            soundcloud.com/northcedar
          </a>{' '}
          & drop a follow!
        </p>
      </div>
    </section>
  );
}