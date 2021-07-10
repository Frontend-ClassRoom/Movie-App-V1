import axios from 'axios';
import { MovieResult } from 'types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_MOVIE_API;

export const getPopularMovie = () => {
  const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
  return axios.get<MovieResult>(url).then((res) => res.data);
};
