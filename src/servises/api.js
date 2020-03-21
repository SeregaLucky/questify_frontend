import axios from 'axios';

axios.defaults.baseURL = 'https://questify.goit.co.ua';

const axiosRegister = data => {
  return axios.post('/api/login', data).then(response => {
    return response;
  });
};

export default { axiosRegister };
