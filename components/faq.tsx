'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Are your perfumes long-lasting?',
      answer: 'Yes, all our perfumes are formulated with premium fragrance oils for long-lasting performance. Most of our fragrances last 6-8 hours on skin and even longer on clothing, making them perfect for all-day wear.',
    },
    {
      question: 'Do you deliver nationwide?',
      answer: 'Absolutely! We deliver to all locations across Nigeria. Once you place an order through WhatsApp, we provide delivery estimates and track your package to ensure it arrives safely and on time.',
    },
    {
      question: 'Can you help me choose a fragrance?',
      answer: 'Of course! Our AI-powered Scent Finder tool asks questions about your preferences and lifestyle to recommend the perfect fragrance. You can also chat with our team via WhatsApp for personalized assistance.',
    },
    {
      question: 'Do you sell fragrance oils?',
      answer: 'Yes, we offer premium fragrance oils in our Perfume Oil Essence collection. These concentrated oils are perfect for intimate wear and provide exceptional longevity and depth.',
    },
    {
      question: 'Do you offer gift packaging?',
      answer: 'Yes! We provide beautiful gift packaging for all our products. When ordering as a gift, you can mention this via WhatsApp and we&apos;ll ensure your fragrance arrives in premium presentation packaging.',
    },
  ]

  return (
    <section className="py-24 bg-cream/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-light tracking-widest text-sm mb-4">QUESTIONS & ANSWERS</p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground">Frequently Asked<br/><span className="text-accent">Questions</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border/40 hover:border-accent/40 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <span className="text-lg font-light text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-background border-t border-border/20">
                  <p className="text-foreground font-light leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
