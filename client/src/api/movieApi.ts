import axios from 'axios';
import { Movie, MovieResult } from 'types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_MOVIE_API;

export const getPopularMovie = () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
  return axios.get<MovieResult>(url).then((res) => res.data);
};

export const getMovieInformation = (movie_id: number) => {
  const url = `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=ko-KR`;
  return axios.get<Movie>(url).then((res) => res.data);
};
