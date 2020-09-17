// showLastCommitMessageForThisLibrary.js
import {create} from 'apisauce';

// define the api
export const createApi = (baseUrl, headers = {}) => {
  return create({
    baseURL: baseUrl,
    headers: {timeout: 30000, ...headers},
  });
};

export const api = (Api) => {
  return {
    post: async (url, param = {}) => {
      try {
        let res = await Api.post(url, param);
        return res;
      } catch (error) {}
    },
    get: async (url, param = {}) => {
      try {
        let res = await Api.get(url, param);
        return res;
      } catch (error) {}
    },
    delete: async (url, param = {}) => {
      try {
        let res = await Api.delete(url, param);
        return res;
      } catch (error) {}
    },
    put: async (url, param = {}) => {
      try {
        let res = await Api.put(url, param);
        return res;
      } catch (error) {}
    },
  };
};
