import { combineReducers } from 'redux';
import tasksTypes from './tasksTypes';

const tasksReducer = (
  state = {
    error: null,
    tasks: {
      error: null,
      quests: [
        {
          today: false,
          tomorrow: false,
          done: true,
          dueDate: '2019-03-16T14:13:33.954Z',
        },
        {
          today: false,
          tomorrow: false,
          done: true,
          dueDate: '2019-03-17T14:13:53.954Z',
        },
        {
          today: false,
          tomorrow: false,
          done: false,
          dueDate: '2020-03-18T14:13:53.954Z',
        },
        {
          today: false,
          tomorrow: false,
          done: false,
          dueDate: '2020-03-18T14:12:53.954Z',
        },
        {
          today: false,
          tomorrow: false,
          done: false,
          dueDate: '2020-03-18T14:11:53.954Z',
        },
        {
          today: false,
          tomorrow: false,
          done: true,
          dueDate: '2020-03-18T14:13:55.954Z',
        },
      ],
    },
  },
  { type, payload },
) => {
  switch (type) {
    case tasksTypes.GET_ALL_QUESTS_SUCCESS:
      return payload.tasks;

    case tasksTypes.ADD_QUEST_SUCCESS:
      return [...state, payload.task];

    case tasksTypes.DELETE_QUEST_SUCCESS:
      return state.filter(el => el._id !== payload.id);

    case tasksTypes.UPDATE_QUEST_SUCCESS:
      return state.map(el =>
        el._id === payload.id ? { ...el, ...payload.data } : el,
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
