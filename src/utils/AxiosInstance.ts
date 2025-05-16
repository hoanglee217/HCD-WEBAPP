/* eslint-disable no-restricted-globals */
import axios from 'axios';
import { toast } from 'react-toastify';
import RefreshTokenHandler from '../components/api/authentication/RefreshTokenHandler';
import LogoutHandler from '../components/api/authentication/LogoutHandler';

let AxiosInstance = axios.create();
AxiosInstance.defaults.timeout = 1000 * 60;
// Add interceptors in middle request or response
AxiosInstance.interceptors.request.use((config) => {
    // Do something before request is sent
    const accessToken = localStorage.getItem('accessToken');    
    config.headers.Authorization = `Bearer ${accessToken}`;
    
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
AxiosInstance.interceptors.response.use((response) => {
    // inside 200 => 299 statusCode 
    return response;
  }, async (error) => {
    // outside 200 => 299 statusCode
    const originalRequest = error.config;
    
    // error 401 => logout
    if (error.response?.status === 401) {
      toast.error(error.response.data.detail || error.response.statusText);
      return await LogoutHandler().then(()=>{
        location.href= '/';
      });  
    }

    // error 410 => auto refresh token
    if (error.response?.status === 410 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark this request as retried
      const refreshToken = localStorage.getItem('refreshToken');

      // check refresh token invalid
      if (!refreshToken) {
        // No refresh token available, logout the user
        toast.error(error.response.data.detail || error.response.statusText);
        return await LogoutHandler().then(() => {
          location.href = '/';
        });
      }
      
      // Attempt to refresh the token
      const response = await RefreshTokenHandler({ refreshToken: refreshToken });
      localStorage.setItem("accessToken", response.accessToken);
      
      AxiosInstance.defaults.headers.Authorization = `Bearer ${response.accessToken}`;
      // Retry the original request with the new token
      return AxiosInstance(originalRequest);
    }

    // another error => show error
    toast.error(error.response.data.detail || error.response.statusText);

    return Promise.reject(error);
  });

export default AxiosInstance;