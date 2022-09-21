import { orderConfirmationDetails } from "../../../helpers/OrderConfirmation";
import Text from "../../shared/Text";

const OtherDetails = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 pt-11 gap-x-40 gap-y-10 grid-col-1">
      {orderConfirmationDetails.map(({ id, title, desc }) => (
        <div key={id} className="space-y-4">
          <Text className="font-extrabold lg:text-4xl text-1.5xl">{title}</Text>
          <Text className="text-xs font-medium lg:text-2xl">{desc}</Text>
        </div>
      ))}
    </div>
  );
};

export default OtherDetails;
