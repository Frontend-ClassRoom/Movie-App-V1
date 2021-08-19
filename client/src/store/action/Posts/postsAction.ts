import {
  Post,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  WRITE_POST,
  CLEAR_WRITE,
} from 'store/reducer/Posts';

export type UpdatePost = Pick<Post, 'contents' | 'contentImage' | 'postId'>;

export const WritePostAction = (value: string | number, name: string) => {
  const writeValue = {
    name,
    value,
  };
  return {
    type: WRITE_POST,
    writeValue,
  };
};

export const ClearWriteValue = () => {
  return {
    type: CLEAR_WRITE,
    write: {
      userId: '',
      postId: 0,
      isLike: false,
      likeCount: 0,
      contents: '',
      contentImage: '',
    },
  };
};

export const CreatePostAction = (post: Post) => {
  return {
    type: CREATE_POST,
    post,
  };
};

export const DeletePostAction = (postId: number) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const UpdatePostAction = (post: UpdatePost) => {
  return {
    type: UPDATE_POST,
    post,
  };
};
