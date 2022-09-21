import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  JerseyColorData,
  JerseysizeData,
} from "../../../../../helpers/ProductList";
import { removeCartItem } from "../../../../../redux/Actions/cart";
import { ICart } from "../../../../../redux/Protocols/cart";
import AutoComplete from "../../../../shared/AutoComplete";
import QuantitySetter from "../../../../shared/QuantitySetter";
import Text from "../../../../shared/Text";
interface Props {
  Items: ICart;
}

const OrderItems = ({ Items }: Props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const removeFromCart = (id: string) => {
    dispatch(removeCartItem({ id }));
  };
  return (
    <div className="flex lg:space-x-10 space-x-5 select-none border-b-0.3 border-gainsBoro lg:py-8 lg:w-5/12 w-full py-4 !font-mulish">
      <img
        src={Items.image}
        alt="jerseys"
        className="h-16 w-11 lg:h-20 lg:w-14"
      />
      <div className="flex flex-col space-y-4">
        <Text className="text-sm font-medium whitespace-nowrap lg:text-base">
          {Items.name} - {Items.jerseyNumber}
        </Text>
        <div className="flex items-center space-x-4">
          <Text className="pr-2 text-xs font-bold text-matterhorn-2 font-mulish">
            SIZE
          </Text>
          <AutoComplete
            classToOverride="!bg-whiteSmoke"
            options={JerseysizeData}
            setValue={setSize}
            value={Items.size}
            textOverride="!text-black"
            paperBackground="bg-whiteSmoke text-black"
          />
        </div>
        <div className="flex items-center justify-between">
          <Text className="pr-2 text-xs font-bold text-matterhorn-2">
            COLOR
          </Text>
          <AutoComplete
            classToOverride="!bg-whiteSmoke"
            options={JerseyColorData}
            value={Items.color}
            setValue={setColor}
            textOverride="!text-black"
            paperBackground="bg-whiteSmoke text-black"
          />
        </div>
        <div className="flex items-center justify-between space-x-4">
          <Text className="text-xs font-bold text-matterhorn-2">QTY</Text>
          <QuantitySetter quantity={Items.qty} setQuantity={setQuantity} />
        </div>
      </div>
      <div className="flex flex-col items-center justify-between">
        <Text className="text-sm font-bold lg:text-lg">${Items.price}</Text>
        <Text
          className="underline cursor-pointer text-crimson text-md"
          onClick={() => removeFromCart(Items.id)}
        >
          Remove
        </Text>
      </div>
    </div>
  );
};

export default OrderItems;
