import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import tasksReduser from './tasks/tasksReducer';
import loadingReducer from './loading/loadingReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['nickname'],
  // whitelist: ['token'] // uncomment for team made backend
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tasks: tasksReduser,
  isLoading: loadingReducer,
});

export default rootReducer;
