import { TProduct } from "@/types/product";



export async function getProducts(): Promise<TProduct[]> {
  const response = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
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

  return data.foods ?? [];
}