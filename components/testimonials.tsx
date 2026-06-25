'use client'

import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Amina',
      location: 'Abuja',
      quote: 'I usually avoid perfumes because many are too strong for me. The fragrance I got from Vizzang stayed on my clothes all day without becoming overwhelming.',
      rating: 5,
    },
    {
      name: 'David',
      location: 'Kaduna',
      quote: 'What impressed me most was how different the recommendations were. I found a scent that actually matches my personality.',
      rating: 5,
    },
    {
      name: 'Mariam',
      location: 'Lagos',
      quote: 'The fragrance lasted through an entire event and I kept getting compliments. It felt classy without being loud.',
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-light tracking-widest text-sm mb-4">WHAT CUSTOMERS SAY</p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground">Real Stories,<br/><span className="text-accent">Lasting Impressions</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-border/40 p-8 hover:border-accent/40 transition-all duration-300 group">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(null).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground font-light leading-relaxed mb-6 text-sm">{testimonial.quote}</p>
              <div className="border-t border-border/30 pt-4">
                <p className="font-light text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground font-light">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
