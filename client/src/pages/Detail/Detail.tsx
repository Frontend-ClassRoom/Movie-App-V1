import postApi from 'api/postApi';
import useAsync from 'hook/useAsync';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Posts } from 'types/posts';

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */
const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const {
    run: getDetail,
    data: detail,
    loading,
    error,
  } = useAsync<Posts>(postApi.getPostDetail); // 2번째 인자값이 없다면 함수를 실행해야 하므로 run 함수 실행

  useEffect(() => {
    if (id) {
      getDetail(id);
    }
  }, [id]);

  return (
    <StyledDetail>
      {!loading ? (
        <>
          <p>{detail?.userId}</p>
          <p>{detail?.title}</p>
          <p>{detail?.body}</p>
        </>
      ) : (
        '...loading'
      )}
    </StyledDetail>
  );
};

export default Detail;

const StyledDetail = styled.div`
  padding: 50px;
`;
