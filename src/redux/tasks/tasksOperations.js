//add notification library for displaying success/error messages
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../servises/api';
import tasksActions from './tasksActions';
import authActions from '../auth/authActions';

const getAllQuests = () => dispatch => {};

const getQuestsByUser = () => (dispatch, getState) => {
  const state = getState();
  const nickname = state.auth.nickname;

  if (!nickname) {
    return;
  }

  const userNickname = { nickname: nickname };

  dispatch(tasksActions.getQuestsStart());

  api
    .getQuests(userNickname)
    .then(response => {
      const {
        data: { data },
      } = response;
      dispatch(authActions.registerSuccess(data.user, data.user._id));
      dispatch(tasksActions.getQuestsSuccess(data.tasks));
    })
    .catch(error => {
      console.log(error);

      toast.error('Something went wrong! Failed to load tasks', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      dispatch(tasksActions.getQuestsFailure(error));
    });
};

// data = {difficulty, dueDate, group, name, userId}
const addQuest = data => dispatch => {
  dispatch(tasksActions.addQuestStart());
  api
    .createQuest(data)
    .then(res => dispatch(tasksActions.addQuestSuccess(res.data.quest)))
    .catch(err => dispatch(tasksActions.addQuestFailure(err)));
};

// id = questId;
//data = {difficulty, dueDate,group, name};
const updateQuest = (id, data) => dispatch => {
  dispatch(tasksActions.updateQuestStart());
  api
    .updateQuest(id, data)
    .then(res => dispatch(tasksActions.updateQuestSuccess(res.data)))
    .catch(err => dispatch(tasksActions.updateQuestFailure(err)));
};
const deleteQuest = id => dispatch => {
  dispatch(tasksActions.deleteQuestStart());
  api
    .deleteQuest(id)
    .then(res => tasksActions.deleteQuestSuccess(res.data))
    .catch(err => tasksActions.deleteQuestFailure(err));
};

export default {
  getAllQuests,
  addQuest,
  updateQuest,
  deleteQuest,
  getQuestsByUser,
};
