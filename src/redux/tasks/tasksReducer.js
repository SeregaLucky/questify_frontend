import { combineReducers } from 'redux';
import tasksTypes from './tasksTypes';

const tasksReducer = (state = [], { type, payload }) => {
  switch (type) {
    case tasksTypes.GET_ALL_QUESTS_SUCCESS:
      return payload.tasks;

    case tasksTypes.ADD_QUEST_SUCCESS:
      return [...state, payload.data];

    case tasksTypes.DELETE_QUEST_SUCCESS:
      return state.filter(el => el._id !== payload.id);

    case tasksTypes.UPDATE_QUEST_SUCCESS:
      return state.map(el =>
        el._id === payload.data._id ? { ...el, ...payload.data } : el,
      );

    default:
      return state;
  }
};

const tasksErrorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case tasksTypes.GET_ALL_QUESTS_FAILURE:
    case tasksTypes.ADD_QUEST_FAILURE:
    case tasksTypes.UPDATE_QUEST_FAILURE:
    case tasksTypes.DELETE_QUEST_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  tasks: tasksReducer,
  error: tasksErrorReducer,
});
