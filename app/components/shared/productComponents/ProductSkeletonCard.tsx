// Skeleton Card Component for product loading states
export const ProductSkeletonCard = () => (
  <div className="animate-pulse">
    <div className="w-full aspect-square bg-gray-200 rounded-lg mb-3" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />
    <div className="h-8 bg-gray-200 rounded w-1/3" />
  </div>
)

// Grid of skeleton cards for product loading
export const ProductSkeletonGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {Array.from({ length: count }).map((_, i) => (
      <ProductSkeletonCard key={i} />
    ))}
  </div>
)
