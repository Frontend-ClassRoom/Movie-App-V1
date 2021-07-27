import { useCallback, useEffect, useReducer } from 'react';
import { AxiosError, AxiosRequestConfig } from 'axios';

const LOADING = 'LOADING' as const;
const SUCCESS = 'SUCCESS' as const;
const ERROR = 'ERROR' as const;
const CLEAN = 'CLEAN' as const;

type StateType<T = any> = {
  data: T;
  loading: boolean;
  error: AxiosError | null;
};

type ActionType<T> = {
  type: string;
  data?: T;
  error?: AxiosError;
};

const initialState: StateType = {
  data: null,
  loading: false,
  error: null,
};

type Reducer<T = any> = (
  state: StateType<T>,
  action: ActionType<T>
) => StateType<T>;

const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        data: null,
        loading: true,
        error: null,
      };

    case SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };

    case ERROR:
      return {
        data: null,
        loading: false,
        error: action.error as AxiosError,
      };

    case CLEAN:
      return initialState;

    default:
      return state;
  }
};

export type AsyncFunction<T> = (
  config?: AxiosRequestConfig,
  ...ars: any
) => Promise<T>;

const useAsync = <T>(callback: AsyncFunction<T>, onMount?: boolean) => {
  // const accessToken = '123'; => 로그인 토큰이 존재할때 사용
  const [state, dispatch] = useReducer<Reducer<T>>(reducer, initialState);

  const run = useCallback(
    async (...args) => {
      console.log(...args);
      dispatch({ type: LOADING });

      // 로그인 토큰이 존재할때 사용
      // const requestConfig = {
      //   headers: {
      //     ...(accessToken && {
      //       Authorization: `Bearer ${accessToken}`,
      //     }),
      //   },
      // };

      try {
        const data = await callback(...args);
        dispatch({ type: SUCCESS, data });
      } catch (error) {
        dispatch({ type: ERROR, error });
      }
    },
    [callback]
  );

  useEffect(() => {
    onMount && run();
    return () => {
      dispatch({ type: CLEAN });
    };
  }, [onMount, run]);

  return { ...state, run };
};

export default useAsync;
