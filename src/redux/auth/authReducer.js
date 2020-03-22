import { combineReducers } from 'redux';
import authTypes from './authTypes';

/*/
redux store = {
    auth: {
        nickname: "nickname",
        email: "email@mail.com",
        userId: "id"
        token: "some token",
        error: {
            status: "error",
            message: "Error message",
        }
    },
    tasks: {
        allTasks: [],
        error: null
    }

/*/

const nicknameReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.REGISTER_SUCCESS:
      return payload.nickname;
    case authTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const emailReducer = (state = null, { type, payload }) => {
  switch (type) {
    // case authTypes.REGISTER_SUCCESS:
    //   return payload.email;
    // case authTypes.LOGOUT_SUCCESS:
    //   return null;

    default:
      return state;
  }
};

const userIdReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.REGISTER_SUCCESS:
      return payload._id;
    case authTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const tokenReducer = (state = null, { type, payload }) => {
  switch (type) {
    // case authTypes.REGISTER_SUCCESS:
    //   return payload.token;
    // case authTypes.LOGOUT_SUCCESS:
    //   return null;

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case authTypes.REGISTER_FAILURE:
    case authTypes.LOGOUT_FAILURE:
      return payload.error;
    case authTypes.REGISTER_START:
    case authTypes.LOGOUT_START:
      return null;

    default:
      return state;
  }
};

export default combineReducers({
  nickname: nicknameReducer,
  email: emailReducer,
  userId: userIdReducer,
  token: tokenReducer,
  error: errorReducer,
});
