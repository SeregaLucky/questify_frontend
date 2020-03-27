import { combineReducers } from 'redux';
import tasksTypes from '../tasks/tasksTypes';
import authTypes from '../auth/authTypes';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case authTypes.REGISTER_START:
    case authTypes.LOGOUT_START:
    case tasksTypes.GET_ALL_QUESTS_START:
    case tasksTypes.ADD_QUEST_START:
    case tasksTypes.UPDATE_QUEST_START:
    case tasksTypes.DELETE_QUEST_START:
    case tasksTypes.ACCEPT_CHALLENGE_START:
    case tasksTypes.UPDATE_CHALLENGE_START:
    case tasksTypes.DELETE_CHALLENGE_START:
      return true;

    case authTypes.REGISTER_SUCCESS:
    case authTypes.REGISTER_FAILURE:
    case authTypes.LOGOUT_SUCCESS:
    case authTypes.LOGOUT_FAILURE:
    case tasksTypes.GET_ALL_QUESTS_SUCCESS:
    case tasksTypes.GET_ALL_QUESTS_FAILURE:
    case tasksTypes.ADD_QUEST_SUCCESS:
    case tasksTypes.ADD_QUEST_FAILURE:
    case tasksTypes.UPDATE_QUEST_SUCCESS:
    case tasksTypes.UPDATE_QUEST_FAILURE:
    case tasksTypes.DELETE_QUEST_SUCCESS:
    case tasksTypes.DELETE_QUEST_FAILURE:
    case tasksTypes.ACCEPT_CHALLENGE_SUCCESS:
    case tasksTypes.ACCEPT_CHALLENGE_FAILURE:
    case tasksTypes.UPDATE_CHALLENGE_SUCCESS:
    case tasksTypes.UPDATE_CHALLENGE_FAILURE:
    case tasksTypes.DELETE_CHALLENGE_SUCCESS:
    case tasksTypes.DELETE_CHALLENGE_FAILURE:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  isLoading: loadingReducer,
});
