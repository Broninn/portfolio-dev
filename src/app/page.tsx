import ContactSection from '@/components/Contact';
import HeroSection from '@/components/Hero';
import ProjectsSection from '@/components/Projects';
import SkillsSection from '@/components/Skills';

export default function Home() {
  return (
    <main className="bg-[#0b0c10]">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
