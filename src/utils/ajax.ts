import axios from 'axios';
import { Result } from '../interfaces/Common';
import { OAUTH_API_HOST } from '../libs/Common';

const instance = axios.create({ baseURL: OAUTH_API_HOST });
instance.interceptors.request.use((config) => {
    return config;
});
instance.interceptors.response.use((value) => {
    if (value.status === 200) {
        const result = <Result>value.data;
        return result;
    } else {
        return value;
    }
});
export const ajax = instance;