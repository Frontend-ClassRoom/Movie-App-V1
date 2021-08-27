import {
  ClearWriteValue,
  CreatePostAction,
  DeletePostAction,
  UpdatePostAction,
  WritePostAction,
  ClearPostAction,
  fetchSearchMovie,
} from 'store/action/Posts';

export const WRITE_POST = 'posts/WRITE_POST' as const;
export const CLEAR_WRITE = 'posts/CLEAR_WRITE' as const;
export const CREATE_POST = 'posts/CREATE_POST' as const;
export const DELETE_POST = 'posts/DELETE_POST' as const;
export const UPDATE_POST = 'posts/UPDATE_POST' as const;
export const CLEAR_POST = 'posts/CLEAR_POST' as const;
export const SET_MOVIE_RESULT = 'posts/SET_MOVIE_RESULT' as const;

export interface PostState {
  posts: Post[];
  movieResults: any[];
  write: Post;
}

export interface Post {
  userId: string;
  postId: number;
  title: string;
  isLike?: boolean;
  likeCount?: number;
  contents: string;
  contentImage: string;
}

export type PostsActionType =
  | ReturnType<typeof CreatePostAction>
  | ReturnType<typeof DeletePostAction>
  | ReturnType<typeof UpdatePostAction>
  | ReturnType<typeof WritePostAction>
  | ReturnType<typeof ClearWriteValue>
  | ReturnType<typeof ClearPostAction>
  | ReturnType<typeof fetchSearchMovie>;

const initialState: PostState = {
  posts: [],
  movieResults: [],
  write: {
    userId: '',
    postId: 0,
    title: '',
    isLike: false,
    likeCount: 0,
    contents: '',
    contentImage: '',
  },
};

const postsReducer = (state = initialState, action: PostsActionType) => {
  switch (action.type) {
    case 'posts/WRITE_POST':
      const { name, value } = action.writeValue;
      const changeWriteValue = {
        ...state.write,
        [name]: value,
      };
      return {
        ...state,
        write: changeWriteValue,
      };

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
    case 'posts/CLEAR_WRITE':
      return {
        ...state,
        write: action.write,
      };
    case 'posts/CLEAR_POST':
      return {
        ...state,
        posts: [],
      };
    case 'posts/SET_MOVIE_RESULT':
      return {
        ...state,
        movieResults: action.movieList,
      };
    default:
      return state;
  }
};

export default postsReducer;
