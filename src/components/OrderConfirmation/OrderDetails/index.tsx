import { Button } from "@mui/material";
import { Resources } from "../../../config/Resources";
import Text from "../../shared/Text";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const navigate = useNavigate();
  const handleListItemClick = (
    event: any,
    redirectTo: string
  ) => {
    navigate(redirectTo, { replace: true });
  };
  return (
    <div className="w-full lg:w-2/3 pb-28 lg:pt-28 pt-11">
      <div className="flex flex-col items-center justify-between space-y-4">
        <img
          src={Resources.images.OrderConfirmation.ShoppingCart}
          alt="cart"
          height={75}
          width={75}
        />
        <Text className="font-semibold lg:text-2xl text-nero text-md">
          Order #BLI837465LQ
        </Text>
        <Text className="font-extrabold lg:text-4xl text-1.5xl">
          Your Order Has Been Placed
        </Text>
        <Button className="!normal-case" variant="contained" onClick={(event) => {
                handleListItemClick(event, "/tracking-page");
              }}>
          Track Order
        </Button>
      </div>
      <div className="px-2 mt-8 space-y-4 text-base font-medium lg:mt-16 lg:text-xl lg:px-44">
        <Text>Your player apparel is being prepared.</Text>
        <Text>
          A message has been sent to ajames14@gmail.com to keep you up to date
          with your order.
        </Text>
      </div>
    </div>
  );
};

export default OrderDetails;
