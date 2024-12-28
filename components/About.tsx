import Link from 'next/link';
import React from 'react';

export default function About() {
  return (
    <section id="about" className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-100 to-blue-100">
      <h2 className="text-7xl font-bold text-theme mb-12">About Me.</h2>
        <div>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black"> ⛳️ Adaptive, Creatively Motivated, and Goal Oriented </p>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black">📍 University of Toronto - Toronto, Canada 🇨🇦</p>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black">🖥️ Computer Science Major, Statistics Minor 📊</p>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black">🎓 Junior Year / Graduating in 2026</p>
          <p className="transition-all duration-200 hover:scale-110 mb-8 font-mono text-black">🏆 2x Hackathon Winner</p>
        </div>
    </section>
  );
}