import { trackingPageData } from "../../../helpers/TrackingPage";
import Text from "../../shared/Text";

const DeliveryStatus = () => {
  return (
    <div className="mb-50 mt-7 lg:flex lg:w-9/10 lg:mx-auto">
      <img
        src={trackingPageData.images.paparazzi}
        alt="athlete with bodyguard"
        className="w-full lg:w-5.5/12 h-120 lg:h-168 mb-9.5"
      />
      <div className="lg:pt-1 w-11/12 lg:w-7/12 mx-auto lg:pl-[6%]">
        <Text className="mb-8 text-3xl font-extrabold text-black font-mulish lg:text-4xl">
          Your order is out for delivery!
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          Your order needs an assist. It has been passed to the next person in
          the supply chain for delivery.
        </Text>
        <Text className="mb-6 lg:mb-8 font-extrabold font-mulish text-xl lg:text-3.5xl text-black">Delivery Status</Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          A package is in Brooklyn
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          Estimated delivery is 6P on 20 April 2022.
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          Pull data from UPS API
        </Text>
        <Text className="mb-6 lg:mb-8 font-extrabold font-mulish text-xl lg:text-3.5xl text-black">
          Delivery Notes
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          None.
        </Text>
        <Text className="font-medium text-black font-mulish text-md lg:text-xl">
          <span>
          Please refer to the tracking ID for <br className="md:hidden" />additional details.
          <br />
          Tracking ID: TBA01849493858883
          </span>
        </Text>
      </div>
    </div>
  );
};

export default DeliveryStatus;
