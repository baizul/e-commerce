import { Divider } from "@mui/material";
import HeaderSection from "../../components/ContactUs/HeaderSection";
import CartItems from "../../components/OrderConfirmation/CartItems";
import OrderDetails from "../../components/OrderConfirmation/OrderDetails";
import OtherDetails from "../../components/OrderConfirmation/OtherDetails";

const OrderConfirmation = () => {
  return (
    <div className="p-4 bg-white lg:p-14">
      <HeaderSection PageName="Order Confirmation" />
      <div className="flex flex-col lg:flex-row">
        <OrderDetails />
        <CartItems />
      </div>
      <Divider className="text-whiteSmoke" />
      <OtherDetails />
    </div>
  );
};

export default OrderConfirmation;
