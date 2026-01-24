'use client'

import { Button } from '@/components/ui/button'
import { ArrowDown, Download } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-background">
      <div className="max-w-4xl w-full text-center space-y-5">
        <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight text-pretty">
          Krishnik Barman | Junior Full-Stack Web Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Building secure, real-world web applications using PHP, MySQL, and JavaScript
        </p>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Actively seeking internship opportunities to contribute to real projects and grow as a developer.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-8">
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
              href="/Krishnik_Barman_Resume.pdf"
              download="Krishnik_Barman_Resume.pdf"
              className="flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="pt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}
