import { trackingPageData } from "../../../helpers/TrackingPage";
import Text from "../../shared/Text";

const ShippedStatus = () => {
  return (
    <div className="mb-50 mt-7 lg:flex lg:w-9/10 lg:mx-auto">
      <img
        src={trackingPageData.images.airplane}
        alt="athlete in a plane"
        className="w-full lg:w-5.5/12 h-120 lg:h-168 mb-9.5"
      />
      <div className="w-11/12 lg:w-7/12 mx-auto lg:pl-[6%] lg:pt-1">
        <Text className="mb-8 text-3xl font-extrabold text-black font-mulish lg:text-4xl">
          Your order has been shipped!
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          Your player apparel is on its way!
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          Your order has been shipped to the following address:
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          <span>
            Ashley James <br />
            123456 Applewood Lane <br />
            #1234 <br />
            New York, NY 10001
          </span>
        </Text>
        <Text className="font-medium text-black font-mulish text-md lg:text-xl">
          Tracking ID: TBA01849493858883
        </Text>
      </div>
    </div>
  );
};

export default ShippedStatus;
