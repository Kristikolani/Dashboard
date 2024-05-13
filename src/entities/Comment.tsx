import { Item } from "./Item";
import { User } from "./User";

export interface Comment {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
  createdDate: String;
  item: Item;
  user: User;
}
