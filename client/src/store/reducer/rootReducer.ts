import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/authReducer';
import postsReducer from './Posts/postsReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['AuthReducer'],
};

const rootReducer = combineReducers({
  AuthReducer: authReducer,
  PostReducer: postsReducer, // 임시 store, 추후 backend API로 CRUD
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer<RootState>(persistConfig, rootReducer);
