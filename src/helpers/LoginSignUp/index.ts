import * as yup from "yup";
import { NAME_REGEX, LOWERCASE_PATTERN, NUMBER_PATTERN, SPECIAL_CHAR_PATTERN, UPPERCASE_PATTERN } from "../../config/Regex";
export const SignInDataValidationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6,"Password must be atleast 6 characters long")
    .matches(UPPERCASE_PATTERN, "Password must contain a uppercase letter")
    .matches(LOWERCASE_PATTERN, "Password must contain a lowercase letter")
    .matches(NUMBER_PATTERN, "Password must contain a number")
    .matches(SPECIAL_CHAR_PATTERN, "Password must contain a special character"),
});

export const SignUpDataValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your First Name")
    .matches(NAME_REGEX, "First Name is not valid"),
  lastName: yup
    .string()
    .required("Please enter your Last Name")
    .matches(NAME_REGEX, "Last Name is not valid"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6,"Password must be atleast 6 characters long")
    .matches(UPPERCASE_PATTERN, "Password must contain a uppercase letter")
    .matches(LOWERCASE_PATTERN, "Password must contain a lowercase letter")
    .matches(NUMBER_PATTERN, "Password must contain a number")
    .matches(SPECIAL_CHAR_PATTERN, "Password must contain a special character"),
});

interface signInfields {
  label: string;
  id: string;
  name: string;
}

export const signInInitialValues = {
  email: "",
  password: "",
  rememberMe: false,
};

export const signInfields = [
  { label: "Email address", id: "email", name: "email" },
  { label: "Password", id: "password", name: "password" },
];

export const signUpfields = [
  { label: "First Name", id: "firstName", name: "firstName" },
  { label: "Last Name", id: "lastName", name: "lastName" },
  { label: "Email address", id: "email", name: "email" },
  { label: "Password", id: "password", name: "password" },
];

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUpInitialValues: MyFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};
