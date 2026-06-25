'use client'

import { Phone, Mail } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-light tracking-widest text-sm mb-4">GET IN TOUCH</p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground">Connect With<br/><span className="text-accent">Vizzang Scentique</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-border/40 p-8 hover:border-accent/40 transition-all duration-300 text-center">
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-light text-foreground mb-3">Phone</h3>
            <a
              href="tel:+2349035113502"
              className="text-foreground font-light hover:text-accent transition-colors text-lg"
            >
              09035113502
            </a>
          </div>

          <div className="bg-white border border-border/40 p-8 hover:border-accent/40 transition-all duration-300 text-center">
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-light text-foreground mb-3">Email</h3>
            <a
              href="mailto:vizzangscentique@gmail.com"
              className="text-foreground font-light hover:text-accent transition-colors break-all text-lg"
            >
              vizzangscentique@gmail.com
            </a>
          </div>

          <div className="bg-white border border-border/40 p-8 hover:border-accent/40 transition-all duration-300 text-center">
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
              </svg>
            </div>
            <h3 className="text-xl font-light text-foreground mb-3">Instagram</h3>
            <a
              href="https://instagram.com/vizzang_scentique"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-light hover:text-accent transition-colors text-lg"
            >
              @vizzang_scentique
            </a>
          </div>
        </div>

        <div className="mt-16 bg-cream/50 border border-border/40 p-12 text-center">
          <h3 className="text-2xl font-light text-foreground mb-4">Prefer WhatsApp?</h3>
          <p className="text-muted-foreground font-light mb-6 max-w-2xl mx-auto">
            For instant support and personalized recommendations, chat with us directly on WhatsApp. We respond quickly and provide dedicated customer service.
          </p>
          <a
            href="https://wa.me/2349035113502?text=Hello Vizzang Scentique! I'd like to learn more about your fragrances."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground text-background px-8 py-3 font-light tracking-widest hover:opacity-80 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
