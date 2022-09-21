import classNames from "classnames";
import { useSelector } from "react-redux";
import { confirmedCartItems } from "../../../helpers/OrderConfirmation";
import { IReducer } from "../../../redux/Reducers";
import Text from "../../shared/Text";

const CartItems = () => {
  const cart = useSelector((state: IReducer) => state.cart);
  return (
    <div className="w-full mt-8 lg:w-1/3">
      <div className="flex items-center justify-between">
        <Text className="text-4xl font-extrabold">Your Order</Text>
        <Text>({cart.length} items)</Text>
      </div>
      <div className="pr-4 overflow-y-scroll h-96">
        {cart.map(({ id, name, qty, image, price, color, size }) => (
          <div
            key={id}
            className="flex justify-between border-b-0.3 border-whiteSmoke py-6"
          >
            <img alt={id} src={image} className="h-20 w-14" />
            <div className="flex flex-col">
              <Text className="font-bold text-md">{name}</Text>
              <div className="flex">
                <Text>Size:&nbsp;</Text>
                <Text className="text-left">{size}</Text>
              </div>
              <div className="flex">
                <Text>Color:&nbsp;</Text>
                <Text>{color}</Text>
              </div>
              <div className="flex">
                <Text>Qty:&nbsp;</Text>
                <Text>{qty}</Text>
              </div>
            </div>
            <Text className="font-bold text-md">${price}</Text>
          </div>
        ))}
      </div>
      <div>
        {confirmedCartItems.cost.map(({ id, title, price }) => (
          <div
            key={id}
            className={classNames(
              "flex justify-between my-5",
              id === "subtotal"
                ? "lg:text-2xl text-xl font-bold"
                : "lg:text-xl text-md font-medium"
            )}
          >
            <Text>{title}</Text>
            <Text>{price}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
