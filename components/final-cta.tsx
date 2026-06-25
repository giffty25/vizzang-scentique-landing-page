'use client'

export function FinalCTA() {
  return (
    <section className="py-24 bg-secondary text-foreground">
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
    </section>
  )
}
