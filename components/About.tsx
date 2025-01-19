import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 to-blue-100">
      <h2 className="text-5xl md:text-7xl font-bold text-theme mb-12 mr-10 ml-10">About Me.</h2>
        <div>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black text-sm md:text-base"> ⛳️ Adaptive, Creatively Motivated, and Goal Oriented </p>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black text-sm md:text-base">📍 University of Toronto - Toronto, Canada 🇨🇦</p>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black text-sm md:text-base">🖥️ Computer Science Major, Statistics Minor 📊</p>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black text-sm md:text-base">🎓 Junior Year / Graduating in 2026</p>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black text-sm md:text-base">🏆 2x Hackathon Winner</p>
        </div>
    </section>
  );
}