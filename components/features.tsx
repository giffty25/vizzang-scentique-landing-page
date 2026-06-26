import { Clock, Wind, Droplet, Flower, Sun, Award } from 'lucide-react'
import Image from 'next/image'

export function Features() {
  const features = [
    {
      icon: Clock,
      title: 'Long-Lasting Fragrances',
      description: 'Scents that endure throughout your day without fading.',
    },
    {
      icon: Wind,
      title: 'Soft Yet Memorable',
      description: 'Elegantly balanced to enhance without overwhelming.',
    },
    {
      icon: Droplet,
      title: 'Premium Fragrance Oils',
      description: 'Carefully curated essences for depth and quality.',
    },
    {
      icon: Flower,
      title: 'Suitable For Sensitive Noses',
      description: 'Gentle compositions that respect sensitive sensitivities.',
    },
    {
      icon: Sun,
      title: 'Perfect For African Weather',
      description: 'Designed to thrive in warm and humid climates.',
    },
    {
      icon: Award,
      title: 'Affordable Luxury',
      description: 'Premium quality without premium price tags.',
    },
  ]

  return (
    <section
      id="features"
      className="py-24 bg-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-light tracking-widest text-sm mb-4">
            WHY VIZZANG SCENTIQUE
          </p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground">
            Premium Features
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white border border-border/40 p-8 hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-accent/50 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-light text-foreground mb-3 tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Brand Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Brand Story Lifestyle Image */}
          <div className="relative h-96 lg:h-full lg:min-h-96 order-2 lg:order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aa59f9eb8ea7db0feb8871d214a3de2f-c0GYwtkKx8TXUIURxhFyNGgCsozk9S.jpg"
              alt="Woman enjoying fragrance confidence"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Welcome Message */}
          <div className="bg-white border border-border/40 p-8 md:p-12 order-1 lg:order-2">
            <h3 className="text-2xl lg:text-3xl font-light text-foreground mb-6">
              Everyday Luxury,<br />
              <span className="text-accent font-bold">Every Day</span>
            </h3>

            <div className="space-y-4">
              <p className="text-base lg:text-lg text-muted-foreground font-light leading-relaxed">
                Finding your perfect scent shouldn't feel complicated. We&apos;re here to help you 
                discover fragrances that feel like an extension of who you are. Whether you&apos;re 
                looking for your signature scent, something for special occasions, or gifts for people 
                you care about—we&apos;ve created this space to make the journey personal and effortless.
              </p>
              <p className="text-base lg:text-lg text-muted-foreground font-light leading-relaxed">
                Every fragrance in our collection has been thoughtfully selected with real people in mind. 
                People with busy lives, sensitive noses, and a love for quality. People just like you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
