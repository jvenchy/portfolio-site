"use client";

import React from 'react';
import Navbar from "../../components/Navbar";
import { useEffect, useState, useRef } from "react";

export default function Resume() {
  const [activeSection, setActiveSection] = useState("resume");
  const sections = ["resume"];
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="pt-16 container mx-auto px-4">
        {/* Download Link */}
        
        {/* Embedded PDF */}
        <div className="max-w-2xl mx-auto aspect-[8.5/11] mb-4">
          <object
            data="/resume.pdf"
            type="application/pdf"
            className="w-full h-full rounded-lg shadow-lg"
          >
            <p>
              Your browser does not support PDFs.
              <a href="/resume.pdf" className="text-theme hover:underline">
                Download the PDF
              </a>
            </p>
          </object>
        </div>

        <div className="text-center py-8">
          <a 
            href="/resume.pdf" 
            download
            className="text-xl font-mono text-white hover:text-themedark hover:underline transition-colors"
          >
            alternate download link
          </a>
        </div>
      </div>

      {/* <div className="fixed top-1/2 transform -translate-y-1/2 right-8 flex flex-col space-y-2 z-50">
        {sections.map((section) => (
          <div
            key={section}
            className={`w-4 h-4 rounded-full transition-colors duration-700 ${
              activeSection === section ? "bg-theme" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div> */}
    </main>
  );
}