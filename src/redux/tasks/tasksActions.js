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

const addQuestSuccess = data => ({
  type: tasksTypes.ADD_QUEST_SUCCESS,
  payload: {
    data,
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

const updateQuestSuccess = data => ({
  type: tasksTypes.UPDATE_QUEST_SUCCESS,
  payload: {
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

const acceptChallengeStart = () => ({
  type: tasksTypes.ACCEPT_CHALLENGE_START,
});

const acceptChallengeSuccess = data => ({
  type: tasksTypes.ACCEPT_CHALLENGE_SUCCESS,
  payload: {
    data,
  },
});

const acceptChallengeFailure = error => ({
  type: tasksTypes.ACCEPT_CHALLENGE_FAILURE,
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
  acceptChallengeStart,
  acceptChallengeSuccess,
  acceptChallengeFailure,
};
