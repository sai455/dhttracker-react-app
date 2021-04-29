import axios from 'axios'
import { Config } from '../Config/index.example'
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: Config.localApi,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 3000,
})

export const handleError = ({ message, data, status }) => {
  return Promise.reject({ message, data, status })
}

// Request interceptor for API calls
instance.interceptors.request.use(
  async config => {
    console.log('here')
    const value =await AsyncStorage.getItem("Idtoken");;
    const keys = JSON.parse(value)
    config.headers = { 
      'Authorization': `Bearer ${keys.access_token}`,
    }
    return config;
  },
  error => {
    Promise.reject(error)
});

instance.interceptors.response.use(
  (response) => response,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status })
  },
)


// // Response interceptor for API calls
// instance.interceptors.response.use((response) => {
//   return response
// }, async function (error) {
//   const originalRequest = error.config;
//   if (error.response.status === 403 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     const access_token = await refreshAccessToken();            
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//     return axiosApiInstance(originalRequest);
//   }
//   return Promise.reject(error);
// });


export default instance
