import { Button } from '@/components/ui/button'
import { TProduct } from '@/types/product'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { ProductCard } from '../shared/productComponents/ProductCard'
import { ProductSkeletonCard } from '../shared/productComponents/ProductSkeletonCard'
import { getProducts } from '@/app/services/product.service'


interface ProductSectionProps {
  title?: string
  variant?: 'popular' | 'featured'
}

const ProductSection: React.FC<ProductSectionProps> = async({
  title = 'Popular Products',
  variant = 'popular',
}) => {
  // Fetch data based on variant
  // const popularQuery = usePopularProduct()
  // const featuredQuery = useFeaturedProducts()
  const isLoading =false

  const isPopular = variant === 'popular'
  const products:TProduct[] = await getProducts()
  // const {
  //   data: products = [],
  //   isLoading,
  //   error,
  // } = isPopular ? popularQuery : featuredQuery

  // if (error) {
  //   return <ErrorState message="Failed to load products" />
  // }

  return (
    <section className="pb-10">
      <main className='container mx-auto'>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h2>
          </div>
          <Button
            variant="ghost"
            className="text-primary-500 hover:bg-primary-100  flex items-center gap-2"
          >
            View All <ArrowRight />
          </Button>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${isLoading && 'gap-4'}`}
        >
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeletonCard key={i} />
            ))
          ) : Array.isArray(products) && products.length > 0 ? (
            // Products grid
            products
              .slice(0, 8)
              .map((product: TProduct) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  length={products.length}
                />
              ))
          ) : (
            // Empty state
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No products available</p>
            </div>
          )}
        </div>
      </main>
    </section>
  )
}

export { ProductSection }

