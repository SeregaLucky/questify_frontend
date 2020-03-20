//add notification library for displaying success/error messages
import api from '../../servises/api';
import tasksActions from './tasksActions';

const getAllQuests = () => dispatch => {};
const addQuest = quest => dispatch => {};
const updateQuest = (id, data) => dispatch => {
  dispatch(tasksActions.updateQuestStart());

  api
    .updateQuest(id, data)
    .then(updatedQuest =>
      dispatch(
        tasksActions.updateQuestSuccess(updatedQuest.id, updatedQuest.data),
      ),
    )
    .catch(err => dispatch(tasksActions.updateQuestFailure(err)));
};
const deleteQuest = id => dispatch => {};

export default {
  getAllQuests,
  addQuest,
  updateQuest,
  deleteQuest,
};
