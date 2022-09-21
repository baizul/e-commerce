import PurchasedInfo from "./PurchasedInfo";
import Text from "../../shared/Text";

const OrderDetails = () => {
  return (
    <div className="h-auto mx-auto mt-12 mb-48 bg-white rounded w-10.5/12 g:mb-24 border-whiteSmoke shadow-orderCard border-[1px]">
        <div className="mx-auto mb-4 w-9/10">
        <Text className="hidden mt-12 text-4xl font-extrabold lg:block font-mulish text-nero">Thank you for your order!</Text>
        <Text className="mt-5 text-lg font-normal lg:text-2xl lg: font-mulish text-nero"><span><span className="font-bold">Order</span> #BLI837465LQ</span></Text>
        <Text className="text-xs font-normal lg:text-lg font-mulish text-nero"><span><span className="font-bold">Order Date:</span> March 22, 2022</span></Text>
        </div>
      <PurchasedInfo />
    </div>
  );
};

export default OrderDetails;
