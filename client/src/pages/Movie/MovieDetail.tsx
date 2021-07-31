import React, { useEffect } from 'react';
import movieApi from 'api/movieApi';
import useAsync from 'hook/useAsync';
import { Movie } from 'types/movie';
import { useParams } from 'react-router-dom';
import Thumbnail from 'component/Thumbnail/Thumbnail';
import { Rate } from 'component';
import { StyledMovieDetail, StyledBasicInfo } from './Styled';

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

  return (
    <StyledMovieDetail>
      <StyledBasicInfo>
        <div className="main-poster-wrap">
          <Thumbnail
            width={300}
            thumbnailUrl={data?.backdrop_path}
            className="main-poster"
          />
        </div>
        <div className="">
          <Thumbnail
            width={300}
            thumbnailUrl={data?.poster_path}
            className=""
          />
          <div>
            <div className="tit">{data?.title}</div>
            <Rate score={data?.vote_average} />
          </div>
        </div>
      </StyledBasicInfo>
      <div>{data?.original_title}</div>
    </StyledMovieDetail>
  );
};

export default MovieDetail;
