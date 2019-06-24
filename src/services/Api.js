import axios from 'axios';
import { API_KEY_HEADER } from './Constants';

export async function processRequest(url = '', method = 'GET', data = {}, file = false) {
  document.cookies = API_KEY_HEADER;

  return axios({
    method,
    headers,
    data: file ? data : JSON.stringify(data),
    url,
  })
}