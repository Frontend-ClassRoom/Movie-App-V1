import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/authReducer';
import commonReducer from './Common/commonReducer';
import postsReducer from './Posts/postsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['AuthReducer', 'PostReducer'],
  // PostReducer => 서버로 저장하기 전 로직 테스트
};

const rootReducer = combineReducers({
  AuthReducer: authReducer,
  CommonReducer: commonReducer,
  PostReducer: postsReducer, // 임시 store, 추후 backend API로 CRUD
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer<RootState>(persistConfig, rootReducer);
