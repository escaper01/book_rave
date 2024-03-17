export type BookFormType = {
  id?: number;
  name: string;
  description?: string;
  author: string;
  publication_data: string;
  created_at: string;
  updated_at?: string;
  added_by?: string;
  cover: string;
  category: string;
  global_rating: number;
};

export type ReviewsResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: BookFormType[] | [];
};
