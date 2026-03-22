'use client';

import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'CertiChain dApp – Blockchain Certificate Verification',
      tech: ['Ethereum', 'Solidity', 'React', 'ethers.js', 'MetaMask', 'Web3'],
      highlights: [
        'Decentralized certificate verification system built on Ethereum smart contracts',
        'MetaMask integration for secure, tamper-proof credential validation',
        'React frontend with ethers.js for blockchain interaction and smart contract communication'
      ],
      github: 'https://github.com/krishnikbarman/CertiChain-dapp',
      demo: '#' // TODO: add live demo link
    },
    {
      title: 'CoinSight – Crypto Portfolio Dashboard',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'APIs'],
      highlights: [
        'Real-time crypto portfolio dashboard with authentication and cloud database',
        'Smart price alerts, analytics dashboards, and CSV export functionality',
        'External API integration for live market data and multi-currency support'
      ],
      github: 'https://github.com/krishnikbarman/coinsight-v1',
      demo: '#' // TODO: add live demo link
    },
    {
      title: 'WorkVault – Employee Management System',
      tech: ['JavaScript', 'Supabase', 'PostgreSQL'],
      highlights: [
        'Full-stack employee management system with secure authentication',
        'Employee CRUD, search/filter, pagination, and status dashboards',
        'Row Level Security and optimized database queries'
      ],
      github: 'https://github.com/krishnikbarman/workvault-employee-management',
      demo: 'https://krishnikbarman.github.io/workvault-employee-management/'
    },
    {
      title: 'Student Training Management System',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
      highlights: [
        'Admin dashboard for managing students, projects, and instructors',
        'File uploads, session-based authentication, and SQL injection protection',
        'Report generation and progress tracking system'
      ],
      github: 'https://github.com/krishnikbarman/student-training-management-system',
      demo: '#' // TODO: add live demo link
    },
    {
      title: 'Pure Assam Silk – Brand Showcase Website',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      highlights: [
        'Heritage-inspired premium UI with collection-based product layouts',
        'WhatsApp inquiry integration and reusable UI components',
        'Responsive design with smooth animations'
      ],
      github: 'https://github.com/krishnikbarman/pure-assam-silk-website',
      demo: 'https://krishnikbarman.github.io/pure-assam-silk-website/'
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 animate-slideInUp opacity-0" data-animation-delay="2">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-lg border border-slate-300 dark:border-slate-700/50 bg-white dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-all duration-300 overflow-hidden backdrop-blur animate-slideInUp opacity-0"
              data-animation-delay={String(4 + index)}
            >
              {/* Card Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 dark:from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative p-6 flex flex-col h-full">
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-3 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-cyan-100 dark:bg-cyan-400/20 text-cyan-700 dark:text-cyan-300 text-xs font-medium rounded-full border border-cyan-600/30 dark:border-cyan-400/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mt-4 mb-6 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 text-slate-700 dark:text-slate-300 text-sm">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-cyan-600 dark:hover:border-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 text-sm font-medium"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
