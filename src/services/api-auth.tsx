import axios, { AxiosInstance } from "axios";

export interface FetchResponse<T> {
  statusCode: number;
  isSuccess: boolean;
  errors: string[];
  result: T[];
}

class APIauth<T> {
  private endpoint: string;
  private axiosInstance: AxiosInstance;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:5044/api",
    });

    // Attach an interceptor to include the token in the headers for every request
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  register = (data: T) => {
    return this.axiosInstance
      .post<T>(this.endpoint, data)
      .then((res) => res.data);
  };

  login = (data: T) => {
    return this.axiosInstance
      .post(this.endpoint + "/login", data)
      .then((res) => res.data);
  };
  extractRoleFromJwt = (token: string) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };
}

export default APIauth;
