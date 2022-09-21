import * as yup from "yup";
export const ContactInitialvalues = {
  fullName: "",
  emailAddress: "",
  subject: "",
  description: "",
};

export const ContactUsValidationValues = yup.object().shape({
  fullName: yup.string().required("Please enter your Full Name"),
  emailAddress: yup
    .string()
    .required("Email is required")
    .email("Invalid Email Address format"),
  subject: yup.string().required("Subject is a required field"),
  description: yup.string().required("Message is a required field"),
});

export const AthleticEstateContactData = [
  {
    key: "Email Address",
    value: "example@email.com",
  },
  {
    key: "Phone",
    value: "+1 (123) 456-7890",
  },
  {
    key: "Address",
    value: "Lorem ipsum dolor sit amet",
  },
];
