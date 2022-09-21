import { Button } from "@mui/material";
import classNames from "classnames";
import { BsTagFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { OrderSummaryDetails } from "../../../../../helpers/UserCheckout/ConfirmOrder";
import Text from "../../../../shared/Text";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-5/12 w-full !font-mulish md:w-3/5">
      {OrderSummaryDetails.map(({ id, price, title }) => (
        <div className="flex justify-between py-3 font-medium lg:text-xl text-md">
          {id === "promoCode" ? (
            <div className="flex items-center space-x-2">
              <Text className="font-medium">{title}</Text>
              <span>:</span>
              <BsTagFill className="text-crimson" />
              <Text className="font-bold text-crimson">SAVE 30</Text>
            </div>
          ) : (
            <Text className="">{title}</Text>
          )}
          <Text className={classNames(id === "promoCode" && "text-crimson")}>
            {price}
          </Text>
        </div>
      ))}
      <div className="flex justify-between text-xl font-bold lg:text-2xl">
        <Text>Subtotal</Text>
        <Text>$147.01</Text>
      </div>
      <Button
        variant="contained"
        fullWidth
        className="!my-8 !normal-case !font-mulish"
        onClick={() => navigate("/confirmed-order")}
      >
        Place Your Order
      </Button>
    </div>
  );
};

export default OrderSummary;
