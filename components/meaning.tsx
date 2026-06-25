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
      className="py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-light tracking-widest text-sm mb-4">
            OUR STORY
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            A Brand Built<br />
            On <span className="text-primary">Connection</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Vizzang was born from a simple belief: fragrance is an intimate conversation between 
            who you are and how the world experiences you. We craft scents for the authentic, the ambitious, 
            and those who refuse to be ordinary.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="text-center space-y-4 p-6 border border-primary/30 hover:border-primary/60 transition-colors duration-300 group bg-gray-900/50"
              >
                <div className="flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center border border-primary/50 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Philosophy Section */}
        <div className="mt-20 bg-gray-900 border border-primary/30 p-12">
          <h3 className="text-4xl font-bold text-primary mb-6 text-center">
            What We Believe
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            <p className="text-2xl font-light text-white leading-relaxed italic">
              "Elegance whispers. It never shouts."
            </p>
            <p className="text-base text-gray-300 font-light leading-relaxed">
              We believe fragrance should enhance your presence, not announce it. Each scent we create 
              is meant to become part of your story—a subtle yet unmistakable signature. We're building 
              a brand for people who understand that true luxury is about intention, authenticity, and 
              the quiet confidence that comes from knowing you're exactly who you're meant to be.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
