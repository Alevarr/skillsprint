import axios, { AxiosRequestConfig } from "axios";
import User from "../entities/User";
import Cookies from 'universal-cookie'
import { toMs } from "ms-typescript";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
  }

const clientInstance = axios.create({
    baseURL: "http://localhost:8080/api/",
})

class ApiClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config?: AxiosRequestConfig) => clientInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    getSingle = (config?: AxiosRequestConfig) => clientInstance.get<T>(this.endpoint, config).then(res => res.data);
    post = (config?: AxiosRequestConfig) => clientInstance.post<T>(this.endpoint, config).then(res => res.data);
    static signUpUser = (config?: AxiosRequestConfig) => clientInstance.post<{"x-auth-token": string}>("/users", config);
}

export default ApiClient;