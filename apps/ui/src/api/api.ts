import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.interceptors.request.use(
    function (config) {
        config.headers['Content-Type'] = 'application/json';

        // TODO: Ensure that your token handling logic is correct
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

// Response interceptor
axios.interceptors.response.use(
    function (response: AxiosResponse) {
        return response.data; // Return only the data part of the response
    },
    function (error) {
        // Handle errors
        if (error.response) {
            // The request was made, and the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response error:', error.response.data);
            return Promise.reject(error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Request error:', error.request);
            return Promise.reject('No response received');
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up request:', error.message);
            return Promise.reject(error.message);
        }
    },
);

// Methods for making API requests
export const getDataMethod = (
    path: string,
    config: AxiosRequestConfig = {},
): Promise<any> => {
    return axios.get(path, config);
};

export const postDataMethod = (
    path: string,
    data: any,
    config: AxiosRequestConfig = {},
): Promise<any> => {
    return axios.post(path, data, config);
};

export const putDataMethod = (
    path: string,
    data: any,
    config: AxiosRequestConfig = {},
): Promise<any> => {
    return axios.put(path, data, config);
};

export const patchDataMethod = (
    path: string,
    data: any,
    config: AxiosRequestConfig = {},
): Promise<any> => {
    return axios.patch(path, data, config);
};

export const deleteDataMethod = (
    path: string,
    config: AxiosRequestConfig = {},
): Promise<any> => {
    return axios.delete(path, config);
};
