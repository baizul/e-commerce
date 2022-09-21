import moment from "moment";
import * as yup from "yup";
import {
  UPPERCASE_PATTERN,
  LOWERCASE_PATTERN,
  NUMBER_PATTERN,
  SPECIAL_CHAR_PATTERN,
  NAME_REGEX,
} from "../../config/Regex";
import { savePaymentDetails } from "../../redux/Actions/Account";
import { Store } from "../../redux/store";

export const athleteTabOptions = [
  {
    id: "myInfo",
    value: "myInformation",
    label: "My Information",
  },
  { id: "orders", value: "orders", label: "Orders" },
  {
    id: "shippingAddr",
    value: "shippingAddresses",
    label: "Shipping Addresses",
  },
  {
    id: "aeMembership",
    value: "aeMembership",
    label: "AE Membership",
  },
  {
    id: "uploadedDocuments",
    value: "uploadedDocuments",
    label: "Uploaded Documents",
  },
];

export const tabOptions = [
  {
    id: "myInfo",
    value: "myInformation",
    label: "My Information",
  },
  { id: "orders", value: "orders", label: "Orders" },
  {
    id: "shippingAddr",
    value: "shippingAddresses",
    label: "Shipping Addresses",
  }
];

export const myInfoInitialValues = (userData: any) => {
  let user = {
    firstName: userData?.first_name || "",
    lastName: userData?.last_name || "",
    email: userData?.email || "",
    userName: userData?.user_name || "",
    gender: userData?.gender || 0,
    birthYear: userData?.birth_year || 0,
  };
  return user;
};

export const myInfoFormfields = [
  { label: "First Name", id: "firstName", name: "firstName", type: "text" },
  { label: "Last Name", id: "lastName", name: "lastName", type: "text" },
  { label: "Email address", id: "email", name: "email", type: "text" },
  { label: "Username", id: "userName", name: "userName", type: "text" },
  { label: "Year born", id: "birthYear", name: "birthYear", type: "number" },
  {
    label: "Gender",
    id: "gender",
    name: "gender",
    type: "text",
    MenuItem: [
      {
        id: 1,
        value: 0,
        label: "Male",
      },
      {
        id: 2,
        value: 1,
        label: "Female",
      },
      {
        id: 3,
        value: 2,
        label: "Transgender",
      },
      {
        id: 4,
        value: 3,
        label: "Non-binary/non-conforming",
      },
      {
        id: 5,
        value: 4,
        label: "Prefer not to say",
      },
    ],
  },
  { label: "Password", id: "password", name: "password", type: "password" },
];

export const changePasswordInitialValues = {
  cpassword: "",
  npassword: "",
  cnpassword: "",
};

export const changePasswordFormfields = [
  { label: "Current Password", id: "cpassword", name: "cpassword" },
  { label: "New Password", id: "npassword", name: "npassword" },
  { label: "Confirm New Password", id: "cnpassword", name: "cnpassword" },
];

export const createPasswordInitialValues = {
  epassword: "",
  cnpassword: "",
};

export const createPasswordFormFields=[
  { label: "Enter Password *", id: "epassword", name: "epassword" },
  { label: "Confirm Password *", id: "cnpassword", name: "cnpassword" },
]

export const passwordData = [
  { id: 1, value: "Be at least 6 characters long" },
  { id: 2, value: "Contain atleast 1 uppercase letter" },
  { id: 3, value: "Contain atleast 1 lowercase letter" },
  { id: 4, value: "Contain atleast 1 special character" },
  { id: 5, value: "New and Confirmed New passwords must match" },
];

export const changedPasswordValidationSchema = yup.object().shape({
  cpassword: yup
    .string()
    .required("Password is required")
    .min(6,"Password must be atleast 6 characters long")
    .matches(UPPERCASE_PATTERN, "Password must contain a uppercase letter")
    .matches(LOWERCASE_PATTERN, "Password must contain a lowercase letter")
    .matches(NUMBER_PATTERN, "Password must contain a number")
    .matches(SPECIAL_CHAR_PATTERN, "Password must contain a special character"),
  npassword: yup
    .string()
    .required("New Password is required")
    .min(6,"Password must be atleast 6 characters long")
    .matches(UPPERCASE_PATTERN, "New Password must contain a uppercase letter")
    .matches(LOWERCASE_PATTERN, "New Password must contain a lowercase letter")
    .matches(NUMBER_PATTERN, "New Password must contain a number")
    .matches(
      SPECIAL_CHAR_PATTERN,
      "New Password must contain a special character"
    ),
  cnpassword: yup
    .string()
    .required("Password is required")
    .min(6,"Password must be atleast 6 characters long")
    .matches(UPPERCASE_PATTERN, "Password must contain a uppercase letter")
    .matches(LOWERCASE_PATTERN, "Password must contain a lowercase letter")
    .matches(NUMBER_PATTERN, "Password must contain a number")
    .matches(SPECIAL_CHAR_PATTERN, "Password must contain a special character")
    .oneOf(
      [yup.ref("npassword"), null],
      "Please make sure both passwords match *"
    ),
});

