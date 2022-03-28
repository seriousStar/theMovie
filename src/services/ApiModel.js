import AppConfig from '../config';

const {API_URL} = AppConfig;

export const apiModel = async (url, method) => {
  let ret = null;
  let queryURL = '';
  let params = {};
  try {
    queryURL = `${API_URL}/${url}`;
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    params = {headers, method};
    // eslint-disable-next-line
    const response = await fetch(queryURL, params);
    ret = (await response.json()) || {};
    if (response.status >= 400) {
      ret = {error: true, success: false, ...ret};
    }
    console.log('request result', queryURL, params, ret);
  } catch (err) {
    console.log('err', queryURL, params, err);
    ret = {error: true, success: false, errorCode: -1};
  }
  return ret;
};
