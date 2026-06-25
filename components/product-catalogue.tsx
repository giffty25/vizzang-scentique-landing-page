import Image from 'next/image'

interface Product {
  id: string
  name: string
  category: string
  description: string
  price: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Signature Perfume',
    category: 'Perfumes',
    description: 'Premium eau de parfum with long-lasting performance',
    price: '₦8,500',
    image: '/perfume-1.png',
  },
  {
    id: 2,
    name: 'Perfume Oil Essence',
    category: 'Perfume Oils',
    description: 'Concentrated fragrance oil for intimate wear',
    price: '₦5,500',
    image: '/perfume-oil.png',
  },
  {
    id: 3,
    name: 'Body Mist Cloud',
    category: 'Body Mists',
    description: 'Light and refreshing body mist for everyday elegance',
    price: '₦3,500',
    image: '/body-mist.png',
  },
  {
    id: 4,
    name: 'Ambiance Candle',
    category: 'Scented Candles',
    description: 'Hand-poured soy candle with luxurious scent throw',
    price: '₦4,500',
    image: '/scented-candle.png',
  },
  {
    id: 5,
    name: 'Reed Diffuser Home',
    category: 'Reed Diffusers',
    description: 'Elegant home fragrance with natural rattan diffusers',
    price: '₦6,000',
    image: '/reed-diffuser.png',
  },
  {
    id: 6,
    name: 'Drive Aroma',
    category: 'Car Fragrances',
    description: 'Premium car fragrance for luxury journeys',
    price: '₦2,500',
    image: '/car-fragrance.png',
  },
  {
    id: 7,
    name: 'Luxury Gift Set',
    category: 'Gift Collections',
    description: 'Curated collection perfect for gifting',
    price: '₦15,000',
    image: '/gift-collection.png',
  },
]

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

export function ProductCatalogue() {
  const getWhatsAppLink = (product: Product) => {
    const message = `I'm interested in ordering ${product.name} (${product.category}) - ${product.price}`
    return `https://wa.me/2349035113502?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="bg-background py-16 md:py-24">
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
            <button
              key={cat}
              className="rounded-full border border-border px-4 py-2 text-sm font-light text-foreground transition-all hover:border-accent hover:bg-muted"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative h-64 w-full overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-light uppercase tracking-widest text-accent">
                  {product.category}
                </p>
                <h3 className="mb-2 text-lg font-light text-foreground">
                  {product.name}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {product.description}
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-light text-accent">
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
      </div>
    </section>
  )
}
