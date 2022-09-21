import * as yup from "yup";

export interface MyFormValues {
  bankInstitution?: string;
  accountType?: string;
  accountNumber?: number;
  routingNumber?: number;
}

export const bankAccountInitialValues: MyFormValues = {
  bankInstitution: "",
  accountType: "",
  accountNumber: null,
  routingNumber: null,
};

export const bankInstitutionOptions = {
  id: "bankInstitution",
  type: "autocomplete",
  placeholder: "Search Banking Institution",
  label: "Search Athlete’s Name",
  options: [
    { label: "Charter Bank", value: "Charter Bank" },
    { label: "Champ Bank", value: "Champ Bank" },
    { label: "Chase Bank", value: "Chase Bank" },
    { label: "Lorem", value: "Lorem" },
  ],
};

export const bankAccountType = {
  options: [
    {
      id: 1,
      value: "Savings",
      label: "Savings",
    },
    {
      id: 2,
      value: "Checking",
      label: "Checking",
    },
  ],
};

export const AeRevenueTermsData = [
  {
    heading: "Revenue Breakdown:",
    text: "",
  },
  {
    heading: "Refunds",
    text: "Any refund that is given to a customer reverses the funds earned and is deducted from the next payout.  If there is a negative carryover at the end of a payment cycle, then NO funds are distributed into the bank account of the Athlete, or Athletic Estate.",
  },
  {
    heading: "Payout Schedule",
    text: "Revenue generated from each calendar month is paid to Athletic Estate members on the 15th Day of the next month. ",
  },
  {
    heading: "Sales Tax, Gateway Fees, Shipping & Handling",
    text: "ST, GF, S & H are paid by the Customer and considered “pass-thru” that is deducted first. Then, the remainder is paid out to AE Company and Athletic Estate members.",
  },
];
