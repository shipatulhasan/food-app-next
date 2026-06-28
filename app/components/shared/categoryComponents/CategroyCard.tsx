'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { TCategory } from '@/types/categroy'

interface CategoryCardProps {
  category: TCategory
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {

  const {categoryName:name,categoryImg:image} = category

  return (
    <Link
      href={`/shop?category=${category.id}`}
      className="flex flex-col items-center text-center group border p-6 rounded hover:border-primary-500"
    >
      <div className="w-full mb-3 overflow-hidden flex items-center justify-center">
        <Image
          src={image || '/assets/placeholder.png'}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full object-none group-hover:scale-105 transition-transform"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-900 group-hover:text-primary-500 transition">
        {name}
      </h3>
    </Link>
  )
}

export { CategoryCard }
