import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Meaning } from '@/components/meaning'
import { Features } from '@/components/features'
import { ScentFinder } from '@/components/scent-finder'
import { FragranceJourney } from '@/components/fragrance-journey'
import { ProductCatalogue } from '@/components/product-catalogue'
import { SmartAutomation } from '@/components/smart-automation'
import { Testimonials } from '@/components/testimonials'
import { FutureVision } from '@/components/future-vision'
import { LeadCapture } from '@/components/lead-capture'
import { FAQ } from '@/components/faq'
import { ContactSection } from '@/components/contact-section'
import { FinalCTA } from '@/components/final-cta'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Meaning />
      <Features />
      <ScentFinder />
      <FragranceJourney />
      <ProductCatalogue />
      <SmartAutomation />
      <Testimonials />
      <FutureVision />
      <LeadCapture />
      <FAQ />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
