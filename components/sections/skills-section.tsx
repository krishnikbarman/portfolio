export default function SkillsSection() {
  const skills = [
    { 
      category: 'Backend Development', 
      items: [
        'PHP (server-side logic)',
        'MySQL (database design & queries)',
        'User authentication & sessions',
        'CRUD operations',
        'Input validation & security'
      ] 
    },
    { 
      category: 'Frontend Development', 
      items: [
        'JavaScript (ES6+)',
        'React (component-based UI)',
        'HTML5 & CSS3',
        'Responsive web design',
        'DOM manipulation'
      ] 
    },
    { 
      category: 'Developer Tools', 
      items: [
        'Git version control',
        'GitHub collaboration',
        'VS Code',
        'phpMyAdmin',
        'Browser DevTools'
      ] 
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
