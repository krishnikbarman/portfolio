'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 animate-slideInUp opacity-0" data-animation-delay="2">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 dark:from-cyan-400 dark:to-blue-400 rounded-full" />
        </div>

        {/* Tagline */}
        <div className="mt-10 mb-8 animate-slideInUp opacity-0" data-animation-delay="3">
          <p className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 leading-relaxed">
            I build things for the web — and I care about every detail.
          </p>
        </div>

        {/* Bio Text */}
        <div className="space-y-6 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mt-6 mb-8 animate-slideInUp opacity-0" data-animation-delay="4">
          <p>
            I'm Krishnik Barman, a Computer Science undergrad and Full-Stack Developer with a passion for crafting digital experiences that are as functional as they are beautiful. I don't just write code — I build products. From a real-time crypto dashboard to an enterprise-grade employee management system, every project I've taken on has been built with production-level thinking: secure authentication, optimized databases, responsive design, and clean architecture.
          </p>

          <p>
            I thrive at the intersection of design and engineering — where a pixel-perfect UI meets a well-structured backend. Whether it's React on the frontend or Supabase and PHP powering the server, I bring the same problem-solving mindset to every layer of the stack.
          </p>
        </div>

        {/* Closing Callout */}
        <div className="mt-8 mb-6 animate-slideInUp opacity-0" data-animation-delay="5">
          <div className="p-6 rounded-lg border-2 border-cyan-600/50 dark:border-cyan-400/50 bg-cyan-100/20 dark:bg-cyan-900/20 backdrop-blur-sm">
            <p className="text-base font-semibold text-slate-800 dark:text-slate-100">
              Currently seeking internship opportunities — ready to contribute from day one.
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 gap-3 animate-slideInUp opacity-0 text-slate-700 dark:text-slate-300" data-animation-delay="6">
          <div className="flex items-center gap-2 font-medium">
            <span>Open to Internships</span>
            <span>✅</span>
          </div>
          <div className="hidden md:block text-slate-400 dark:text-slate-600">|</div>
          <div className="flex items-center gap-2 font-medium">
            <span>Based in Assam, India</span>
            <span>📍</span>
          </div>
          <div className="hidden md:block text-slate-400 dark:text-slate-600">|</div>
          <div className="flex items-center gap-2 font-medium">
            <span>B.Tech CSE Student</span>
            <span>🎓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
