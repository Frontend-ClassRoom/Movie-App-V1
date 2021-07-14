import axios from 'axios';
import { Account } from 'types/user';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createUserAccount = async (accountInfo: Account) => {
  const url = `${BASE_URL}/join`;
  await axios.post<Account>(url, accountInfo).then((res) => res);
};
