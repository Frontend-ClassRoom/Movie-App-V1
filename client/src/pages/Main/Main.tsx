import React, { useEffect, useState } from 'react';
import { Posts } from 'types/posts';
import { getPosts } from 'api/postApi';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import useAsync from 'hook/useAsync';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducer';
import { LogoutAction } from 'store/action';
import Info from 'component/User/Info';
/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */
const Main = () => {
  const history = useHistory();
  const login = useSelector((state: RootState) => state.AuthReducer);
  const dispatch = useDispatch();
  const { execute, data: post } = useAsync<Posts[]>(getPosts); // useAsync<Posts[]>(getPosts, true) => 이벤트로 fetch
  const [posts, setPosts] = useState<Posts[]>();

  useEffect(() => {
    if (post && !posts) {
      const slicePost = post.slice(0, 10);
      setPosts(slicePost);
    }

    return () => {
      setPosts([]);
    };
  }, [post]);
  /**
   *
   * @description useAxios
   *
   * execute => useAsync Promise 함수를 실행하는 함수
   * useAsnyc 인자 2번째 값을 false로 전달하고 execute를 가져와서
   * 버튼 onClick 또는 이벤트를 통해 데이터를 갱신 할 경우 해당 이벤트에 execute 실행
   *
   * data => Promise 결과를 담는 결과값
   * status => 함수 실행시 현재 상태를 나타내는 값 ( "idle" | "pending" | "success" | "error" )
   * error => error 발생시 error 결과값
   *
   * @todo
   * 렌더링 확인하기 => data 결과 값이 2번 발생 => state 추가로 useEffect 조건처리
   * 현재 AxiosRetun utils 함수를 사용하지 못함, 수정 및 사용여부 다시 확인
   * (useAsync Hook 의 상태값을 변경못함)
   *
   */

  const handleDetailPost = (postId: number) => {
    if (!postId) return;
    history.push(`/post/${postId}`);
  };

  const handleLogout = () => {
    if (login.isLoggedIn) {
      dispatch(LogoutAction());
    }
  };

  return (
    <StyledMain>
      {/* <button onClick={execute}>click</button> */}
      <Info user={login} logout={handleLogout} />
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
  padding: 50px;
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
