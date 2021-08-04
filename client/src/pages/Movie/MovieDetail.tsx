import React, { useEffect } from 'react';
import movieApi from 'api/movieApi';
import useAsync from 'hook/useAsync';
import { Movie } from 'types/movie';
import { useParams } from 'react-router-dom';
import Thumbnail from 'component/Thumbnail/Thumbnail';
import { Rate, Badge } from 'component';
import {
  StyledMovieDetail,
  StyledBasicWrap,
  StyledBasicInfo,
  StyledVisualPoster,
} from './Styled';

const MovieDetail = () => {
  const { run: movieDetail, data } = useAsync<Movie>(
    movieApi.getMovieInformation
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      movieDetail(id);
    }
  }, [id]);

  console.log(data, data?.genres);

  return (
    <StyledMovieDetail>
      <StyledBasicWrap>
        <StyledVisualPoster>
          <Thumbnail
            width={300}
            thumbnailUrl={data?.backdrop_path}
            className="visual-poster"
          />
        </StyledVisualPoster>
        <StyledBasicInfo>
          <Thumbnail
            width={100}
            thumbnailUrl={data?.poster_path}
            className="main-poster"
          />
          <div>
            <div className="tit">{data?.title}</div>
            <Rate score={data?.vote_average} />
            <Badge items={data && data?.genres} hash={true} />
          </div>
        </StyledBasicInfo>
      </StyledBasicWrap>
      <div>{data?.overview}</div>
    </StyledMovieDetail>
  );
};

export default MovieDetail;
