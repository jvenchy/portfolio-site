import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleNavbar}
        className="fixed top-6 left-6 z-50 p-3 rounded-lg backdrop-blur-md bg-black/20 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 group"
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <Menu 
            className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
              isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
            }`} 
          />
          <X 
            className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
              isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
            }`} 
          />
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleNavbar}
      />

      {/* Sidebar Navigation */}
      <nav
        className={`fixed top-0 left-0 h-full w-80 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full backdrop-blur-xl bg-black/40 border-r border-white/10">
          {/* Header */}
          <div className="p-8 border-b border-white/10">
            <h2 className="text-2xl text-center font-helvetica tracking-tighter font-bold text-white tracking-tight">
              NAVIGATION
            </h2>
          </div>

          {/* Navigation Links */}
          <div className="p-6">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={toggleNavbar}
                    className="group flex items-center font-mono px-4 py-3 text-gray-300 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5 border border-transparent hover:border-white/10"
                    style={{
                      animationDelay: isOpen ? `${index * 50}ms` : "0ms"
                    }}
                  >
                    <span className="text-lg font-medium tracking-wide">
                      {item.label}
                    </span>
                    <div className="ml-auto w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#5227FF] to-[#7cff67] transition-all duration-300 rounded-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/joshshergill"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/jvenchy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;