import tasksTypes from './tasksTypes';

const getQuestsStart = () => ({
  type: tasksTypes.GET_ALL_QUESTS_START,
});

const getQuestsSuccess = tasks => ({
  type: tasksTypes.GET_ALL_QUESTS_SUCCESS,
  payload: {
    tasks,
  },
});

const getQuestsFailure = error => ({
  type: tasksTypes.GET_ALL_QUESTS_FAILURE,
  payload: {
    error,
  },
});

//--
const addQuestStart = () => ({
  type: tasksTypes.ADD_QUEST_START,
});

const addQuestSuccess = role => ({
  type: tasksTypes.ADD_QUEST_SUCCESS,
  payload: {
    role,
  },
});

const addQuestFailure = error => ({
  type: tasksTypes.ADD_QUEST_FAILURE,
  payload: {
    error,
  },
});

//--
const updateQuestStart = () => ({
  type: tasksTypes.UPDATE_QUEST_START,
});

const updateQuestSuccess = (id, data) => ({
  type: tasksTypes.UPDATE_QUEST_SUCCESS,
  payload: {
    id,
    data,
  },
});

const updateQuestFailure = error => ({
  type: tasksTypes.UPDATE_QUEST_FAILURE,
  payload: {
    error,
  },
});

//--
const deleteQuestStart = () => ({
  type: tasksTypes.DELETE_QUEST_START,
});

const deleteQuestSuccess = id => ({
  type: tasksTypes.DELETE_QUEST_SUCCESS,
  payload: {
    id,
  },
});

const deleteQuestFailure = error => ({
  type: tasksTypes.DELETE_QUEST_FAILURE,
  payload: {
    error,
  },
});

export default {
  getQuestsStart,
  getQuestsSuccess,
  getQuestsFailure,
  addQuestStart,
  addQuestSuccess,
  addQuestFailure,
  updateQuestStart,
  updateQuestSuccess,
  updateQuestFailure,
  deleteQuestStart,
  deleteQuestSuccess,
  deleteQuestFailure,
};
