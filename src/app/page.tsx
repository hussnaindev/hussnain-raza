'use client'
import CertificatesAndAwardsSection from '@/components/CertificatesAndAwards'
import * as FullStory from '@fullstory/browser'
import { useEffect } from 'react'
import ContactSection from '../components/ContactSection'
import ExperienceSection from '../components/ExperienceSection'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'

export default function Home() {
  useEffect(() => {
    FullStory.init({ orgId: 'o-21ASQA-na1'});
  }, []);
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
