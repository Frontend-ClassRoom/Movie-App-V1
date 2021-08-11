export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: GenresArray[];
  runtime: number;
}

export interface GenresArray {
  id: number;
  name: string;
}

export interface MovieResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface SimilarMovie {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
