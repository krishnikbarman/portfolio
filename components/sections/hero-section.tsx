'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown, Download } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-24 bg-background">
      <div className="max-w-4xl w-full text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-pretty">
          Krishnik Barman | Full-Stack Developer Intern
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Building production-ready web applications using React, PHP, MySQL, and Supabase with a strong focus on authentication, CRUD systems, and clean UI design.
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Open to internship opportunities where I can contribute to real-world projects and grow as a full-stack developer.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-10">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-primary text-primary hover:bg-primary/10"
          >
            Get In Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary text-primary hover:bg-primary/10"
          >
            <a
              href="/Krishnik_Barman_Full_Stack_Developer_Intern.pdf"
              download="Krishnik_Barman_Full_Stack_Developer_Intern.pdf"
              className="flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="pt-20 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}
