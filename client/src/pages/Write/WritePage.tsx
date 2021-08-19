import { InputBox, TextAreaBox } from 'component';
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

const WritePage = () => {
  const { write, posts } = useSelector((state: RootState) => state.PostReducer);
  const { user } = useSelector((state: RootState) => state.AuthReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    return () => {
      console.log('clear');
      dispatch(ClearWriteValue());
    };
  }, []);

  const handleWritePost = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(WritePostAction(value, name));
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
      <TextAreaBox
        value={write.contents}
        name="contents"
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
      <button onClick={handleSubmitPost}>등록</button>
    </StyledWritePage>
  );
};

export default WritePage;
