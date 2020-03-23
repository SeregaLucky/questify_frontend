import axios from 'axios';

/* DEFAULTS SETTINGS */
axios.defaults.baseURL = 'https://questify.goit.co.ua/api';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

const createQuest = credentials => axios.post('/quests', credentials);
const updateQuest = (questId, data) => axios.put(`/quests/${questId}`, data);

const axiosRegister = data => {
  return axios.post('/login', data).then(response => {
    return response;
  });
};

export default {
  createQuest,
  updateQuest,
  axiosRegister,
};
