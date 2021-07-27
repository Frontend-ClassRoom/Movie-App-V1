import { getPostDetail } from 'api/postApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBreackPoints } from 'hook/useBreackPoints';
import { getEmptyPosts, Posts, PostsSize } from 'types/posts';
import { StyledContainer, StyledDetail, StyledFront, StyledBack } from './Styled';
import { Button } from 'component';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { BiCalendarCheck } from 'react-icons/bi';

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */

const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const [detail, setDetail] = useState<Posts>();
  const [flip, setFilp] = useState<boolean>(false);
  const { isMobileView } = useBreackPoints();

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
    if (isMobileView) {
      if (flip) {
        setFilp(false);
      } else {
        setFilp(true);
      }
    }
    return;
  }
  console.log(isMobileView || flip)

  return (
    <StyledContainer>
      {detail ?
        <StyledDetail onClick={handleClick} className={isMobileView ? (flip ? "flip" : "") : ""}>
          <StyledFront className="photocard-front">
            <div className="poster">
              <img
                src="https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20190327_89%2F15536523166004pQlw_JPEG%2Fmovie_image.jpg"
                alt="movie poster"
                />
            </div>
            <div className="info">
              <strong>{detail?.title}</strong>
            </div>
          </StyledFront>

          <StyledBack className="photocard-back">
            <div className="info">
              <span className="register-date">등록일 : 2021.07.27</span>
              <Button size="medium" variant="secondary" label="View Details" />
            </div>
            <div className="title">{detail?.title}</div>
            <dl>
              <dt className="title">Rate</dt>
              <dd>
                <div className="rate">
                  <span>
                    <BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /><BsStar />
                  </span>
                  <strong>2.5점</strong>
                </div>
              </dd>
            </dl>
            <dl>
              <dt className="title">Watched Date</dt>
              <dd>
                <div className="watched-date"><BiCalendarCheck /> 2021-07-20</div>
              </dd>
            </dl>
            <dl>
              <dt className="title">Review</dt>
              <dd>
                <div className="review">
                  {detail?.body}
                </div>
              </dd>
            </dl>
          </StyledBack>
        </StyledDetail>
        : (
        '...loading'
      )}
    </StyledContainer>
  );
};

export default Detail;
