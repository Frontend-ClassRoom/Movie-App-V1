import { getPostDetail } from 'api/postApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEmptyPosts, Posts, PostsSize } from 'types/posts';
import { StyledDetail } from './Styled';

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */
const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<Posts>();
  const [flip, setFilp] = useState<boolean>(false);
  const [size, setSize] = useState<PostsSize>({width: 0, height: 0});

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

  useEffect(() => {
    const width: number = document.body.clientWidth - 32;
    const height: number = document.body.clientHeight - 140;

    if (width > height) {
      return setSize({width: width * 0.7, height: height})
    } else {
      return setSize({width: width, height: height * 1.3})
    }
  }, []);

  return (
    <StyledDetail onClick={handleClick} width={size.width} height={size.height}>
      {detail ? 
          flip ? (
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
          )
         : (
        '...loading'
      )}
    </StyledDetail>
  );
};

export default Detail;
