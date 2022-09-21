import { API_URLS } from "../../config/API_URLS";
import axios from "../../utils/Axios/axiosInstance";

export const updateUserDetails = async (values: any) => {
  try {
    const reqBody = {
      first_name: values?.firstName,
      last_name: values?.lastName,
      email: values?.email,
      profile_image_url: values?.profileImageURL,
      gender: values?.gender,
      birth_year: values?.birthYear,
      bio_details: values?.bio_details,
    };
    await axios.put(API_URLS?.updateUser, reqBody);
  } catch (error) {
    console.log(`Error in updating user details ${error} | Account`);
  }
};

export const deleteAccountFn = async (reqBody: object) => {
  try {
    const response = await axios.post(API_URLS.deleteAccount, reqBody, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};

export const addCreditCardDetails = async (values: any, userDataInfo: any) => {
  try {
    const reqBody = {
      user_client_id: userDataInfo.userClientId,
      user_id: userDataInfo.userId,
      client_id: userDataInfo.clientId,
      card_holder_name: values?.cardHolderName,
      card_number: values?.cardNumber,
      cc_last_4_digits: values?.cardNumber?.slice(-4),
      expiry_date: values?.expirationDate,
      is_default: values?.defaultPaymentMethod,
    };
    const response = await axios.post(API_URLS?.userPaymentDetails, reqBody);
    return response;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};

export const editCreditCardDetails = async (values: any, creditCardId: any) => {
  try {
    const reqBody = {
      card_holder_name: values?.cardHolderName,
      card_number: values?.cardNumber,
      expiry_date: values?.expirationDate,
      is_default: values?.defaultPaymentMethod,
    };
    const response = await axios.put(
      API_URLS?.userPaymentDetails + `/${creditCardId}`,
      reqBody
    );
    return response;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};

export const getCreditCardDetails = async (userClientId: any) => {
  try {
    const reqParams = userClientId;
    const data = await axios.get(
      API_URLS.userPaymentDetails + `/${userClientId}`,
      reqParams
    );
    return data;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};

export const deleteCreditCardDetails = async (id: any) => {
  try {
    const reqParams = id;
    const data = await axios.put(
      API_URLS.userPaymentDetailsDelete + `/${id}`,
      reqParams
    );
    return data;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};

export const changeDefaultCreditCard = async (
  defaultCard: boolean,
  creditCardId: any
) => {
  try {
    const reqBody = {
      is_default: defaultCard,
    };
    const response = await axios.put(
      API_URLS?.userPaymentDetails + `/${creditCardId}`,
      reqBody
    );
    return response;
  } catch ({ response }) {
    throw new Error(response?.data?.error?.message);
  }
};
