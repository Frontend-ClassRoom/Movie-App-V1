import React, { useEffect } from 'react';
import movieApi from 'api/movieApi';
import useAsync from 'hook/useAsync';
import { Movie } from 'types/movie';
import { useParams } from 'react-router-dom';
import Thumbnail from 'component/Thumbnail/Thumbnail';

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
    <div>
      page
      <Thumbnail width={300} thumbnailUrl={data?.backdrop_path} />
      <span>{data?.original_title}</span>
    </div>
  );
};

export default MovieDetail;
