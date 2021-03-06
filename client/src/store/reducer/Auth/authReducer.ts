import { LoginAction, LogoutAction } from 'store/action';

// action type
export const SET_LOGIN = 'auth/SET_LOGIN' as const;
export const SET_LOGOUT = 'auth/SET_LOGOUT' as const;

export interface User {
  id: string;
  name: string;
}

export interface AuthState {
  user: User;
  isLoggedIn: boolean;
}

export type AuthActionType =
  | ReturnType<typeof LoginAction>
  | ReturnType<typeof LogoutAction>;

const initialState: AuthState = {
  user: {
    id: '',
    name: '',
  },
  isLoggedIn: false,
};

//reducer
const authReducer = (state = initialState, action: AuthActionType | any) => {
  // redux-persist typescript 에러 발생 action type이 any를 가져야 작동함
  switch (action.type) {
    case 'auth/SET_LOGIN':
      return {
        ...state,
        user: action.user,
        isLoggedIn: true,
      };
    case 'auth/SET_LOGOUT':
      return {
        ...state,
        user: action.user,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
