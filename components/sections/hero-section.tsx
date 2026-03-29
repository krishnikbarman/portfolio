'use client';

import { ChevronDown, Download } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300 scroll-mt-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(51, 65, 85, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(51, 65, 85, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />

        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-cyan-400/10 dark:bg-cyan-400/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-3xl"
          style={{
            animation: 'float 5s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center z-10">
        {/* Profile Photo */}
        <div className="mb-6 animate-slideInUp opacity-0" data-animation-delay="0">
          <div className="flex justify-center">
            <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden ring-4 ring-cyan-400 ring-offset-4 ring-offset-slate-950 dark:ring-offset-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105 transition-transform duration-300 group">
              <img
                src="/profile.jpg"
                alt="Krishnik Barman"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  if (e.currentTarget.nextElementSibling) {
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                  }
                }}
              />
              <div className="hidden w-full h-full bg-cyan-900 text-cyan-300 flex items-center justify-center text-3xl font-bold">
                KB
              </div>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <p className="text-cyan-600 dark:text-cyan-400 text-lg font-semibold mb-2 animate-slideInUp opacity-0" data-animation-delay="1">
          Hi, I'm
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mt-2 animate-slideInUp opacity-0"
          data-animation-delay="2"
        >
          <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Krishnik Barman
          </span>
        </h1>

        {/* Title */}
        <h2
          className="text-lg md:text-2xl text-slate-700 dark:text-slate-200 font-semibold mt-4 animate-slideInUp opacity-0"
          data-animation-delay="3"
        >
          Full-Stack / Frontend Developer
        </h2>

        {/* Subtitle */}
        <p
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-4 animate-slideInUp opacity-0"
          data-animation-delay="4"
        >
          Building clean, scalable, and user-focused digital products with React, PHP, and modern web technologies.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-slideInUp opacity-0"
          data-animation-delay="5"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/50"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-cyan-500 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 dark:hover:bg-cyan-400/10 transition-all duration-300"
          >
            Contact Me
          </button>
          <a
            href="/Krishnik_Barman_Resume.pdf"
            download
            className="px-8 py-3 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ animationDelay: '1s' }}
        >
          <ChevronDown size={24} className="text-cyan-500 dark:text-cyan-400" />
        </div>
      </div>
    </section>
  );
}
