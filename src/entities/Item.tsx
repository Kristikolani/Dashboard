import { Comment } from "./Comment";
import { Review } from "./Review";

export interface Item {
  id: number;
  title: string;
  description: string;
  genres: string[];
  releaseYear: number;
  category: string;
  director: string;
  cast: string[];
  runningTime: number;
  quality: string;
  country: string;
  cover: string;
  photos: string[];
  video: string;
  link: string;
  rating: number;
  status: string;
  views: number;
  createdDate: string;
  commentsList: Comment[];
  reviewsList: Review[];
}
