export const API_URLS = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
  login: "/v1/users/login",
  signUp: "/v1/users/sign_up",
  resetPassword: "/v1/reset_password",
  authUser: "/v1/users/auth_user",
  updateUser: "/v1/users",
  getSignedUrl: "/v1/media/signed_url",
  deleteAccount: "/v1/delete_account",
  userPaymentDetails: "/v1/user_payment_details",
  userPaymentDetailsDelete: "/v1/user_payment_details_delete",
  verifyEmail: "/v1/users/verify_email",
  getShippingAddress: "/v1/get_shipping_addresses",
};
