import axios, { AxiosInstance } from "axios";
const baseURL: string = import.meta.env.VITE_APP_API_URL;

const headers = {
  "Content-Type": "application/json; charset=utf-8",
};

const SERVICE = (): AxiosInstance => {
  const axiosInstance = axios.create({ baseURL, headers });

  axiosInstance.interceptors.response.use(
    (response) => response,

    async (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export { SERVICE };
