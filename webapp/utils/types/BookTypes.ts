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

export type BookResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: BookFormType[] | [];
};

export type BookCategory = {
  category:
    | 'Mystery'
    | 'Romance'
    | 'Science Fiction'
    | 'Fantasy'
    | 'Self-help'
    | 'Biography'
    | 'Horror'
    | 'Thriller'
    | 'Tragedy'
    | 'Political'
    | 'Experimental Literature'
    | 'Technical/Instructional';
};

export type BookStatsType = {
  global_rating: number;
  review_total: number;
  five_star_ratings: number;
  four_star_ratings: number;
  three_star_ratings: number;
  two_star_ratings: number;
  one_star_ratings: number;
};
