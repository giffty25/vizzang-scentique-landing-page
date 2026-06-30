import { Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { BRAND } from '@/lib/brand'

export function Footer() {
  return (
    <footer id="footer" className="bg-[#3B3635] text-[#F8F4EC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-widest mb-6">
              {BRAND.fullName.toUpperCase()}
            </h3>
            <p className="text-sm font-light leading-relaxed opacity-90">
              {BRAND.description}
            </p>
            <p className="text-xs font-light opacity-70 tracking-wide mt-4">
              Express Your Essence
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-widest mb-6">NAVIGATE</h4>
            <nav className="space-y-3">
              <Link href="#hero" className="block text-sm font-light hover:text-[#D6B97A] transition-colors">
                Home
              </Link>
              <Link href="#meaning" className="block text-sm font-light hover:text-[#D6B97A] transition-colors">
                About
              </Link>
              <Link href="#features" className="block text-sm font-light hover:text-[#D6B97A] transition-colors">
                Why Us
              </Link>
              <Link href="#footer" className="block text-sm font-light hover:text-[#D6B97A] transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-widest mb-6">LOCATION</h4>
            <a
              href="https://maps.google.com/?q=Abuja,Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-[#D6B97A] transition-colors group"
            >
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              <span className="text-sm font-light leading-relaxed">
                Abuja<br />Nigeria
              </span>
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-widest mb-6">GET IN TOUCH</h4>
            <a
              href="tel:+2349035113502"
              className="flex items-center gap-3 hover:text-[#D6B97A] transition-colors group mb-4"
            >
              <Phone className="w-5 h-5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              <span className="text-sm font-light">09035113502</span>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-3 hover:text-[#D6B97A] transition-colors group"
            >
              <Mail className="w-5 h-5 flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              <span className="text-sm font-light break-all">
                {BRAND.email}
              </span>
            </a>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social */}
            <div className="text-center md:text-left">
              <p className="text-xs font-light tracking-widest opacity-70 mb-3">
                FOLLOW US
              </p>
              <a
                href={`https://instagram.com/${BRAND.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-light hover:text-[#D6B97A] transition-colors inline-block"
              >
                {BRAND.instagram}
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs font-light opacity-70 text-center md:text-right">
              © 2026 {BRAND.fullName}. All rights reserved. <br />
              {BRAND.location.city}, {BRAND.location.country}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
