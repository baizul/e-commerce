import Text from "../../shared/Text";
import { Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import {
  incrementCartItem,
  decrementCartItem,
  removeCartItem,
} from "../../../redux/Actions/cart";
import { useDispatch } from "react-redux";
import { ICart } from "../../../redux/Protocols/cart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { JerseyColorData, JerseysizeData } from "../../../helpers/ProductList";

interface Props {
  Items: ICart;
}

const CartItemCard = ({ Items }: Props) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const dispatch = useDispatch();

  const incrementCart = (id: string) => {
    dispatch(incrementCartItem({ id: id }));
  };

  const decrementCart = (id: string) => {
    if (Items.qty > 1) {
      dispatch(decrementCartItem({ id: id }));
    }
  };

  const removeFromCart = (id: string) => {
    dispatch(removeCartItem({ id }));
  };

  return (
    <>
      <div className="flex w-full space-x-4">
        <img src={Items.image} alt="Item" className="h-24 w-[20%] mr-5" />
        <div className="h-32 text-xs font-medium md:h-44 ">
          {isMobile && Items.teamName}
          <Text className="text-xs lg:text-lg">
            {Items.name} -<b>{Items.jerseyNumber}</b>
          </Text>
          <div className="text-xs font-bold">
            Size
            {isMobile ? (
              <b className="font-normal">: {Items.size}</b>
            ) : (
              <select
                id="size"
                className="p-1 mx-4 my-1 font-normal border w-28 border-1"
                value={Items.size}
              >
                {JerseysizeData.map(({ label, value }, idx) => (
                  <option key={idx} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="text-xs font-bold">
            Color
            {!isMobile && (
              <select
                id="size"
                className="p-1 mx-[10px] my-1 font-normal border w-28 border-1"
                value={Items.color}
              >
                {JerseyColorData.map(({ label, value }, idx) => (
                  <option key={idx} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className="flex mt-2 space-x-1">
            <Text className="text-lg font-extrabold text-eclipse">QTY</Text>
            <p
              className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer h-7 lg:w-10 bg-eclipse-1 lg:h-9"
              onClick={() => decrementCart(Items.id)}
            >
              <AiOutlineMinus />
            </p>
            <Text className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer lg:w-10 bg-nero lg:h-9 h-7">
              {Items.qty}
            </Text>
            <p
              className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer h-7 lg:w-10 bg-eclipse-1 lg:h-9"
              onClick={() => incrementCart(Items.id)}
            >
              <AiOutlinePlus />
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <Text className="text-xs font-bold md:text-lg">
            ${Items.qty * Items.price}.00
          </Text>
          <Button
            className="!font-normal !capitalize !underline !text-xs !md:text-base !text-crimson"
            variant="text"
            size="small"
            onClick={() => {
              removeFromCart(Items.id);
            }}
          >
            Remove
          </Button>
        </div>
      </div>
      <hr className="w-full mt-6 border-gainsboro border-1" />
    </>
  );
};

export default CartItemCard;
