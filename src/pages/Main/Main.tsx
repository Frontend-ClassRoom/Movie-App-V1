import React, { useEffect, useState } from "react";
import { Posts } from "types/posts";
import { getPosts } from "api/postApi";
import styled from "styled-components";

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */
const Main = () => {
  const [post, setPost] = useState<Posts[]>();

  const fetchPosts = async () => {
    const posts = await getPosts();
    if (posts) {
      const slicePosts = posts.slice(0, 10);
      setPost(slicePosts);
    }
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
                <li key={index}>
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
    &:not(:first-child) {
      margin-top: 20px;
    }
    p {
      display: flex;
      > strong {
        flex: 0 0 80px;
      }
      &:not(:first-child) {
        margin-top: 8px;
      }
    }
  }
`;
