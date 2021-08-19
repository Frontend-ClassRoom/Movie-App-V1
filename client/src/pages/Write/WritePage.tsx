import { InputBox, TextAreaBox } from 'component';
import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreatePostAction, WritePostAction } from 'store/action/Posts';
import { RootState } from 'store/reducer';
import { StyledWritePage } from './Styled';

const WritePage = () => {
  const { write, posts } = useSelector((state: RootState) => state.PostReducer);
  const { user } = useSelector((state: RootState) => state.AuthReducer);
  const dispatch = useDispatch();

  const handleWritePost = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch(WritePostAction(value, name));
  };

  const handleSubmitPost = () => {
    const nextId = posts.length + 1;
    const postPayload = {
      ...write,
      userId: user.id,
      postId: nextId,
    };
    dispatch(CreatePostAction(postPayload));
  };

  useEffect(() => {
    console.log(write);
  }, [write]);

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
