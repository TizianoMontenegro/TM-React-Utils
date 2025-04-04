import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

let axiosInstance: AxiosInstance;

const createAxios = (baseURL: string) => {
    axiosInstance = axios.create({baseURL})
}

const setupInterceptors = () => {
    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem('token')
            if (token) {
                config.headers.set(`Authorization Bearer ${token}`)
            }
            console.log('request made to', config.url);
            return config
        },
        (error) => {
            console.log('error in request', error);
            return Promise.reject(error)
        }
    )

    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            console.log('response received from', response.config.url, {
                status: response.status,
                data: response.data
            });
            return response
        },
        (error) => {
            console.log('error in response', error);
            return Promise.reject(error)
        }
    )
}

export const initAxios = () => {
    createAxios('https://rickandmortyapi.com/api/')
    setupInterceptors()
    return axiosInstance
}