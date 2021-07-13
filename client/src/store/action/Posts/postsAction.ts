import {
  Post,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from 'store/reducer/Posts';

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

export const UpdatePostAction = (post: Post) => {
  return {
    type: UPDATE_POST,
    post,
  };
};
