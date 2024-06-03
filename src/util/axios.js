import axios from 'axios';
import {getUserFromLocalStorage} from '../util/localStorage'

const customFetch = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
  });


customFetch.interceptors.request.use((config) => {
  debugger;
   const user = getUserFromLocalStorage();
    if (user) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    } 
    return config;
  })




export default customFetch;