import axios from 'axios';
import * as headers from './RequestHeaders';

export function build(sdk) {
  const instance = axios.create({
    baseURL: sdk.credentials.communityUrl,
    timeout: 8000,
    headers: headers.generate(sdk)
  });

  instance.interceptors.request.use(function (config) {
    config.headers['Authorization'] = `Bearer ${sdk.auth.access_token}`;
    return config;
  });

  return instance;
}
