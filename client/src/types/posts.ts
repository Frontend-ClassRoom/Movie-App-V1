export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsSize {
  width: number;
  height: number;
}

export function getEmptyPosts() {
  return {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
}