export const createPasswordValidationSchema = yup.object().shape({
  epassword: yup
    .string()
    .required("New Password is required")
    .min(6,"Password must be atleast 6 characters long")
    .matches(UPPERCASE_PATTERN, "New Password must contain a uppercase letter")
    .matches(LOWERCASE_PATTERN, "New Password must contain a lowercase letter")
    .matches(NUMBER_PATTERN, "New Password must contain a number")
    .matches(
      SPECIAL_CHAR_PATTERN,
      "New Password must contain a special character"
    ),
  cnpassword: yup
    .string()
    .required("Password is required")
    .min(6,"Password must be atleast 6 characters long")
    .matches(UPPERCASE_PATTERN, "Password must contain a uppercase letter")
    .matches(LOWERCASE_PATTERN, "Password must contain a lowercase letter")
    .matches(NUMBER_PATTERN, "Password must contain a number")
    .matches(SPECIAL_CHAR_PATTERN, "Password must contain a special character")
    .oneOf(
      [yup.ref("epassword"), null],
      "Please make sure both passwords match *"
    ),
});

export const ProfileDataValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),

  lastName: yup.string().required("Last name is required"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address format"),
});

export const AeMembershipValidationSchema = yup.object().shape({
  bio_details: yup.string().required("Bio is required"),
});
export const AccountFormInitialValue = {
  cardHolderName: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
  defaultPaymentMethod: false,
};
export const AddCreditAccountSchema = yup.object().shape({
  cardHolderName: yup
    .string()
    .required("Card Holder Name is a required Field")
    .matches(NAME_REGEX, "Please Enter Valid Card Holder Name"),
  cardNumber: yup
    .string()
    .required("Card Number is a required Field")
    .test(
      "validateCardNo.Length",
      "Card Number should be 13-16 digits long",
      (cardNo) => cardNo?.length > 15 && cardNo?.length < 21
    ),
  expirationDate: yup
    .string()
    .required("Expiration Date is a required Field")
    .test(
      "validateEDFormat",
      "Please enter valid Expiration Date",
      (expnDate) =>
        moment(expnDate, "MM/YY", true).isValid() &&
        moment() < moment(expnDate, "MM/YY").add(1, "months")
    )
});

export const handleAddCardDetails = (values) => {
  try {
    const { save_payment_details } = Store?.getState();
    if (values?.defaultPaymentMethod) {
      save_payment_details.defaultPaymentMethod = values.cvv;
    }
    if (
      !save_payment_details?.CreditCardsData?.find(
        (data) => data.id === values.cvv
      )
    ) {
      save_payment_details.CreditCardsData.push({
        id: values.cvv,
        CardHolderName: values.cardHolderName,
        CardNumber: values.cardNumber,
        ExpDate: values.expirationDate,
        Cvv: values.cvv,
      });
    }
    Store.dispatch(savePaymentDetails({ ...save_payment_details }));
    return true;
  } catch (error) {
    return false;
  }
};

export const handleEditCardDetails = (values) => {
  console.log(values);
  try {
    let { save_payment_details } = Store?.getState();
    if (values?.defaultPaymentMethod) {
      save_payment_details.defaultPaymentMethod = values?.cvv;
    }
    save_payment_details?.CreditCardsData?.find((data) => {
      if (data.id === values?.cvv) {
        data.id = values.cvv;
        data.CardHolderName = values.cardHolderName;
        data.CardNumber = values.cardNumber;
        data.ExpDate = values.expirationDate;
        data.Cvv = values.cvv;
      }
    });
    Store.dispatch(savePaymentDetails({ ...save_payment_details }));
    return true;
  } catch (error) {
    return false;
  }
};
