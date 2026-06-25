'use client'

import { useState } from 'react'

export function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    scentFamily: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hello Vizzang Scentique! I would like personalized fragrance recommendations. Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}, Preferred Scent: ${formData.scentFamily}`
    window.open(`https://wa.me/2349035113502?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
    setFormData({ name: '', email: '', phone: '', scentFamily: '' })
  }

  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-light tracking-widest text-sm mb-4">PERSONALIZED EXPERIENCE</p>
          <h2 className="text-5xl md:text-6xl font-light text-foreground">Get Your Perfect<br/><span className="text-primary">Scent Match</span></h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mt-6">
            Tell us about yourself and we&apos;ll send personalized fragrance recommendations tailored to your preferences.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-background border border-border/40 p-8 md:p-12 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-light text-foreground mb-3">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border/50 bg-background text-foreground font-light placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-foreground mb-3">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border/50 bg-background text-foreground font-light placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-light text-foreground mb-3">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border/50 bg-background text-foreground font-light placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-light text-foreground mb-3">Preferred Scent Family</label>
              <select
                name="scentFamily"
                value={formData.scentFamily}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border/50 bg-background text-foreground font-light focus:outline-none focus:border-primary transition-colors"
              >
                <option value="">Select a scent</option>
                <option value="Fresh & Clean">Fresh & Clean</option>
                <option value="Floral">Floral</option>
                <option value="Woody">Woody</option>
                <option value="Sweet & Warm">Sweet & Warm</option>
                <option value="Musky">Musky</option>
                <option value="Oriental">Oriental</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 font-light tracking-widest hover:bg-[#C8A96B] transition-all duration-300"
          >
            Get Personalized Recommendations
          </button>
          <p className="text-xs text-muted-foreground font-light text-center">
            We&apos;ll respond with tailored recommendations via WhatsApp
          </p>
        </form>
      </div>
    </section>
  )
}
