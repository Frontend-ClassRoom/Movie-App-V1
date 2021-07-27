import React, { useEffect, useState } from 'react';
import { Posts } from 'types/posts';
import postApi from 'api/postApi';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import useAsync from 'hook/useAsync';

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */
const Main = () => {
  const history = useHistory();
  const {
    data: posts,
    loading,
    error,
  } = useAsync<Posts[]>(postApi.getPosts, true);

  const handleDetailPost = (postId: number) => {
    if (!postId) return;
    history.push(`/post/${postId}`);
  };

  return (
    <StyledMain>
      {/* <button onClick={execute}>click</button> */}
      {posts && (
        <>
          <h1>{`posts length : ${posts.length}`}</h1>
          {posts.length > 0 && (
            <ul>
              {posts.map(({ id, userId, title, body }, index) => (
                <li key={index} onClick={() => handleDetailPost(id)}>
                  <p>
                    <strong>UserId</strong>
                    <span>{userId}</span>
                  </p>
                  <p>
                    <strong>title</strong>
                    <span>{title}</span>
                  </p>
                  <p>
                    <strong>body</strong>
                    <span>{body}</span>
                  </p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  h1 {
    margin-bottom: 20px;
  }
  ul li {
    padding: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
    p {
      display: flex;
      > strong {
        flex: 0 0 80px;
      }
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`;
