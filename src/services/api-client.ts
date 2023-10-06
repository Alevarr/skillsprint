import axios, { AxiosRequestConfig } from "axios";
import Cookies from 'universal-cookie'

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
  }

  const getToken = () => {
    const cookies = new Cookies();
    const token = cookies.get("skillsprint_auth_token")
    return token;

}

const clientInstance = axios.create({
    baseURL: "https://skillsprint.site/api/",
    headers: {
        "x-auth-token": getToken()
    }
})

class ApiClient<T> {
    endpoint: string;
    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll = (config?: AxiosRequestConfig) => clientInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
    getSingle = (config?: AxiosRequestConfig) => clientInstance.get<T>(this.endpoint, config).then(res => res.data);
    post = (config?: AxiosRequestConfig) => clientInstance.post<T>(this.endpoint, config).then(res => res.data);
    postSingle = (config?: AxiosRequestConfig) => clientInstance.post<T>(this.endpoint, config).then(res => res.data);
    static signUpUser = (config?: AxiosRequestConfig) => clientInstance.post<{"x-auth-token": string}>("/users", config);
    static loginUser = (config?: AxiosRequestConfig) => clientInstance.post<{"x-auth-token": string}>("/auth", config);
}

export default ApiClient;