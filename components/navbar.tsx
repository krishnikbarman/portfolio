'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(initialDark);
    applyTheme(initialDark);
  }, []);

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-300 dark:border-slate-700/30'
          : 'bg-slate-100 dark:bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-16">
        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => scrollToSection(e, item)}
              className="relative text-sm font-medium transition-colors duration-200 capitalize text-gray-400 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side - Theme Toggle & CTA */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'bg-slate-300 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-400 dark:hover:bg-slate-700'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
            title="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-5 py-2 bg-cyan-400 dark:bg-cyan-400 text-slate-900 rounded-lg font-semibold text-sm hover:bg-cyan-300 dark:hover:bg-cyan-300 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
