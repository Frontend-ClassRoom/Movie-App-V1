import {
  CreatePostAction,
  DeletePostAction,
  UpdatePostAction,
} from 'store/action/Posts';

export const CREATE_POST = 'posts/CREATE_POST' as const;
export const DELETE_POST = 'posts/DELETE_POST' as const;
export const UPDATE_POST = 'posts/UPDATE_POST' as const;

export interface PostState {
  posts: Post[];
}

export interface Post {
  userId: string;
  postId: number;
  isLike: number;
  contents: string;
  contentImage: string;
}

export type PostsActionType =
  | ReturnType<typeof CreatePostAction>
  | ReturnType<typeof DeletePostAction>
  | ReturnType<typeof UpdatePostAction>;

const initialState: PostState = {
  posts: [],
};

const postsReducer = (state = initialState, action: PostsActionType) => {
  switch (action.type) {
    case 'posts/CREATE_POST':
      const newPosts = state.posts.concat(action.post);
      return {
        ...state,
        posts: newPosts,
      };

    case 'posts/DELETE_POST':
      const filteredPost = state.posts.filter(
        (post) => post.postId !== action.postId
      );
      return {
        ...state,
        posts: filteredPost,
      };

    case 'posts/UPDATE_POST':
      const updatePost = state.posts.map((post) => {
        if (post.postId === action.post.postId) {
          return Object.assign({}, post, {
            contents: action.post.contents,
            contentImage: action.post.contentImage,
          });
        } else {
          return post;
        }
      });
      return {
        ...state,
        posts: updatePost,
      };

    default:
      return state;
  }
};

export default postsReducer;
