import { getPostDetail } from "api/postApi";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Posts } from "types/posts";

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */
const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<Posts>();

  const fetchPostDetail = async () => {
    if (!id) return;
    const postId = parseInt(id);
    const post = await getPostDetail(postId);
    if (post) {
      setDetail(post);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPostDetail();
    }
  }, [id]);

  return (
    <StyledDetail>
      {detail ? (
        <>
          <p>{detail?.userId}</p>
          <p>{detail?.title}</p>
          <p>{detail?.body}</p>
        </>
      ) : (
        "...loading"
      )}
    </StyledDetail>
  );
};

export default Detail;

const StyledDetail = styled.div`
  padding: 50px;
`;
