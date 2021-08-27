import React from 'react';
import { Post } from 'store/reducer/Posts';
import { StyledCardList } from './Styled';

interface CardListProps {
  post: Post;
}

const CardList = ({ post }: CardListProps) => {
  const BACKDROP_PATH = `https://image.tmdb.org/t/p/w500`;
  return (
    <StyledCardList>
      <div>
        <strong>{post.title}</strong>
        <p>{post.contents}</p>
      </div>
      <img src={`${BACKDROP_PATH}${post.contentImage}`} alt="영화 이미지" />
    </StyledCardList>
  );
};

export default CardList;
