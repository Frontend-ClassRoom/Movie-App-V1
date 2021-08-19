import React from 'react';
import { Post } from 'store/reducer/Posts';
import { StyledCardList } from './Styled';

interface CardListProps {
  post: Post;
}

const CardList = ({ post }: CardListProps) => {
  return (
    <StyledCardList>
      <p>{post.contents}</p>
    </StyledCardList>
  );
};

export default CardList;
