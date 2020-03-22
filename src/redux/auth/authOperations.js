//add notification library for displaying success/error messages
// import api from '../../servises/api-authi';
import api from './../../servises/api-auth';
import authActions from './authActions';
import tasksActions from '../tasks/tasksActions';

const registerUser = data => dispatch => {
  dispatch(authActions.registerStart());

  api
    .axiosRegister(data)
    .then(response => {
      const {
        data: { data },
      } = response;
      dispatch(authActions.registerSuccess(data.user, data.user._id));
      dispatch(tasksActions.getQuestsSuccess(data.tasks));
    })
    .catch(error => {
      console.log(error);

      dispatch(authActions.registerFailure(error));
      dispatch(tasksActions.getQuestsFailure(error));
    });
};

const logoutUser = () => dispatch => {};

export default { registerUser, logoutUser };
