import { useSelector } from "react-redux";
import { IReducer } from "../../../../redux/Reducers";
import OrderItems from "./OrderItems";
import OrderSummary from "./OrderSummary";

const ConfirmOrder = () => {
  const cart = useSelector((state: IReducer) => state.cart);
  return (
    <div>
      {cart.map((Item, idx) => (
        <OrderItems key={idx} Items={Item} />
      ))}
      <OrderSummary />
    </div>
  );
};

export default ConfirmOrder;
