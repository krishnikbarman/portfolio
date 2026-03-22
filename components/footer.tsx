'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-950 border-t border-slate-300 dark:border-slate-700/30 transition-colors duration-300 pb-16 md:pb-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-slate-700 dark:text-slate-400 font-medium text-sm md:text-base">
          Designed & Built by <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Krishnik Barman</span>
        </p>
        <p className="text-slate-600 dark:text-slate-500 text-xs md:text-sm mt-2">
          © {currentYear} All rights reserved
        </p>
      </div>
    </footer>
  );
}
