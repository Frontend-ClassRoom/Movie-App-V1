import React from 'react';
import { Movie } from 'types/movie';
import { StyledList, ListDesc, ListThumbnail } from './Styled';
import Thumbnail from 'component/Thumbnail/Thumbnail';
import { useHistory } from 'react-router-dom';

interface ListProps {
  movie: Movie;
  type?: 'card' | 'list';
}

const List = ({ movie, type = 'list' }: ListProps) => {
  const history = useHistory();
  const handleDetailMovie = (moveId: number) => {
    if (!moveId) return;
    history.push(`/movie-detail/${moveId}`);
  };

  return (
    <StyledList className={type} onClick={() => handleDetailMovie(movie.id)}>
      <ListThumbnail>
        <Thumbnail
          width={100}
          thumbnailUrl={movie.poster_path}
          className="movie-poster"
        />
      </ListThumbnail>
      <ListDesc>
        <p className="title">{movie.title}</p>
        <p className="release-date">{movie.release_date}</p>
        {type === 'list' && <p className="overview">{movie.overview}</p>}
      </ListDesc>
    </StyledList>
  );
};

export default List;
