import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Student Training Management System',
      description:
        'Designed to streamline course enrollment and student progress tracking for training programs. Built a complete PHP/MySQL backend with user authentication, relational database schema, and admin controls for managing courses, students, and performance data.',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
      highlights: [
        'Multi-role authentication (students, instructors, admin)',
        'Course enrollment with progress tracking',
        'Database normalization and foreign key relationships',
        'Server-side form validation',
        'Admin dashboard for user and course management',
        'Responsive UI with mobile support'
      ],
      githubLink: 'https://github.com/krishnikbarman/student-training-management-system',
    },
    {
      title: 'WorkVault – Employee Management System',
      description:
        'A web application for HR teams to manage employee records efficiently. Implemented secure session-based authentication, CRUD operations for employee data, and department filtering. Focused on preventing SQL injection and securing user inputs.',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS'],
      highlights: [
        'Session-based authentication with password hashing',
        'Complete CRUD functionality for employee records',
        'SQL injection prevention using prepared statements',
        'Department-based filtering and search',
        'Role-based access control',
        'Clean, responsive interface'
      ],
      githubLink: 'https://github.com/krishnikbarman/workvault-employee-management',
    },
    {
      title: 'Productivity Task Manager',
      description:
        'A frontend web app to help users organize daily tasks and improve productivity. Built with React using component-based architecture, state management with hooks, and localStorage for data persistence. Focused on creating an intuitive, fast user experience.',
      technologies: ['React', 'JavaScript', 'CSS3'],
      highlights: [
        'Component-based architecture with React hooks',
        'Dynamic state management for real-time updates',
        'LocalStorage integration for data persistence',
        'Task filtering and completion tracking',
        'Clean, minimal UI design',
        'Fully responsive layout'
      ],
      githubLink: 'https://github.com/krishnikbarman/personal-productivity-app',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Projects</h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-secondary hover:shadow-lg transition-shadow bg-background"
            >
              <CardHeader>
                <div className="space-y-3">
                  <CardTitle className="text-2xl text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
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
                    <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
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
