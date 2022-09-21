export const ShippingFormFields = [
  { label: "Your name", id: "name", name: "name" },
  { label: "Email address", id: "email", name: "email" },
  { label: "Address", id: "address", name: "address" },
  {
    label: "Apartment/Suite/Floor (optional)",
    id: "apartment",
    name: "apartment",
  },
  { label: "City", id: "city", name: "city" },
  { label: "State", id: "state", name: "state" },
  { label: "Zip code", id: "zip", name: "zip" },
];

interface MyFormValues {
  name: string;
  email: string;
  address: string;
  apartment: string;
  city: string;
  state: string;
  zip: string;
}

export const shippingInitialValues: MyFormValues = {
  name: "",
  email: "",
  address: "",
  apartment: "",
  city: "",
  state: "",
  zip: "",
};
