import { Review } from "./Review";
import { Comment } from "./Comment";

export interface User {
  id: number;
  username: string;
  email: string;
  subscription: string;
  firstName: string;
  lastName: string;
  status: string;
  createdDate: string;
  rights: string;
  comments: Comment[];
  reviews: Review[];
}
