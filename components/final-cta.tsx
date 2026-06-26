'use client'

import Image from 'next/image'

export function FinalCTA() {
  return (
    <section className="py-0 bg-background text-foreground">
      {/* Spray Mist Image Background */}
      <div className="relative h-96 lg:h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ff0c96280291a480570d8aa98923c0f0~2-Bjfa50FPhHEqjP8IrM5sKLI0jKk3IF.jpg"
          alt="Luxury fragrance spray moment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* CTA Content */}
      <div className="py-24 bg-secondary text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-6xl md:text-7xl font-light text-balance mb-6 text-foreground">
          Express Your Essence.<br/>Leave Your Resonance.
        </h2>
        
        <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Luxury, confidence, comfort, and individuality in every fragrance experience.
        </p>

        <a
          href="/#hero"
          className="inline-block bg-primary text-primary-foreground px-12 py-4 font-light tracking-widest hover:bg-[#C8A96B] transition-colors text-lg"
        >
          Explore Collection
        </a>
      </div>
      </div>
    </section>
  )
}
