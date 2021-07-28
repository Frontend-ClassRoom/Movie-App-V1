import React, { useEffect } from 'react';
import { getMovieInformation } from 'api/movieApi';
import useAsync from 'hook/useAsync';
import { Movie } from 'types/movie';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  // const { data: movieDitail } = useAsync<Movie>(getMovieInformation);
  const { id } = useParams<{ id: string }>();

  const fetchPostDetail = async () => {
    // fetch Hook 사용 여부 확인필요 => ex) useAxios
    if (!id) return;
    const postId = parseInt(id);
    const post = await getMovieInformation(postId);
    console.log(post);
  };

  useEffect(() => {
    if (id) {
      fetchPostDetail();
    }
  }, [id]);

  return (
    <div>
      page
      <span>test</span>
    </div>
  );
};

export default MovieDetail;
