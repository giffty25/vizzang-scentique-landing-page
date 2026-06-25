import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Meaning } from '@/components/meaning'
import { Features } from '@/components/features'
import { ScentFinder } from '@/components/scent-finder'
import { FragranceJourney } from '@/components/fragrance-journey'
import { ProductCatalogue } from '@/components/product-catalogue'
import { SmartAutomation } from '@/components/smart-automation'
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
      <Footer />
    </main>
  )
}
