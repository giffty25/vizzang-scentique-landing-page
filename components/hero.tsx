import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-32 pb-16 flex items-center justify-center bg-gradient-to-br from-cream via-background to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
            <span className="text-balance">
              Express Your
              <br />
              <span className="text-accent">Essence</span>
              <br />
              Through Fragrance
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Discover perfumes, fragrance oils, body mists, and scent experiences
            crafted to reflect your individuality and leave lasting impressions.
          </p>

          {/* Featured Quote */}
          <div className="bg-white/40 backdrop-blur-sm border border-accent/20 rounded-sm p-8 md:p-12 my-8 max-w-3xl mx-auto">
            <p className="text-lg md:text-2xl font-light italic text-foreground leading-relaxed">
              "We don&apos;t believe fragrance should enter a room before you do. We
              believe it should stay long after you&apos;ve left."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base rounded-sm font-light tracking-widest"
            >
              Explore Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base rounded-sm font-light tracking-widest"
            >
              Find My Perfect Scent
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 text-sm text-muted-foreground space-y-2">
            <p className="font-light">✓ Premium Fragrance Selection</p>
            <p className="font-light">✓ Handcrafted for Elegance</p>
            <p className="font-light">✓ Trusted by Professionals & Entrepreneurs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
