import React, { useEffect, useState } from "react";
import { Posts } from "types/posts";
import { getPosts } from "api/postApi";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */
const Main = () => {
  const history = useHistory();
  const [post, setPost] = useState<Posts[]>();

  const fetchPosts = async () => {
    // fetch Hook 사용 여부 확인필요
    const posts = await getPosts();
    if (posts) {
      const slicePosts = posts.slice(0, 10);
      setPost(slicePosts);
    }
  };

  const handleDetailPost = (postId: number) => {
    if (!postId) return;
    history.push(`/${postId}`);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <StyledMain>
      {post && (
        <>
          <h1>{`posts length : ${post.length}`}</h1>
          {post.length > 0 && (
            <ul>
              {post.map(({ id, userId, title, body }, index) => (
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
