import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/sections/hero"
import { CredibilityBar } from "@/components/sections/credibility-bar"
import { PainSection } from "@/components/sections/pain-section"
import { ProfessorSection } from "@/components/sections/professor-section"
import { TransformationSection } from "@/components/sections/transformation-section"
import { ForWhoSection } from "@/components/sections/for-who-section"
import { ModulesSection } from "@/components/sections/modules-section"
import { ApplicationsSection } from "@/components/sections/applications-section"
import { CertificationSection } from "@/components/sections/certification-section"
import { SocialProofSection } from "@/components/sections/social-proof-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FinalCTASection } from "@/components/sections/final-cta-section"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"

export default function LandingPage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <CredibilityBar />
      <PainSection />
      <ProfessorSection />
      <TransformationSection />
      <ForWhoSection />
      <ModulesSection />
      <ApplicationsSection />
      <CertificationSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <StickyCTA />
    </main>
  )
}
