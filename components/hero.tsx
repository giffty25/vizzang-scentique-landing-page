import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/2 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Lifestyle Image */}
          <div className="relative h-96 lg:h-full lg:min-h-screen flex items-center order-2 lg:order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaca48bfa2c9e99d604793d1c85fd0bf-lvsAoTgnOMHSPHxBWYDDduBgZ7biqu.jpg"
              alt="Woman with luxury fragrance"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="text-left lg:text-left space-y-8 order-1 lg:order-2">
          {/* Large Logo */}
          <div className="flex lg:justify-start justify-center mb-8">
            <Image
              src="/vizzang-logo.png"
              alt="Vizzang Scentique"
              width={240}
              height={240}
              className="object-contain"
            />
          </div>

          {/* Fragrance Philosophy Tag */}
          <div className="inline-block">
            <p className="text-xs md:text-sm font-light tracking-widest text-primary uppercase mb-4">
              Our Fragrance Philosophy
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance lg:text-left">
            Express Your<br />
            <span className="text-primary text-6xl lg:text-7xl">Essence</span><br />
            Through Fragrance
          </h1>

          {/* Subheadline */}
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl font-light leading-relaxed lg:text-left">
            "Your scent is your story. We create the perfect chapter." Each fragrance is carefully crafted 
            to complement your presence, not overpower it. Because true elegance whispers, it never shouts.
          </p>

          {/* Featured Quote */}
          <div className="bg-black backdrop-blur-sm border border-primary/40 rounded-sm p-6 md:p-8 my-8">
            <p className="text-base lg:text-lg font-light italic text-white leading-relaxed">
              "We don&apos;t believe fragrance should enter a room before you do. We believe it should stay long after you&apos;ve left."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 pt-12 lg:justify-start">
            <a
              href="#scent-finder"
              className="inline-block bg-primary text-black hover:bg-accent px-12 py-4 text-lg rounded-sm font-bold tracking-widest transition-all duration-300 hover:scale-105"
            >
              Explore Collection
            </a>
            <a
              href="#scent-finder"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-black px-12 py-4 text-lg rounded-sm font-bold tracking-widest transition-all duration-300 hover:scale-105"
            >
              Find My Perfect Scent
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 text-xs lg:text-sm text-muted-foreground space-y-2 lg:text-left">
            <p className="font-light">Sourced with intention, worn with confidence</p>
            <p className="font-light">For those who appreciate the art of subtlety</p>
            <p className="font-light">Beloved by creatives, professionals, and dreamers</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
