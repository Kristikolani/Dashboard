export interface CreateItem {
  title: string;
  description?: string;
  genres?: string[];
  releaseYear: number;
  category: string;
  runningTime: number;
  quality: string;
  cover?: string;
  photos?: string[];
  video?: string;
  link?: string;
}
