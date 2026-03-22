'use client';

export default function SkillsSection() {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend & Database',
      skills: ['PHP', 'Supabase', 'MySQL', 'PostgreSQL', 'REST APIs']
    },
    {
      title: 'Core Concepts',
      skills: ['Authentication', 'CRUD', 'Dashboards', 'Pagination', 'Row Level Security']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Vercel', 'VS Code', 'Python', 'Shopify']
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 animate-slideInUp opacity-0" data-animation-delay="2">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="space-y-10">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="animate-slideInUp opacity-0"
              data-animation-delay={String(4 + index)}
            >
              <h3 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-700 hover:border-cyan-500 dark:hover:border-cyan-400 hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] dark:hover:shadow-[0_0_12px_rgba(34,211,238,0.3)] rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
