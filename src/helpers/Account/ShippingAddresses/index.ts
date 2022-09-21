import * as Yup from "yup";
import { NAME_REGEX, ZIP_CODE_PATTERN } from "../../../config/Regex";

interface Props {
  id?: string,
  name: string,
  email: string,
  address: string,
  apartment: string,
  city: string,
  state: string,
  zipCode: string,
  defaultAddress: boolean,
  active:boolean,
}

export const addressInitialValues = (addressData?:Props) => {
  const values = {
    id: addressData?.id || "",
    name: addressData?.name || "", 
    email: addressData?.email || "",
    address: addressData?.address || "",
    apartment: addressData?.apartment || "",
    city: addressData?.city || "",
    state: addressData?.state || "",
    zipCode: addressData?.zipCode || "",
    defaultAddress: addressData?.defaultAddress || false,
    active:false,
  };
  return values;
};

export const AddressFormValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required.")
        .matches(NAME_REGEX, "Please enter valid name"),

  email: Yup.string().email("Invalid email").required("Email is required."),

  address: Yup.string().required("Address is required."),

  apartment: Yup.string().required("Apartment is required."),

  city: Yup.string().required("City is required."),

  state: Yup.string().required("State is required."),

  zipCode: Yup.string().required("Zipcode is required.")
          .matches(ZIP_CODE_PATTERN, "Please enter valid zipcode"),
});

export const AddNewShippingFormFields = [
  {
    name: "name",
    id: "name",
    label: "Your name",
    type: "textbox",
  },
  {
    name: "email",
    id: "email",
    label: "Email address",
    type: "textbox",
  },
  {
    name: "address",
    id: "address",
    label: "Address",
    type: "textbox",
  },
  {
    name: "apartment",
    id: "apartment",
    label: "Apartment/Suite/Floor (optional)",
    type: "textbox",
  },
  {
    name: "city",
    id: "city",
    label: "City",
    type: "select",
    MenuItem: [
      {
        id: "1",
        value: "City 1",
      },
      {
        id: "2",
        value: "City 2",
      },
      {
        id: "3",
        value: "City 3",
      },
    ],
  },
  {
    name: "state",
    id: "state",
    label: "State",
    type: "select",
    MenuItem: [
      {
        id: "1",
        value: "State 1",
      },
      {
        id: "2",
        value: "State 2",
      },
      {
        id: "3",
        value: "State 3",
      },
    ],
  },
  {
    name: "zipCode",
    id: "zipCode",
    label: "Zip code",
    type: "textbox",
  },
  {
    name: "defaultAddress",
    id: "defaultAddress",
    label: "Set address as default",
    type: "checkbox",
  },
];
