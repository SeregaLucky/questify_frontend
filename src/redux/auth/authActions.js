import authTypes from './authTypes';

const registerStart = () => ({
  type: authTypes.REGISTER_START,
});

const registerSuccess = ({ nickname, email, userId, token }) => ({
  type: authTypes.REGISTER_SUCCESS,
  payload: { nickname, email, userId, token },
});

const registerFailure = error => ({
  type: authTypes.REGISTER_FAILURE,
  payload: { error },
});

const logOutStart = () => ({
  type: authTypes.LOGOUT_START,
});

const logOutSuccess = () => ({
  type: authTypes.LOGOUT_SUCCESS,
});

const logOutFailure = error => ({
  type: authTypes.LOGOUT_FAILURE,
  payload: { error },
});

export default {
  registerStart,
  registerSuccess,
  registerFailure,
  logOutStart,
  logOutSuccess,
  logOutFailure,
};
