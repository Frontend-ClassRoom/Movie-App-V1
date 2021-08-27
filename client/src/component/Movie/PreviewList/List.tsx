import React from 'react';
import { Movie } from 'types/movie';
import { StyledPreview, StyledPreviewItem } from './Styled';

interface ListProps {
  movie: Movie[];
  onClick: (movie: Movie) => void;
}

const List = ({ movie, onClick }: ListProps) => {
  return (
    <StyledPreview>
      {movie && movie.length > 0
        ? movie.map((list) => (
            <StyledPreviewItem key={list.id} onClick={() => onClick(list)}>
              <strong>{list.original_title}</strong>
              <span>{list.vote_average}</span>
            </StyledPreviewItem>
          ))
        : '결과 없음'}
    </StyledPreview>
  );
};

export default List;
