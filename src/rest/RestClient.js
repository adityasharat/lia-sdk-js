import axios from 'axios';
import * as headers from './RequestHeaders';

export function build(sdk) {
  const instance = axios.create({
    baseURL: sdk.credentials.communityUrl,
    timeout: 2000,
    headers: headers.generate(sdk)
  });

  return instance;
}
