import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { AppRoutePath } from 'types/routes';
import CardList from 'component/Card/CardList';
import { StyledCardContainer } from './Styled';

const CardPage = () => {
  const { posts } = useSelector((state: RootState) => state.PostReducer);
  const history = useHistory();

  return (
    <>
      <button onClick={() => history.push(AppRoutePath.WRITE_PATH)}>
        Post 생성
      </button>
      <StyledCardContainer>
        {posts && posts.map((post) => <CardList post={post} />)}
      </StyledCardContainer>
    </>
  );
};

export default CardPage;
