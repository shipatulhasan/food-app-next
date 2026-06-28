import { TReview } from "@/types/review";
export async function getReveiws(): Promise<TReview[]> {
  const response = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/reviews",
    {
      next: {
        revalidate: 3600, // cache for 1 hour
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await response.json();

  return data.reviews ?? [];
}