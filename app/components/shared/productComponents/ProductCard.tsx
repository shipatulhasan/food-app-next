'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { formatPrice } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
// import { useCart } from '@/lib/hooks/useCart'
import { TProduct } from '@/types/product'
import { Loader2, ShoppingCart } from 'lucide-react'
import { ProductRating } from './ProductRatings'

interface ProductCardProps {
  product: TProduct
  length?: number
}

const ProductCard: React.FC<ProductCardProps> = ({ product, length }) => {
  const discountPercentage =  0
  const path = usePathname()
  // const { addToCart, isAddingToCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [isAddingToCart, setIsAddingCart] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      // await addToCart(product.id, 1)

    } finally {
      setIsLoading(false)
    }
  }

  const getBorderClasses = (): string => {
    if (path.includes('shop')) return 'border rounded-md overflow-hidden'

    const id = Number(product.id)
    const hasTopBorder = !(id <= 4 && length !== 4)
    const hasRightBorder = id % 4 === 0 || id % 8 === 0

    return `border ${!hasTopBorder ? 'border-b-0' : 'border-b'} ${
      hasRightBorder ? 'border-r' : 'border-r'
    }`
  }

  return (
    <div className={`group ${getBorderClasses()}`}>
      <div className="relative bg-gray-100 overflow-hidden aspect-square">
        <Link href={`/products/${product.id}`} className="absolute inset-0">
          <Image
            src={product?.foodImg || '/assets/placeholder.png'}
            alt={product.title}
            fill
             sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-3 left-3">
            -{discountPercentage}%
          </Badge>
        )}

        {/* Stock Status */}
        {/* {!product.inStock && (
          <Badge className="absolute top-3 right-3">Out of Stock</Badge>
        )} */}
      </div>

      {/* Content */}
      <div className="p-4 flex justify-between items-center">
        <div>
          {/* Product Name */}
          <Link href={`/products/${product.id}`}>
            <h3 className="text-sm font-normal text-gray-700 line-clamp-2 hover:text-primary-500 transition">
              {product.title}
            </h3>
          </Link>

          {/* Price */}
          <div className="flex items-center gap-2 mt-1">
            <span className="font-medium text-gray-900">
              {formatPrice(product.price)}
            </span>
            {product.price && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>

          <ProductRating
            rating={5}
            reviews={3}
          />
        </div>
        <Button
          onClick={handleAddToCart}
          // disabled={isLoading || isAddingToCart || !product.inStock}
          className="bg-[#F2F2F2] hover:bg-primary-100 transition rounded-full p-0 w-12 h-12 flex items-center justify-center flex-shrink-0"
          variant="ghost"
        >
          {isLoading || isAddingToCart ? (
            <Loader2 size={20} className="animate-spin text-primary-500" />
          ) : (
            <ShoppingCart size={24} className="text-gray-900" />
          )}
        </Button>
      </div>
    </div>
  )
}

export { ProductCard }

