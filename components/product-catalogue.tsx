import Image from 'next/image'
import Link from 'next/link'
import { allProducts, type Product } from '@/lib/products'

const categories = [
  'All',
  'Perfumes',
  'Perfume Oils',
  'Body Mists',
  'Scented Candles',
  'Reed Diffusers',
  'Car Fragrances',
  'Gift Collections',
]

const WHATSAPP_NUMBER = '2349035113502'

export function ProductCatalogue() {
  const getWhatsAppLink = (product: Product) => {
    const message = `Hello Vizzang Scentique. I'd like to order ${product.name} (${product.size}) for ${product.price}. Please tell me more about availability and delivery options.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="product-catalogue" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-light md:text-4xl text-foreground">
            Fragrance Collection
          </h2>
          <p className="text-muted-foreground">
            Discover our curated selection of luxury fragrances and home scents
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/collections/${cat}`}
              className="rounded-full border border-border px-4 py-2 text-sm font-light text-foreground transition-all hover:border-primary hover:bg-muted"
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary"
            >
              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {!product.stock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <p className="text-white font-bold">Pre-order</p>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-light uppercase tracking-widest text-primary">
                  {product.category}
                </p>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-3 flex-1 text-sm text-muted-foreground">
                  {product.description}
                </p>

                <div className="space-y-2 mb-4 pb-4 border-b border-border">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">Fragrance:</span> {product.fragranceFamily}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">Size:</span> {product.size}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-primary">
                    {product.price}
                  </span>
                </div>

                <a
                  href={getWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded bg-primary text-black py-2 text-center text-sm font-bold hover:bg-accent transition-colors"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
