import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'WorkVault – Employee Management System',
      description:
        'Full-stack employee management system with authentication and role-based access control.',
      technologies: ['JavaScript', 'Supabase', 'PostgreSQL', 'HTML', 'CSS'],
      highlights: [
        'Employee CRUD operations and status management',
        'Secure authentication using Supabase',
        'Admin dashboards with filtering and analytics',
        'Responsive UI inspired by ERP systems'
      ],
      githubLink: 'https://github.com/krishnikbarman/workvault-employee-management',
    },
    {
      title: 'Student Training Management System',
      description:
        'PHP–MySQL based system for managing student training programs.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
      highlights: [
        'Admin authentication and access control',
        'Student, project, and file upload management',
        'Session-based security',
        'SQL injection prevention'
      ],
      githubLink: 'https://github.com/krishnikbarman/student-training-management-system',
    },
    {
      title: 'Personal Productivity App',
      description:
        'React-based app for managing tasks, notes, and daily goals.',
      technologies: ['React', 'JavaScript', 'CSS'],
      highlights: [
        'Task and note management',
        'Pagination and sorting',
        'Dashboard overview',
        'Local storage persistence'
      ],
      githubLink: 'https://github.com/krishnikbarman/personal-productivity-app',
    },
    {
      title: 'Pure Assam Silk – Brand Showcase Website',
      description:
        'Designed and developed a website for an Assamese silk startup using React and Tailwind CSS.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript'],
      highlights: [
        'Structured product collections',
        'Reusable UI components',
        'Real-world contact integrations',
        'Modern, responsive design'
      ],
      githubLink: 'https://github.com/krishnikbarman/pure-assam-silk-website',
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-14">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-secondary hover:shadow-lg transition-shadow bg-background"
            >
              <CardHeader className="pb-4">
                <div className="space-y-4">
                  <CardTitle className="text-2xl text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary text-primary bg-primary/5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-3">Key Features</p>
                    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-muted-foreground">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
