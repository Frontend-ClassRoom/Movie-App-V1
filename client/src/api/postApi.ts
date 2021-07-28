import axios, { AxiosInstance } from 'axios';
import { AsyncFunction } from 'hook/useAsync';
import { Posts } from 'types/posts';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

class postApi {
  private readonly apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: BASE_URL,
      timeout: 1000,
      // 요청이 timeout보다 오래 걸리면 요청이 중단됩니다.
      // timeout: 1000, 기본값은 '0'(시간 제한 없음)
    });
  }

  public getPosts: AsyncFunction<Posts[]> = async () => {
    const response = await this.apiClient.get('/posts');
    return response.data;
  };

  public getPostDetail: AsyncFunction<Posts> = async (postId) => {
    const response = await this.apiClient.get(`/posts/${postId}`);
    return response.data;
  };
}

export default new postApi();
