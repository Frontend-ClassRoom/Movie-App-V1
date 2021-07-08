import { combineReducers } from 'redux';
import authReducer from './Auth/authReducer';

const rootReducer = combineReducers({
  AuthReducer: authReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
