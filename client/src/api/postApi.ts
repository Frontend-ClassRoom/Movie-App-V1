import axios from "axios";
import { Posts } from "types/posts";
import { AxiosReturn } from "utils/AxiosReturn";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  const url = `${BASE_URL}/posts`;
  return axios.get<Posts[]>(url).then((res) => res.data);
};

export const getPostDetail = (postId: number) => {
  const url = `${BASE_URL}/posts/${postId}`;
  return axios.get<Posts>(url).then(AxiosReturn);
};
