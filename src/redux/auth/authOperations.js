//add notification library for displaying success/error messages
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import api from '../../servises/api';
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
      toast.success('You have successfully logged in', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(authActions.registerSuccess(data.user, data.user._id));
      dispatch(tasksActions.getQuestsSuccess(data.tasks));
    })
    .catch(error => {
      toast.error('Something went wrong! Try again', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(authActions.registerFailure(error));
      dispatch(tasksActions.getQuestsFailure(error));
    });
};

const logoutUser = () => dispatch => {};

export default { registerUser, logoutUser };
