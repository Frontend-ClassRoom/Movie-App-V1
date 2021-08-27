import movieApi from 'api/movieApi';
import { InputBox, TextAreaBox } from 'component';
import List from 'component/Movie/PreviewList/List';
import useAsync from 'hook/useAsync';
import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  ClearWriteValue,
  CreatePostAction,
  WritePostAction,
} from 'store/action/Posts';
import { RootState } from 'store/reducer';
import { AppRoutePath } from 'types/routes';
import { StyledWritePage } from './Styled';
import { Movie, MovieResult } from 'types/movie';

const WritePage = () => {
  const { write, posts } = useSelector((state: RootState) => state.PostReducer);
  const { user } = useSelector((state: RootState) => state.AuthReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const { run: searchMovie, data: searchMovieData } = useAsync<MovieResult>(
    movieApi.getSearchMovie
  );

  useEffect(() => {
    return () => {
      console.log('clear');
      dispatch(ClearWriteValue());
    };
  }, []);

  const matchesName = (name: string) => {
    const KEYWORD_LENGTH = write?.keyword?.length;
    const isMatches = name?.toLowerCase()?.substring(0, KEYWORD_LENGTH);
    return isMatches === write.keyword && KEYWORD_LENGTH !== 0;
  };

  const handleSearchMovie = () => {
    const results = searchMovieData?.results?.filter(
      (item) => true === matchesName(item.original_title)
    );
    return results;
  };

  const handleSelectMovie = (movie: Movie) => {
    dispatch(
      WritePostAction(
        movie.backdrop_path
          ? movie.backdrop_path
          : `이미지 없음 (${movie.original_title})`,
        'contentImage'
      )
    );
    dispatch(WritePostAction(movie.original_title, 'title'));
    dispatch(WritePostAction('', 'keyword'));
  };

  const handleWritePost = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(WritePostAction(value, name));
    if (name === 'keyword' && value !== '' && write.title === '') {
      searchMovie(value);
    }
  };

  const handleSubmitPost = () => {
    if (write.contents === '' || write.contents.length < 0) {
      alert('실패');
      return;
    }
    const nextId = posts.length + 1;
    const postPayload = {
      ...write,
      userId: user.id,
      postId: nextId,
    };
    dispatch(CreatePostAction(postPayload));
    history.push(AppRoutePath.MYCARD_PATH);
  };

  return (
    <StyledWritePage>
      <div className="preview">
        <InputBox
          value={write.keyword || ''}
          type="text"
          name="keyword"
          placeholder="영화 검색"
          onChange={handleWritePost}
        />
        {write?.keyword !== '' && (
          <List movie={handleSearchMovie()} onClick={handleSelectMovie} />
        )}
      </div>
      {write.title && (
        <InputBox
          value={write.title}
          type="text"
          name="title"
          placeholder="영화 제목"
          onChange={handleWritePost}
          readonly={true}
        />
      )}
      <TextAreaBox
        value={write.contents}
        name="contents"
        disabled={write.contentImage === ''}
        onChange={handleWritePost}
      />
      <InputBox
        value={write.contentImage}
        type="text"
        name="contentImage"
        placeholder=""
        onChange={handleWritePost}
        readonly={true}
      />
      <button onClick={handleSubmitPost} title="등록">
        등록
      </button>
    </StyledWritePage>
  );
};

export default WritePage;
