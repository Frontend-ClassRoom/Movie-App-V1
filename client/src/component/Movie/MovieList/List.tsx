import React from 'react';
import { Movie } from 'types/movie';
import { StyledList, ListDesc, ListThumbnail } from './Styled';
import Thumbnail from '../../Thumbnail/Thumbnail';

interface ListProps {
  movie: Movie;
}

const List = ({ movie }: ListProps) => {
  return (
    <StyledList>
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
