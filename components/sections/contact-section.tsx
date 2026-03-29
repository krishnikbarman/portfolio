'use client';

import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krishnikbarman12@gmail.com',
      href: 'mailto:krishnikbarman12@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9864637816',
      href: 'tel:+919864637816'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jorhat, Assam, India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:krishnikbarman12@gmail.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/krishnik-barman', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/krishnikbarman', label: 'GitHub' }
  ];

  return (
    <section id="contact" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-900 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="mb-12 text-center animate-slideInUp opacity-0" data-animation-delay="0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I'm actively seeking internship opportunities. Feel free to reach out and let's discuss how I can contribute to your team!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-10 mb-10 animate-slideInUp opacity-0" data-animation-delay="2">
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="group cursor-default p-6 rounded-lg border border-gray-800 dark:border-gray-800 bg-white/[0.02] dark:bg-white/[0.02] hover:border-cyan-500/50 dark:hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="p-3 bg-cyan-950 dark:bg-cyan-950 rounded-lg h-fit group-hover:bg-cyan-900 dark:group-hover:bg-cyan-900 transition-colors duration-300">
                    <Icon size={24} className="text-cyan-400 dark:text-cyan-400 group-hover:text-cyan-300 dark:group-hover:text-cyan-300 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 mb-1">{item.label}</p>
                    <p className="text-slate-900 dark:text-white font-medium group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-200 break-all text-xs md:text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Social Icons - Larger with Labels */}
        <div className="flex justify-center gap-6 mt-10 mb-10 animate-slideInUp opacity-0" data-animation-delay="3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center gap-2 group"
                title={social.label}
              >
                <div className="p-3 rounded-xl border border-gray-700 dark:border-gray-700 text-gray-400 dark:text-gray-400 hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-400 dark:hover:text-cyan-400 hover:shadow-[0_0_16px_rgba(34,211,238,0.2)] dark:hover:shadow-[0_0_16px_rgba(34,211,238,0.2)] hover:bg-cyan-950/50 dark:hover:bg-cyan-950/50 transition-all duration-300">
                  <Icon size={24} />
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-500 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {social.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-300/30 dark:border-slate-700/30 my-10" />

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideInUp opacity-0" data-animation-delay="4">
          <a
            href="mailto:krishnikbarman12@gmail.com"
            className="inline-block px-8 py-3 bg-cyan-500 dark:bg-cyan-400 text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-300 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-cyan-400/50"
          >
            Send Me an Email
          </a>
          <a
            href="/Krishnik_Barman_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-all duration-300"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
