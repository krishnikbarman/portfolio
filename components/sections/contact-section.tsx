import { Mail, Github, Linkedin, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactSection() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'krishnikbarman12@gmail.com',
      href: 'mailto:krishnikbarman12@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/krishnikbarman',
      href: 'https://github.com/krishnikbarman',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/krishnik-barman-',
      href: 'https://www.linkedin.com/in/krishnik-barman-/',
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16">
          Open to internship opportunities and eager to contribute to real-world projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {contactLinks.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="p-8 bg-card border border-secondary rounded-lg hover:shadow-lg transition-shadow text-center space-y-4">
                  <Icon className="w-8 h-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="text-foreground font-medium hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <div className="mt-20 pt-16 border-t border-secondary text-center">
          <p className="text-muted-foreground mb-6">Available for internship opportunities</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="mailto:krishnikbarman12@gmail.com">Reach Out</a>
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
        </div>
      </div>
    </section>
  )
}
