// Skeleton Card Component for category loading states
export const CategorySkeletonCard = () => (
  <div className="animate-pulse">
    <div className="w-full aspect-square bg-gray-200 rounded-lg mb-3" />
    {/* <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" /> */}
  </div>
)

// Grid of skeleton cards for category loading
export const CategorySkeletonGrid = ({ count = 8 }: { count?: number }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {Array.from({ length: count }).map((_, i) => (
      <CategorySkeletonCard key={i} />
    ))}
  </div>
)