import React from 'react';
import { Movie } from 'types/movie';
import { StyledList, ListDesc, ListThumbnail } from './Styled';
import Thumbnail from 'component/Thumbnail/Thumbnail';
import { useHistory } from 'react-router-dom';

interface ListProps {
  movie: Movie;
}

const List = ({ movie }: ListProps) => {
  const history = useHistory();
  const handleDetailMovie = (moveId: number) => {
    if (!moveId) return;
    history.push(`/movie-detail/${moveId}`);
  };

  return (
    <StyledList onClick={() => handleDetailMovie(movie.id)}>
      <ListDesc>
        <strong>{movie.title}</strong>
        <p>{movie.overview}</p>
      </ListDesc>
      <ListThumbnail>
        <Thumbnail width={300} thumbnailUrl={movie.backdrop_path} />
      </ListThumbnail>
    </StyledList>
  );
};

export default List;
