import { getPostDetail } from 'api/postApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmptyPosts, Posts, PostsSize } from 'types/posts';
import { StyledContainer, StyledDetail } from './Styled';

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<Posts>();
  const [flip, setFilp] = useState<boolean>(false);

  const fetchPostDetail = async () => {
    // fetch Hook 사용 여부 확인필요 => ex) useAxios
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
    return () => {
      setDetail(getEmptyPosts());
    };
  }, [id]);

  const handleClick = () => {
    if (flip) {
      setFilp(false);
      console.log("test", flip)
    } else {
      setFilp(true);
      console.log("test", flip)
    }
  }

  return (
    <StyledContainer>
      {detail ?
        <StyledDetail onClick={handleClick} className={`review-${!flip ? "front" : "back"}`}>
            {!flip ? (
              <>
                <div className="poster">
                  <img
                    src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20190327_89%2F15536523166004pQlw_JPEG%2Fmovie_image.jpg"
                    alt="movie poster"
                  />
                </div>
                <div className="info">
                  <strong>{detail?.title}</strong>
                  <span>{detail?.userId}</span>
                </div>
              </>
            ) : (
              <>
                <div className="info">
                  <strong>{detail?.title}</strong>
                  <span>{detail?.userId}</span>
                </div>
              </>
            )}
        </StyledDetail>
        : (
        '...loading'
      )}
    </StyledContainer>
  );
};

export default Detail;
