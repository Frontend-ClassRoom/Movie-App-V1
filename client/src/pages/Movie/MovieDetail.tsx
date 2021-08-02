import React, { Fragment, useEffect } from 'react';
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
      {data?.genres.map((genres, index) => (
        <p key={index} style={{ marginTop: '20px' }}>
          <span>{genres.id}</span>
          <span>{genres.name}</span>
        </p>
      ))}
    </div>
  );
};

export default MovieDetail;
