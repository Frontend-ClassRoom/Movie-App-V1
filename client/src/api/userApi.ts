import axios, { AxiosInstance } from 'axios';
import { AsyncFunction } from 'hook/useAsync';
import { Account } from 'types/user';

const BASE_URL = process.env.REACT_APP_BASE_URL;

class userApi {
  private readonly apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: BASE_URL,
      timeout: 1000,
      // 요청이 timeout보다 오래 걸리면 요청이 중단됩니다.
      // timeout: 1000, 기본값은 '0'(시간 제한 없음)
    });
  }

  public login: AsyncFunction<Account> = async (payload) => {
    const response = await this.apiClient.post('/join', payload);
    return response.data;
  };
}

export default new userApi();
