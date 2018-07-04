import axios from 'axios';

const pilonApiBaseUrl = 'http://local-api.spr0.com/api';

const axiosInstance = axios.create({
  baseURL: pilonApiBaseUrl,
});

export default {
  pilonApiBaseUrl,
  environmentId: 'f16eb6bc-7cc5-11e8-9190-0242ac130008',
  pilonApi: axiosInstance,
};
