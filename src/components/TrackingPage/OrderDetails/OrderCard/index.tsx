import Text from "../../../shared/Text";
interface Props {
  image: string;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

const OrderCard = (props: Props) => {
  return (
    <div className="flex h-36 pt-5 border-b-[1px] border-gainsboro">
      <img
        src={props.image}
        className="w-14 h-20 ml-[5.3%] mr-[7.1%] lg:w-1.5/12"
        alt="jersey image"
      />  
      <div className="lg:flex lg:w-10.5/12 lg:justify-between">
        <div>
          <Text className="font-bold text-md font-mulish text-nero">
            {props.name}
          </Text>
          <Text className="font-medium text-md font-mulish text-nero">
            <span>Size: {props.size}</span>
          </Text>
          <Text className="font-medium text-md font-mulish text-nero">
            <span>Color: {props.color}</span>
          </Text>
          <Text className="font-medium text-md font-mulish text-nero">
            <span>Qty: {props.quantity}</span>
          </Text>
        </div>
        <div>
          <Text className="text-[0.8125rem] font-mulish font-bold text-eclipse-1">
            <span>${props.price.toFixed(2)}</span>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
