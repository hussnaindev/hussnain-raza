import CertificatesAndAwardsSection from '@/components/CertificatesAndAwards'
import ContactSection from '../components/ContactSection'
import ExperienceSection from '../components/ExperienceSection'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificatesAndAwardsSection />
      <ContactSection />
    </>
  )
}
