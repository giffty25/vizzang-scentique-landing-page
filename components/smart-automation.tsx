import { Zap, MessageSquare, Sparkles } from 'lucide-react'
import { BRAND } from '@/lib/brand'

export function SmartAutomation() {
  const features = [
    {
      icon: Zap,
      title: 'Smart Scent Matching',
      description:
        'Our AI-powered scent finder analyzes your preferences and suggests the perfect fragrances tailored to your lifestyle and personality.',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Ordering',
      description:
        'Order directly through WhatsApp with instant confirmation, personalized support, and real-time updates on your fragrance purchase.',
    },
    {
      icon: Sparkles,
      title: 'Personalized Recommendations',
      description:
        'Receive curated fragrance suggestions based on your purchase history, preferences, and seasonal changes throughout the year.',
    },
  ]

  return (
    <section className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-light md:text-4xl text-foreground">
            Smart Fragrance Experience
          </h2>
          <p className="text-muted-foreground">
            Technology and luxury seamlessly combined for your benefit
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-border bg-background p-8 transition-all duration-300 hover:shadow-lg hover:border-accent"
              >
                {/* Icon */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-6 w-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-light text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-12 rounded-lg border border-accent/30 bg-muted/50 p-8 text-center md:p-12">
          <h3 className="mb-3 text-2xl font-light text-foreground">
            Ready to Transform Your Fragrance Experience?
          </h3>
          <p className="mb-6 text-muted-foreground">
            Start your personalized scent journey today with our intelligent recommendation system
          </p>
          <a
            href={`https://wa.me/${BRAND.whatsappNumber}?text=Hello ${BRAND.fullName}! I'd like to explore your fragrance collection`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded bg-foreground px-8 py-3 font-light text-background transition-opacity hover:opacity-80"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
