

import { getCategories } from '@/app/services/category.service'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { CategorySkeletonCard } from '../shared/categoryComponents/CategorySkeleton'
import { TCategory } from '@/types/categroy'
import { CategoryCard } from '../shared/categoryComponents/CategroyCard'

const PopularCategories: React.FC = async() => {
  const categories = await getCategories()
  const isLoading = false

  // if (error) {
  //   return (
  //     <section className="py-10">
  //       <Container>
  //         <div className="text-center text-red-500">
  //           Failed to load categories
  //         </div>
  //       </Container>
  //     </section>
  //   )
  // }

  const categoryList = categories || []

  return (
    <section className="py-10">
      <div className='container mx-auto'>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Popular Categories
          </h2>
          <Button
            variant="ghost"
            className="text-primary-500 hover:bg-primary-100  flex items-center gap-2"
          >
            View All <ArrowRight />
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {isLoading ? (
            // Loading skeleton
            Array.from({ length: 8 }).map((_, i) => (
              <CategorySkeletonCard key={i} />
            ))
          ) : categoryList.length > 0 ? (
            // Categories grid
            categoryList
              .slice(0, 4)
              .map((category: TCategory) => (
                <CategoryCard key={category.id} category={category} />
              ))
          ) : (
            // Empty state
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No categories available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export { PopularCategories }
