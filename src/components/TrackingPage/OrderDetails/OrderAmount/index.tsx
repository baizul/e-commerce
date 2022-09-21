import Text from "../../../shared/Text";

const OrderAmount = () => {
  return (
    <div className="mx-auto w-9/10 mt-5.5 mb-8 lg:mb-44">
      <div className="flex justify-between">
        <Text className="font-medium text-md lg:text-xl font-mulish text-nero">Shipping</Text>
        <Text className="font-medium text-md lg:text-xl font-mulish text-nero">Free</Text>
      </div>
      <div className="flex justify-between mt-5.5">
        <Text className="font-medium text-md lg:text-xl font-mulish text-nero">Tax</Text>
        <Text className="font-medium text-md lg:text-xl font-mulish text-nero">$1.99</Text>
      </div>
      <div className="flex justify-between mt-5.5">
          <Text className="text-xl font-bold lg:text-2xl font-mulish text-nero">Subtotal</Text>
          <Text className="text-xl font-bold lg:text-2xl font-mulish text-nero">$208.00</Text>
      </div>
    </div>
  );
};

export default OrderAmount;
