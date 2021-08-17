import React, { useEffect } from 'react';
import movieApi from 'api/movieApi';
import useAsync from 'hook/useAsync';
import { Movie, SimilarMovie } from 'types/movie';
import { useParams } from 'react-router-dom';
import Thumbnail from 'component/Thumbnail/Thumbnail';
import { Rate, Badge } from 'component';
import {
  StyledMovieDetail,
  StyledBasicWrap,
  StyledBasicInfo,
  StyledVisualPoster,
  StyledMovie,
} from './Styled';
import List from 'component/Movie/MovieList/List';

const MovieDetail = () => {
  const { run: movieDetail, data } = useAsync<Movie>(
    movieApi.getMovieInformation
  );
  const { run: similarMovie, data: similarMovieData } = useAsync<SimilarMovie>(
    movieApi.getSimilarMovie
  );
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      movieDetail(id);
      similarMovie(id);
    }
  }, [id]);

  console.log(data, similarMovieData?.results);

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
            <Rate score={data?.vote_average} className="rote" />
            <Badge items={data && data?.genres} hash={true} />
          </div>
        </StyledBasicInfo>
      </StyledBasicWrap>
      <div>
        <div>
          <strong>개봉일</strong>
          <p>{data?.release_date}</p>
        </div>
        <div>
          <strong>런타임</strong>
          <p>
            {data && Math.floor(data?.runtime / 60)}시간 {data?.runtime % 60}분
          </p>
        </div>
        <div>
          <strong>평점</strong>
          <Rate score={data?.vote_average} />
        </div>
        <div>
          <strong>줄거리</strong>
          <p>{data?.overview}</p>
        </div>
      </div>
      <div>
        <strong>유사한 영화</strong>
        <StyledMovie>
          {similarMovieData &&
            similarMovieData.results.length > 0 &&
            similarMovieData.results.map((movie: Movie, index) => {
              return index > 5 ? '' : <List key={movie.id} movie={movie} />;
            })}
        </StyledMovie>
      </div>
    </StyledMovieDetail>
  );
};

export default MovieDetail;
