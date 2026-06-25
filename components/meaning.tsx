import { Sparkles, Heart, Music, Zap } from 'lucide-react'

export function Meaning() {
  const values = [
    {
      icon: Zap,
      title: 'Vision',
      description: 'See beyond the ordinary and imagine possibilities.',
    },
    {
      icon: Heart,
      title: 'Vitality',
      description: 'Embrace energy, confidence, and living fully.',
    },
    {
      icon: Music,
      title: 'Vibration',
      description: 'Create meaningful resonance with your presence.',
    },
    {
      icon: Sparkles,
      title: 'Resonance',
      description: 'Leave lasting, unforgettable impressions.',
    },
  ]

  return (
    <section
      id="meaning"
      className="py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-light tracking-widest text-sm mb-4">
            OUR FOUNDATION
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground mb-6">
            More Than A<br />
            <span className="text-accent">Fragrance Brand</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Vizzang is inspired by vision, vitality, vibration, and resonance.
            We believe fragrance is more than scent—it is a reflection of identity.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 border border-border/30 hover:border-accent/30 transition-colors duration-300 group"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center border border-accent/40 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-light text-foreground tracking-wide">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 bg-foreground/5 border border-foreground/10 p-12">
          <h3 className="text-3xl font-light text-foreground mb-6 text-center">
            Our Philosophy
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-lg font-light text-foreground leading-relaxed">
              "Luxury is not about being loud. It is about being unforgettable."
            </p>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              Every product we offer is designed to help people express themselves
              confidently while creating meaningful and memorable impressions.
              Through fragrances, beauty products, and scent experiences, we help
              you express who you are while enjoying luxury, confidence, and comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
