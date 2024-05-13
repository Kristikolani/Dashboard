import { Item } from "./Item";
import { User } from "./User";

export interface Review {
  id: number;
  text: string;
  rating: number;
  likes: number;
  dislikes: number;
  createdDate: string;
  item: Item;
  user: User;
}
