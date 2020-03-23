//add notification library for displaying success/error messages
import api from '../../servises/api';
import tasksActions from './tasksActions';

const getAllQuests = () => dispatch => {};

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
  console.log(id);
  console.log(data);
  dispatch(tasksActions.updateQuestStart());
  api
    .updateQuest(id, data)
    .then(res => dispatch(tasksActions.updateQuestSuccess(res.data)))
    .catch(err => dispatch(tasksActions.updateQuestFailure(err)));
};
const deleteQuest = id => dispatch => {};

export default {
  getAllQuests,
  addQuest,
  updateQuest,
  deleteQuest,
};
