import React from 'react';
import useAsync from 'hook/useAsync';
import { Movie, MovieResult } from 'types/movie';
import { StyledMovie } from './Styled';
import List from 'component/Movie/MovieList/List';
import movieApi from 'api/movieApi';

const MoviePage = () => {
  // TODO : Paging 처리
  const { data: movieList } = useAsync<MovieResult>(
    movieApi.getPopularMovie,
    true
  );

  return (
    <StyledMovie>
      {movieList &&
        movieList.results.length > 0 &&
        movieList.results.map((movie: Movie) => (
          <List key={movie.id} movie={movie} />
        ))}
    </StyledMovie>
  );
};

export default MoviePage;
