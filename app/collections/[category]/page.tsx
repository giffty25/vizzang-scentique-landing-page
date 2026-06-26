'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

interface Product {
  id: string
  name: string
  category: string
  description: string
  price: string
  image: string
}

const allProducts: Product[] = [
  {
    id: 1,
    name: 'Signature Perfume',
    category: 'Perfumes',
    description: 'Premium eau de parfum with long-lasting performance',
    price: '₦120,000',
    image: '/perfume-1.png',
  },
  {
    id: 2,
    name: 'Perfume Oil Essence',
    category: 'Perfume Oils',
    description: 'Concentrated fragrance oil for intimate wear',
    price: '₦95,000',
    image: '/perfume-oil.png',
  },
  {
    id: 3,
    name: 'Body Mist Cloud',
    category: 'Body Mists',
    description: 'Light and refreshing body mist for everyday elegance',
    price: '₦85,000',
    image: '/body-mist.png',
  },
  {
    id: 4,
    name: 'Ambiance Candle',
    category: 'Scented Candles',
    description: 'Hand-poured soy candle with luxurious scent throw',
    price: '₦110,000',
    image: '/scented-candle.png',
  },
  {
    id: 5,
    name: 'Reed Diffuser Home',
    category: 'Reed Diffusers',
    description: 'Elegant home fragrance with natural rattan diffusers',
    price: '₦150,000',
    image: '/reed-diffuser.png',
  },
  {
    id: 6,
    name: 'Drive Aroma',
    category: 'Car Fragrances',
    description: 'Premium car fragrance for luxury journeys',
    price: '₦35,000',
    image: '/car-fragrance.png',
  },
  {
    id: 7,
    name: 'Luxury Gift Set',
    category: 'Gift Collections',
    description: 'Curated collection perfect for gifting',
    price: '₦280,000',
    image: '/gift-collection.png',
  },
]

export default function CollectionPage({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category)
  const filteredProducts = decodedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === decodedCategory)

  const getWhatsAppLink = (product: Product) => {
    const message = `I'm interested in ordering ${product.name} (${product.category}) - ${product.price}`
    return `https://wa.me/2349035113502?text=${encodeURIComponent(message)}`
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link href="/#product-catalogue" className="text-primary hover:text-accent transition-colors mb-4 inline-block text-sm font-light">
              ← Back to Collections
            </Link>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              {decodedCategory} Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated {decodedCategory.toLowerCase()} selection
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-64 w-full overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-2 text-xs font-light uppercase tracking-widest text-primary">
                      {product.category}
                    </p>
                    <h3 className="mb-2 text-lg font-light text-foreground">
                      {product.name}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-muted-foreground">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xl font-light text-primary">
                        {product.price}
                      </span>
                      <a
                        href={getWhatsAppLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-foreground px-4 py-2 text-sm font-light text-background transition-opacity hover:opacity-80"
                      >
                        Order
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No products found in this category.</p>
              <Link href="/#product-catalogue" className="text-primary hover:text-accent transition-colors mt-4 inline-block">
                Return to Collections
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
