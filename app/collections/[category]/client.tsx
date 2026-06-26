'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Product } from '@/lib/products'

const WHATSAPP_NUMBER = '2349035113502'

interface ProductDetailsModalProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
  if (!isOpen) return null

  const whatsappMessage = `Hello Vizzang Scentique. I'd like to order ${product.name} (${product.size}) for ${product.price}. Please tell me more about availability and delivery options.`
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-background p-8">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-foreground">{product.name}</h2>
          <button
            onClick={onClose}
            className="text-xl font-light text-muted-foreground hover:text-foreground"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="relative h-80 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-light text-primary uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
            </div>

            <div>
              <h3 className="text-sm font-light text-muted-foreground uppercase tracking-widest mb-2">
                Description
              </h3>
              <p className="text-base text-foreground">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-widest">
                  Fragrance Family
                </p>
                <p className="text-sm font-light text-foreground mt-1">{product.fragranceFamily}</p>
              </div>
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-widest">
                  Size
                </p>
                <p className="text-sm font-light text-foreground mt-1">{product.size}</p>
              </div>
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-widest">
                  Longevity
                </p>
                <p className="text-sm font-light text-foreground mt-1">{product.longevity}</p>
              </div>
              <div>
                <p className="text-xs font-light text-muted-foreground uppercase tracking-widest">
                  Best For
                </p>
                <p className="text-sm font-light text-foreground mt-1">{product.bestFor}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-light text-muted-foreground uppercase tracking-widest mb-3">
                Fragrance Profile
              </h3>
              <div className="space-y-2">
                <p className="text-sm"><span className="text-primary font-semibold">Top Notes:</span> {product.topNotes}</p>
                <p className="text-sm"><span className="text-primary font-semibold">Heart Notes:</span> {product.heartNotes}</p>
                <p className="text-sm"><span className="text-primary font-semibold">Base Notes:</span> {product.baseNotes}</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-light text-muted-foreground uppercase tracking-widest mb-3">
                Perfect For
              </h3>
              <div className="space-y-1 text-sm">
                <p><span className="text-primary font-semibold">Occasion:</span> {product.occasion}</p>
                <p><span className="text-primary font-semibold">Season:</span> {product.season}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-black py-3 rounded font-bold text-center hover:bg-accent transition-colors"
              >
                Order on WhatsApp
              </a>
              <button
                onClick={onClose}
                className="flex-1 border border-primary text-primary py-3 rounded font-bold hover:bg-secondary transition-colors"
              >
                Close
              </button>
            </div>

            {!product.stock && (
              <p className="text-sm text-red-600 text-center">Currently out of stock, pre-order available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface CollectionClientProps {
  products: Product[]
}

export function CollectionClient({ products }: CollectionClientProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const getWhatsAppLink = (product: Product) => {
    const message = `Hello Vizzang Scentique. I'd like to order ${product.name} (${product.size}) for ${product.price}. Please tell me more about availability and delivery options.`
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary"
          >
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
                <div className="text-xs text-muted-foreground">
                  <span className="font-semibold text-primary">Best For:</span> {product.bestFor}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-primary">
                  {product.price}
                </span>
              </div>

              <div className="flex gap-2">
                <a
                  href={getWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-primary text-black py-2 rounded font-bold text-center text-sm hover:bg-accent transition-colors"
                >
                  Order
                </a>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="flex-1 border border-primary text-primary py-2 rounded font-bold text-sm hover:bg-secondary transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProductDetailsModal
        product={selectedProduct!}
        isOpen={selectedProduct !== null}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
