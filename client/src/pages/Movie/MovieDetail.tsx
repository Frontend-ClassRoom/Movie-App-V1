import React, { useEffect } from 'react';
import movieApi from 'api/movieApi';
import useAsync from 'hook/useAsync';
import { Movie, SimilarMovie } from 'types/movie';
import { useParams } from 'react-router-dom';
import Thumbnail from 'component/Thumbnail/Thumbnail';
import { Rate, Badge } from 'component';
import {
  StyledMovieDetail,
  StyledSummary,
  StyledInfo,
  StyledVisualPoster,
  StyledMovie,
  StyledBasicInfo,
  StyledDiscription,
  StyledDiscriptionItem,
  StyledSimilar,
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
      <StyledSummary>
        <StyledVisualPoster>
          <Thumbnail
            width={300}
            thumbnailUrl={data?.backdrop_path}
            className="visual-poster"
          />
        </StyledVisualPoster>
        <StyledInfo>
          <Thumbnail
            width={100}
            thumbnailUrl={data?.poster_path}
            className="main-poster"
          />
          <StyledBasicInfo>
            <div className="tit">{data?.title}</div>
            <Rate score={data?.vote_average} className="rote" />
            <Badge items={data && data?.genres} hash={true} />
          </StyledBasicInfo>
        </StyledInfo>
      </StyledSummary>
      <StyledDiscription>
        <StyledDiscriptionItem className="simple">
          <strong className="tit">개봉일</strong>
          <p className="desc">{data?.release_date}</p>
        </StyledDiscriptionItem>
        <StyledDiscriptionItem className="simple">
          <strong className="tit">런타임</strong>
          <p className="desc">
            {Math.floor(data?.runtime / 60)}시간 {data?.runtime % 60}분
          </p>
        </StyledDiscriptionItem>
        <StyledDiscriptionItem>
          <strong className="tit">줄거리</strong>
          <p className="desc">{data?.overview}</p>
        </StyledDiscriptionItem>
      </StyledDiscription>
      <StyledSimilar>
        <strong className="tit">유사한 영화</strong>
        <StyledMovie className="card">
          {similarMovieData &&
            similarMovieData.results.length > 0 &&
            similarMovieData.results.map((movie: Movie, index) => {
              return index > 5 ? (
                ''
              ) : (
                <List key={movie.id} movie={movie} type="card" />
              );
            })}
        </StyledMovie>
      </StyledSimilar>
    </StyledMovieDetail>
  );
};

export default MovieDetail;
