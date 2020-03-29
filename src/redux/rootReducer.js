import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/authReducer';
import tasksReduser from './tasks/tasksReducer';
import loadingReducer from './loading/loadingReducer';
import modalReduser from './modal/modalReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['nickname', 'userId'],
  // whitelist: ['token'] // uncomment for team made backend
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tasks: tasksReduser,
  isLoading: loadingReducer,
  isModal: modalReduser,
});

export default rootReducer;
