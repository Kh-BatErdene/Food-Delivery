import { message } from "antd";
import axios from "axios";

export const apiClient = axios.create();

apiClient.interceptors.response.use(
  function (response) {
    let data = response?.data || {};
    if (data?.success && data?.sucmod && data?.message) {
      message.success(data?.message);
    }
    if (!data.success && data?.message) {
      message.warning(data?.message);
    }
    return data;
  },
  function (error) {
    message.error(error);
    return Promise.reject(error);
  }
);
