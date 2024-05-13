import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  statusCode: number;
  isSucces: boolean;
  errors: string[];
  result: T[];
  count: number;
}
export interface FetchResponseDelete {
  statusCode: number;
  isSucces: boolean;
  errors: string[];
  result: null;
}

const authToken = JSON.parse(localStorage.getItem("token")!);
const axiosInstance = axios.create({
  baseURL: "http://localhost:5044/api",
  headers: {
    Authorization: `Bearer ${authToken}`,
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
  put = (id: number, data: T) => {
    return axiosInstance
      .put<T>(this.endpoint + "/" + id, data)
      .then((res) => res.data);
  };
  delete = (id: number) => {
    return axiosInstance
      .delete<FetchResponseDelete>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}

export default APIClient;
