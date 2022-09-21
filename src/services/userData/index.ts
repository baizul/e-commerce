import { API_URLS } from "../../config/API_URLS";
import axios from "../../utils/Axios/axiosInstance";

export const getUserDataFn = async () => {
  try {
    const data = await axios.get(API_URLS.authUser);
    return data;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};
