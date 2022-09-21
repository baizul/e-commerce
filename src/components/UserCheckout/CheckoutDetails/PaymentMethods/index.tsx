import { Button } from "@mui/material";
import { useState } from "react";
import BillingAddress from "./BillingAddress";
import GuestPaymentMethod from "./GuestPaymentMethod";
import UserAccountPaymentMethod from "./UserAccountPaymentMethod";

interface Props {
  setCurrentStatus: (val: number) => void;
}

const PaymentMethods = ({ setCurrentStatus }: Props) => {
  const [submitted, setisSubmitted] = useState(false);
  const [PaymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    validity: "",
    cvc: "",
  });
  return (
    <>
      {submitted ? (
        <div className="flex flex-row justify-between">
          <div className="font-medium leading-7 text-md text-darkGray md:text-2xl font-mulish">
            Card ending in{" "}
            {PaymentDetails.cardNumber.substring(
              PaymentDetails.cardNumber.length - 4
            )}
          </div>
          <div>
            <Button
              variant="contained"
              className="w-24  md:w-32  !text-sm p-2 !bg-black lg:!h-10 !h-7"
              size="small"
              onClick={() => {
                setisSubmitted(false);
                setCurrentStatus(2);
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      ) : (
        <>
          {localStorage.getItem("token") ? (
            <UserAccountPaymentMethod />
          ) : (
            <GuestPaymentMethod
              PaymentDetails={PaymentDetails}
              setPaymentDetails={setPaymentDetails}
            />
          )}

          <BillingAddress />
          <Button
            variant="contained"
            className="!my-6 !capitalize !font-mulish !w-44 !h-10 !text-base "
            onClick={() => {
              setisSubmitted(true);
              setCurrentStatus(3);
            }}
          >
            Continue
          </Button>
        </>
      )}
    </>
  );
};

export default PaymentMethods;
