import axios from 'axios';

/* DEFAULTS SETTINGS */
axios.defaults.baseURL = 'https://questify.goit.co.ua/api';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const createQuest = credentials => axios.post('/quests', credentials);
const updateQuest = (questId, data) => axios.put(`/quests/${questId}`, data);
const deleteQuest = questId => axios.delete(`/quests/${questId}`);
const doSomethingWithChallenge = (challId, data) =>
  axios.put(`/challenges/${challId}`, data);

const axiosRegister = data => {
  return axios.post('/login', data);
};

const getQuests = data => {
  return axios.post('/login', data);
};

export default {
  createQuest,
  updateQuest,
  deleteQuest,
  axiosRegister,
  doSomethingWithChallenge,
  getQuests,
};
