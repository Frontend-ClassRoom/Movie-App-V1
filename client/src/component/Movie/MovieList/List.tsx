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
  console.log(movie);
  return (
    <StyledList onClick={() => handleDetailMovie(movie.id)}>
      <ListThumbnail>
        <Thumbnail width={300} thumbnailUrl={movie.poster_path} />
      </ListThumbnail>
      <ListDesc>
        <p className="title">{movie.title}</p>
        <p className="release-date">{movie.release_date}</p>
        <p className="overview">{movie.overview}</p>
      </ListDesc>
    </StyledList>
  );
};

export default List;
