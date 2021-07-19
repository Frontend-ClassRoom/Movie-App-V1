import { useEffect } from 'react';
import { getPopularMovie } from 'api/movieApi';
import useAsync from 'hook/useAsync';
import { Movie, MovieResult } from 'types/movie';
import { useState } from 'react';
import { StyledMovie } from './Styled';
import List from 'component/Movie/MovieList/List';

const MoviePage = () => {
  // TODO : Paging 처리
  const { data: movieList } = useAsync<MovieResult>(getPopularMovie);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (movieList && movies?.length === 0) {
      const { results } = movieList;
      setMovies(results);
    }
  }, [movieList]);

  return (
    <StyledMovie>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => <List key={movie.id} movie={movie} />)}
    </StyledMovie>
  );
};

export default MoviePage;
