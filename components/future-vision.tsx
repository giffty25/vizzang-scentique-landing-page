'use client'

import { BRAND } from '@/lib/brand'

export function FutureVision() {
  const expansions = [
    { title: 'Beauty', description: 'Skincare and cosmetics that complement your fragrance' },
    { title: 'Fashion', description: 'Curated clothing and accessories for the modern professional' },
    { title: 'Wellness', description: 'Holistic products for mental and physical wellbeing' },
    { title: 'Lifestyle', description: 'Premium everyday products that elevate your experience' },
  ]

  return (
    <section className="py-24 bg-cream/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-light tracking-widest text-sm mb-4">LOOKING AHEAD</p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground">The Future of<br/><span className="text-accent">{BRAND.shortName}</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed mt-6">
            {BRAND.fullName} is the first expression of a broader lifestyle brand vision dedicated to helping you express your essence in every aspect of life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {expansions.map((item, index) => (
            <div key={index} className="bg-white border border-border/40 p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-light text-accent mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-foreground text-background p-12 md:p-16 text-center">
          <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto">
            Our vision extends beyond fragrance. We&apos;re building a complete lifestyle ecosystem where every product reflects your individuality, reinforces your confidence, and helps you leave a lasting mark on the world.
          </p>
        </div>
      </div>
    </section>
  )
}
