import axios from "axios";
import { API_URLS } from "../../config/API_URLS";
import { Store } from "../../redux/store";
import { SET_TOAST_ERROR } from "../../redux/Actions/common";

const axiosInstance = axios.create({
  baseURL: API_URLS.baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers = {
      Authorization: `Bearer ${token !== null ? token : ""}`,
      ...config.headers,
    };
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    Store.dispatch(
      SET_TOAST_ERROR({
        error: true,
        message:
          error?.response?.data?.error?.message || "Something went Wrong",
      })
    );
    return Promise.reject(error?.response?.data);
  }
);

export default axiosInstance;
