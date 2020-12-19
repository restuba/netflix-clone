import Axios from "axios";
import { APIKey, RootPath } from "./Config";

export const Get = (path, page = 1) => {
  const promise = new Promise(( resolve, reject ) => {
    Axios.get(`${RootPath}/${path}`, {
      params: {
        api_key: APIKey,
        language: 'en_US',
        page: page
      }
    })
    .then(result => {resolve(result.data)}
    ,err => {reject(err)});
  })
  return promise;
}