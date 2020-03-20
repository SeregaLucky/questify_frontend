import axios from 'axios';

axios.defaults.baseURL = 'https://questify.goit.co.ua/api/';

const updateQuest = (id, data) => {
  return axios.put(`/quests/${id}`, data);
};

export default { updateQuest };
