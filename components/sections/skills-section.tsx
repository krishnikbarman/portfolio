export default function SkillsSection() {
  const skills = [
    {
      category: 'Backend Development',
      items: [
        'PHP',
        'MySQL',
        'Authentication & session management',
        'CRUD operations',
        'Input validation & basic security'
      ]
    },
    {
      category: 'Frontend Development',
      items: [
        'HTML5',
        'CSS3',
        'JavaScript (ES6+)',
        'React',
        'Responsive layouts'
      ]
    },
    {
      category: 'Developer Tools',
      items: [
        'Git',
        'GitHub',
        'VS Code',
        'Netlify',
        'GitHub Pages',
        'XAMPP'
      ]
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-14">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-5">
              <h3 className="text-xl font-semibold text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
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
