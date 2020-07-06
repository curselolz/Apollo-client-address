import { stringify } from 'qs';
import { apiAddr } from '@/utils';
import { ENDPOINTS } from '@/constants';

export const getTokenRequest = () => {
  const params = stringify({
    response_type: 'bearer',
    client_id: '',
    client_secret: process.env.client_secret,
    prompt: '=none',
    grant_type: 'client_credentials',
  });
  return apiAddr.post(``);
};

export const getTokenRequestAndSave = async () => {
  const params = stringify({
    response_type: 'bearer',
    client_id: 'sit-openid-rck',
    client_secret: process.env.client_secret,
    prompt: '=none',
    grant_type: 'client_credentials',
  });
  const res = await apiAddr.post(``);
  if (res && res.access_token) {
    localStorage.setItem('accessToken', JSON.stringify(res.access_token));
  }
};
