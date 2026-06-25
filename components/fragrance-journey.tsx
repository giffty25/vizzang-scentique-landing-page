export function FragranceJourney() {
  const steps = [
    {
      title: 'Discover',
      description: 'Explore our curated collection of luxury fragrances',
    },
    {
      title: 'Match',
      description: 'Find scents that resonate with your personality',
    },
    {
      title: 'Experience',
      description: 'Feel the elegance and confidence in every spray',
    },
    {
      title: 'Order',
      description: 'Seamlessly order via WhatsApp with instant support',
    },
    {
      title: 'Resonate',
      description: 'Embrace your essence and make lasting impressions',
    },
  ]

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-light md:text-4xl text-foreground">
            Your Fragrance Journey
          </h2>
          <p className="text-muted-foreground">
            A seamless path from discovery to transformation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent -translate-y-1/2" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Circle Node */}
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-background mx-auto">
                  <span className="text-lg font-light text-accent">
                    {index + 1}
                  </span>
                </div>

                {/* Mobile Connector Line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute top-16 left-1/2 h-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent to-transparent" />
                )}

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-light text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
