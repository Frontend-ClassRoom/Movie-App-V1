import axios, { AxiosInstance } from 'axios';
import { AsyncFunction } from 'hook/useAsync';
import { Movie, MovieResult, SimilarMovie, CreditsMovie } from 'types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_MOVIE_API;
class movieApi {
  private readonly apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: BASE_URL,
      timeout: 1000,
      // 요청이 timeout보다 오래 걸리면 요청이 중단됩니다.
      // timeout: 1000, 기본값은 '0'(시간 제한 없음)
    });
  }

  public getPopularMovie: AsyncFunction<MovieResult> = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
    const response = await this.apiClient.get(url);
    return response.data;
  };

  public getMovieInformation: AsyncFunction<Movie> = async (movieId) => {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`;
    const response = await this.apiClient.get(url);
    return response.data;
  };

  public getSimilarMovie: AsyncFunction<SimilarMovie> = async (movieId) => {
    const url = `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=ko-KR`;
    const response = await this.apiClient.get(url);
    return response.data;
  };

  public getCreditsMovie: AsyncFunction<CreditsMovie> = async (movieId) => {
    const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`;
    const response = await this.apiClient.get(url);
    return response.data;
  };

  public getSearchMovie: AsyncFunction<MovieResult> = async (name) => {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ko-KR&query=${name}&page=1&include_adult=false`;
    const response = await this.apiClient.get(url);
    return response.data;
  };
}

export default new movieApi();
