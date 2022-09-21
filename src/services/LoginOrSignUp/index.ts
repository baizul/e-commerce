import { API_URLS } from "../../config/API_URLS";
import axios from "../../utils/Axios/axiosInstance";
import { Login, Registration } from "../../protocols/LoginOrSignUp";

export const loginFn = async (reqBody: Login.RequestBody) => {
  try {
    // const response: Login.Response = await axios.post(API_URLS.login, reqBody);
    // return response;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};

export const registerFn = async (reqBody: Registration.RequestBody) => {
  try {
    const response: Registration.Response = await axios.post(
      API_URLS.signUp,
      reqBody
    );
    return response;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};

export const verifyEmailFn = async (token: string) => {
  try {
    const response: Registration.Response = await axios.get(
      `${API_URLS.verifyEmail}?token=${token}`
    );
    return response;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};
