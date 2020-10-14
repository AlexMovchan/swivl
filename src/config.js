import Axios from 'axios';

export const API_URL = 'https://api.github.com';

export const fetchData = (requestUrl, requestType = 'get') => Axios[requestType](`${API_URL}${requestUrl}`);
