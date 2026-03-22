import ScrollProgressBar from '@/components/scroll-progress-bar'
import BackToTopButton from '@/components/back-to-top-button'
import SplashScreen from '@/components/splash-screen'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/sections/hero-section'
import AboutSection from '@/components/sections/about-section'
import SkillsSection from '@/components/sections/skills-section'
import ProjectsSection from '@/components/sections/projects-section'
import EducationSection from '@/components/sections/education-section'
import ContactSection from '@/components/sections/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="transition-colors duration-300">
      <SplashScreen />
      <div className="animate-fadeIn">
        <ScrollProgressBar />
        <Navbar />
        <div className="pt-0">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
      <BackToTopButton />
    </main>
  )
}
