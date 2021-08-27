import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { AppRoutePath } from 'types/routes';
import CardList from 'component/Card/CardList';
import { StyledCardContainer } from './Styled';
import { ClearPostAction } from 'store/action/Posts';

const CardPage = () => {
  const { posts } = useSelector((state: RootState) => state.PostReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClearPost = () => {
    if (posts.length === 0) return;
    dispatch(ClearPostAction());
  };

  return (
    <>
      <button onClick={() => history.push(AppRoutePath.WRITE_PATH)}>
        Post 생성
      </button>
      <button onClick={handleClearPost} title="전체 삭제">
        전체 삭제
      </button>
      <StyledCardContainer>
        {posts &&
          posts.map((post) => <CardList key={post.postId} post={post} />)}
      </StyledCardContainer>
    </>
  );
};

export default CardPage;
