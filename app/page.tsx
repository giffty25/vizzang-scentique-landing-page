import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Meaning } from '@/components/meaning'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Meaning />
      <Features />
      <Footer />
    </main>
  )
}
