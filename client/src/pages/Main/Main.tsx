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
import { StyledList, StyledListItem, StyledPhotoCard } from './Styled';
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

  return (
    <StyledMain>
      {/* <button onClick={execute}>click</button> */}
      {posts && (
        <>
          <p>{`posts length : ${posts.length}`}</p>
          {posts.length > 0 && (
            <StyledList>
              {posts.map(({ id, userId, title }, index) => (
                <StyledListItem
                  key={index}
                  onClick={() => handleDetailPost(id)}
                >
                  <StyledPhotoCard>
                    <div className="poster">
                      <img
                        src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20190327_89%2F15536523166004pQlw_JPEG%2Fmovie_image.jpg"
                        alt="movie poster"
                      />
                    </div>
                    <div className="info">
                      <strong>{title}</strong>
                      <span>{userId}</span>
                    </div>
                  </StyledPhotoCard>
                </StyledListItem>
              ))}
            </StyledList>
          )}
        </>
      )}
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.div`
  p {
    margin-bottom: 20px;
  }
  /* ul li {
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
  } */
`;
