export interface TReview {
  id: number;
  user: string;
  email: string;
  photo: string;
  rating: number;
  review: string;
  likes: string[];
  date: string; // ISO 8601 date string
}