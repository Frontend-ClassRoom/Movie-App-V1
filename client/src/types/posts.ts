export interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function getEmptyPosts() {
  return {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
}
