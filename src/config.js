import axios from 'axios';

const pilonApiBaseUrl = 'https://api.pilon.io/v1';

const axiosInstance = axios.create({
  baseURL: pilonApiBaseUrl,
});

export default {
  pilonApiBaseUrl,
  environmentId: 'YOUR_ENVIRONMENT_KEY_HERE',
  pilonApi: axiosInstance,
};
