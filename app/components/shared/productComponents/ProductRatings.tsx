export const ProductRating = ({
  rating,
  reviews,
}: {
  rating: number
  reviews: number
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < Math.floor(rating) ? 'text-warning' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
      <span className="text-xs text-gray-500">({reviews})</span>
    </div>
  )
}
