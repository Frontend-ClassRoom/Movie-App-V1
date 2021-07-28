import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import postApi from 'api/postApi';
import { useBreackPoints } from 'hook/useBreackPoints';
import { Posts, PostsSize } from 'types/posts';
import {
  StyledContainer,
  StyledDetail,
  StyledFront,
  StyledBack,
} from './Styled';
import { Button } from 'component';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { BiCalendarCheck } from 'react-icons/bi';
import useAsync from 'hook/useAsync';

/**
 * @description
 * Page의 Layout은 공통으로 뽑아서 사용? 폴더 내부에서 선언?
 */

const Detail = () => {
  const [flip, setFilp] = useState<boolean>(false);
  const { isMobileView } = useBreackPoints();

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

  const handleClick = () => {
    if (isMobileView) {
      if (flip) {
        setFilp(false);
      } else {
        setFilp(true);
      }
    }
    return;
  };

  console.log(isMobileView || flip);

  return (
    <StyledContainer>
      {detail ? (
        <StyledDetail
          onClick={handleClick}
          className={isMobileView ? (flip ? 'flip' : '') : ''}
        >
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
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                    <BsStar />
                    <BsStar />
                  </span>
                  <strong>2.5점</strong>
                </div>
              </dd>
            </dl>
            <dl>
              <dt className="title">Watched Date</dt>
              <dd>
                <div className="watched-date">
                  <BiCalendarCheck /> 2021-07-20
                </div>
              </dd>
            </dl>
            <dl>
              <dt className="title">Review</dt>
              <dd>
                <div className="review">{detail?.body}</div>
              </dd>
            </dl>
          </StyledBack>
        </StyledDetail>
      ) : (
        '...loading'
      )}
    </StyledContainer>
  );
};

export default Detail;
