import * as yup from "yup";
import { NAME_REGEX } from "../../../../config/Regex";

export const fieldsLayoutData = [
  { id: "firstName", label: "First name", type: "text" },
  { id: "lastName", label: "Last name", type: "text" },
  { id: "emailAddr", label: "Email address", type: "email" },
];

export const userInfoInitialValues = {
  firstName: "",
  lastName: "",
  emailAddr: "",
};

export const userInfoValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .test("validateFirstName", "Please enter valid First name", (fn) =>
      fn ? NAME_REGEX.test(fn) : true
    )
    .matches(NAME_REGEX, "Please enter valid First name"),
  lastName: yup
    .string()
    .required("Last name is required")
    .test("validateLastName", "Please enter valid Last name", (ln) =>
      ln ? NAME_REGEX.test(ln) : true
    ),
  emailAddr: yup
    .string()
    .required("Email address is required")
    .email("Invalid Email Address format"),
});
