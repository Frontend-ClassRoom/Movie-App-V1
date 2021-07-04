import axios from "axios";
import { Posts } from "types/posts";
import { AxiosReturn } from "utils/AxiosReturn";

export const getPosts = () => {
  const url = `${process.env.REACT_APP_BASE_API}/posts`;
  return axios.get<Posts[]>(url).then((res) => res.data);
};

export const getPostDetail = (postId: number) => {
  const url = `${process.env.REACT_APP_BASE_API}/posts/${postId}`;
  return axios.get<Posts>(url).then(AxiosReturn);
};
