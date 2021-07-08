import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './Auth/authReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['AuthReducer'],
};

const rootReducer = combineReducers({
  AuthReducer: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer<RootState>(persistConfig, rootReducer);
