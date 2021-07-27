import React from 'react';
import { Movie, MovieResult } from 'types/movie';
import { useState } from 'react';
import { StyledMovie } from './Styled';
import List from 'component/Movie/MovieList/List';

const MoviePage = () => {
  // TODO : Paging 처리
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <StyledMovie>
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => <List key={movie.id} movie={movie} />)}
    </StyledMovie>
  );
};

export default MoviePage;
