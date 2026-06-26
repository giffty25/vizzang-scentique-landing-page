import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { allProducts } from '@/lib/products'
import { CollectionClient } from './client'

export default async function CollectionPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params
  
  // Decode the category from URL
  const decodedCategory = resolvedParams.category ? decodeURIComponent(resolvedParams.category) : ''
  
  // Filter products based on category
  const filteredProducts = decodedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === decodedCategory)
  
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
            <CollectionClient products={filteredProducts} />
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
