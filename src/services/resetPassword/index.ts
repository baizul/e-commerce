import { API_URLS } from "../../config/API_URLS";
import axios from "../../utils/Axios/axiosInstance";

export const resetPasswordFn = async (reqBody: {
  [key: string]: any;
}) => {
  try {
    const data = await axios.put(API_URLS.resetPassword, reqBody);
    return data;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};
