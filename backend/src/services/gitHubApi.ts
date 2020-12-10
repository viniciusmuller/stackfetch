import axios from 'axios';

const gitHubApi = axios.create({
  baseURL: 'https://api.github.com'
});

export default gitHubApi;
