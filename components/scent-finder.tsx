'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'

type Step = 'family' | 'wear' | 'intensity' | 'results'

interface Answers {
  family: string
  wear: string
  intensity: string
}

export function ScentFinder() {
  const [currentStep, setCurrentStep] = useState<Step>('family')
  const [answers, setAnswers] = useState<Answers>({
    family: '',
    wear: '',
    intensity: '',
  })
  const [showResults, setShowResults] = useState(false)

  const scentFamilies = [
    'Fresh & Clean',
    'Floral',
    'Woody',
    'Sweet & Warm',
    'Musky',
    'Oriental',
  ]

  const wearLocations = [
    'Office',
    'Everyday Wear',
    'Date Night',
    'Special Events',
    'Religious Gatherings',
  ]

  const intensities = ['Very Subtle', 'Balanced', 'Strong Presence']

  const recommendations: Record<string, string[]> = {
    'Fresh & Clean': [
      'Morning Essence',
      'Citrus Bloom',
      'Ocean Breeze',
    ],
    'Floral': ['Rose Garden', 'Jasmine Dreams', 'Petal Soft'],
    'Woody': ['Oud Luxury', 'Cedar Elite', 'Sandalwood Grace'],
    'Sweet & Warm': ['Vanilla Luxe', 'Amber Soul', 'Caramel Bliss'],
    'Musky': ['Musk Dynasty', 'Amber Musk', 'Sensual Musk'],
    'Oriental': ['Orient Express', 'Palace Gold', 'Silk Route'],
  }

  const handleSelectFamily = (family: string) => {
    setAnswers({ ...answers, family })
    setCurrentStep('wear')
  }

  const handleSelectWear = (wear: string) => {
    setAnswers({ ...answers, wear })
    setCurrentStep('intensity')
  }

  const handleSelectIntensity = (intensity: string) => {
    setAnswers({ ...answers, intensity })
    setShowResults(true)
  }

  const getRecommendations = () => {
    return recommendations[answers.family] || []
  }

  const resetQuiz = () => {
    setCurrentStep('family')
    setAnswers({ family: '', wear: '', intensity: '' })
    setShowResults(false)
  }

  const progress = showResults
    ? 100
    : currentStep === 'family'
      ? 33
      : currentStep === 'wear'
        ? 66
        : 99

  return (
    <section id="scent-finder" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-light md:text-4xl text-foreground">
            Find Your Perfect Scent
          </h2>
          <p className="text-muted-foreground">
            Answer a few questions to discover fragrances that resonate with you
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex-1">
            <div className="relative h-1 bg-muted overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Quiz Content */}
        <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
          {!showResults ? (
            <>
              {currentStep === 'family' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h3 className="mb-6 text-xl font-light text-foreground">
                    Which scent family do you prefer?
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {scentFamilies.map((family) => (
                      <button
                        key={family}
                        onClick={() => handleSelectFamily(family)}
                        className="group relative overflow-hidden rounded border border-border bg-background p-4 text-left transition-all duration-300 hover:border-accent hover:bg-muted"
                      >
                        <span className="relative z-10 flex items-center justify-between text-foreground">
                          {family}
                          <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 'wear' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h3 className="mb-6 text-xl font-light text-foreground">
                    Where will you wear it?
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {wearLocations.map((location) => (
                      <button
                        key={location}
                        onClick={() => handleSelectWear(location)}
                        className="group relative overflow-hidden rounded border border-border bg-background p-4 text-left transition-all duration-300 hover:border-accent hover:bg-muted"
                      >
                        <span className="relative z-10 flex items-center justify-between text-foreground">
                          {location}
                          <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 'intensity' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <h3 className="mb-6 text-xl font-light text-foreground">
                    How noticeable should your fragrance be?
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-1">
                    {intensities.map((intensity) => (
                      <button
                        key={intensity}
                        onClick={() => handleSelectIntensity(intensity)}
                        className="group relative overflow-hidden rounded border border-border bg-background p-4 text-left transition-all duration-300 hover:border-accent hover:bg-muted"
                      >
                        <span className="relative z-10 flex items-center justify-between text-foreground">
                          {intensity}
                          <ChevronRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="mb-8 text-center">
                <h3 className="mb-2 text-2xl font-light text-foreground">
                  Your Perfect Match
                </h3>
                <p className="text-sm text-muted-foreground">
                  Based on your preferences for {answers.family.toLowerCase()} fragrances,
                  {answers.wear.toLowerCase()} wear, and {answers.intensity.toLowerCase()}
                  intensity
                </p>
              </div>

              <div className="mb-8 space-y-3">
                {getRecommendations().map((rec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded border border-accent/30 bg-muted/50 p-4"
                  >
                    <span className="font-light text-foreground">{rec}</span>
                    <a
                      href={`https://wa.me/${BRAND.whatsappNumber}?text=I'm interested in ${rec} from ${BRAND.fullName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-80"
                    >
                      Order
                    </a>
                  </div>
                ))}
              </div>

              <button
                onClick={resetQuiz}
                className="w-full rounded border border-foreground bg-foreground p-3 text-center font-light text-background transition-opacity hover:opacity-80"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
