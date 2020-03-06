import axios from 'axios';

axios.defaults.headers.common = {
  Authorization: `bearer ${localStorage.getItem('token')}`,
};

export const axiosAuth = axios;
