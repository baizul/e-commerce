import { Divider } from "@mui/material";
import OfferSection from "./OfferSection";
import PaymentData from "./PaymentData";

const UserAccountPaymentMethod = () => {
  return (
    <>
      <PaymentData />
      <Divider className="!my-8" />
      <OfferSection />
    </>
  );
};

export default UserAccountPaymentMethod;
