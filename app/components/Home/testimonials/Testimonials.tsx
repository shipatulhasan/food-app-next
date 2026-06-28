import { TReview } from "@/types/review";
import { TestimonialsCarousel } from "./TestimonialsCarousel";
import { getReveiws } from "@/app/services/review.services";


export default async function Testimonials() {
  const testimonials = await getReveiws();

  return (
    <TestimonialsCarousel testimonials={testimonials} />
  );
}



export { Testimonials }
