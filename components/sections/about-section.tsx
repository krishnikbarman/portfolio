export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">About Me</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a junior full-stack developer with practical experience building web applications 
            using PHP, MySQL, and JavaScript. I've worked on employee management systems, student 
            training platforms, and productivity tools—focusing on secure authentication, database 
            design, and reliable CRUD operations.
          </p>

          <p>
            My projects include implementing user login systems with session management, designing 
            relational databases with proper normalization, and building responsive interfaces. 
            I write clean, maintainable code and prioritize security practices like input validation 
            and SQL injection prevention.
          </p>

          <p>
            I'm seeking internship opportunities to contribute to real-world applications and learn 
            from experienced teams. I'm particularly interested in backend development, API design, 
            and full-stack features where I can apply my skills and grow as a developer.
          </p>
        </div>
      </div>
    </section>
  )
}
