import { SET_LOGIN, SET_LOGOUT, User } from 'store/reducer/Auth';

// action creator
export const LoginAction = (user: User) => {
  return {
    type: SET_LOGIN,
    user,
  };
};

export const LogoutAction = () => {
  return {
    type: SET_LOGOUT,
    user: {
      id: '',
      name: '',
    },
  };
};
