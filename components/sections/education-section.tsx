'use client';

import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: 'B.Tech – Computer Science & Engineering',
      institution: 'Central Institute of Technology Kokrajhar',
      link: 'https://www.citk.ac.in/',
      year: '2023 – Present',
      grade: 'CGPA: 7.23'
    },
    {
      degree: 'Diploma – Computer Engineering',
      institution: 'Nowgong Polytechnic, Nagaon',
      link: 'https://www.nowgongpolytechnic.ac.in/',
      year: '2020 – 2023',
      grade: 'CGPA: 7.60'
    },
    {
      degree: 'Class X – Matriculation',
      institution: 'Royal Oak High School, Jorhat',
      link: 'https://royaloakschool.in/',
      year: '2020',
      grade: 'Percentage: 71.67'
    }
  ];

  return (
    <section id="education" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 animate-slideInUp opacity-0" data-animation-delay="2">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 rounded-full" />
        </div>

        {/* Education List */}
        <div className="border border-slate-300 dark:border-gray-800 rounded-2xl p-2 md:p-4 bg-slate-50 dark:bg-white/[0.02] backdrop-blur-sm animate-slideInUp opacity-0" data-animation-delay="4">
          {education.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-4 py-6 px-4 ${
                index !== education.length - 1 ? 'border-b border-slate-300 dark:border-gray-800' : ''
              } hover:bg-slate-100 dark:hover:bg-white/[0.02] transition-all duration-300 rounded-lg group`}
            >
              {/* LEFT SIDE - Icon + Text */}
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-900 transition-colors duration-300 flex-shrink-0">
                  <GraduationCap size={22} />
                </div>

                {/* Text Block */}
                <div className="flex flex-col">
                  <h3 className="text-slate-900 dark:text-white font-semibold text-sm md:text-base">
                    {item.degree}
                  </h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-600 dark:text-cyan-400 text-xs md:text-sm mt-1 hover:underline transition-all duration-200"
                  >
                    {item.institution}
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE - Badges */}
              <div className="flex flex-row gap-2 items-center flex-shrink-0 md:justify-end w-full md:w-auto">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-300 dark:bg-gray-800 text-slate-900 dark:text-gray-300 border border-slate-400 dark:border-gray-700 whitespace-nowrap">
                  {item.year}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 whitespace-nowrap">
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
