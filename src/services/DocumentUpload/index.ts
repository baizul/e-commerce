import { API_URLS } from "../../config/API_URLS";
import axiosInstance from "../../utils/Axios/axiosInstance";
import axios from 'axios';

export const uploadFile = async (file: File) => {
  if (file) {
    const response = await axiosInstance.get(API_URLS?.getSignedUrl);
    const imgSignedUrl = response?.["imageSignedUrl"];
    const result = await axios.put(imgSignedUrl, file);
    if (result?.status === 200) {
      const url = imgSignedUrl.substr(
        0,
        imgSignedUrl.indexOf("?X-Amz-Algorithm=")
      );
      return url;
    }
  }
};
