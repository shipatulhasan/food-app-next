import { Category } from "../type";

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/categories",
    {
      next: {
        revalidate: 3600, // cache for 1 hour
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();

  return data.categories ?? [];
}