import classNames from "classnames";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface Props {
  quantity?: number;
  setQuantity?: (val: number) => void;
}

const QuantitySetter = ({ quantity, setQuantity }: Props) => {
  return (
    <div className="flex space-x-2">
      <p
        className={classNames(
          "flex items-center justify-center w-8 text-white rounded-sm cursor-pointer h-7 lg:w-10  lg:h-9",
          quantity > 1 ? "bg-eclipse-1" : "bg-eclipse-1 opacity-70"
        )}
        onClick={() => setQuantity(quantity <= 0 ? 0 : quantity - 1)}
      >
        <AiOutlineMinus />
      </p>
      <p className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer lg:w-10 bg-nero lg:h-9 h-7">
        {quantity}
      </p>
      <p
        className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer h-7 lg:w-10 bg-eclipse-1 lg:h-9"
        onClick={() => setQuantity(quantity + 1)}
      >
        <AiOutlinePlus />
      </p>
    </div>
  );
};

export default QuantitySetter;
