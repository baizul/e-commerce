import { trackingPageData } from "../../../helpers/TrackingPage";
import Text from "../../shared/Text";

const PreparingStatus = () => {
  return (
    <div className="mt-7 mb-50 lg:flex lg:w-9/10 lg:mx-auto">
      <img
        src={trackingPageData.images.weightRoom}
        alt="Athlete in the gym training"
        className="w-full lg:w-5.5/12 h-120 lg:h-168 mb-9.5"
      />
      <div className="w-11/12 lg:w-7/12 mx-auto lg:pl-[6%] lg:pt-1">
        <Text className="mb-8 text-3xl font-extrabold text-black font-mulish lg:text-4xl">
          We are preparing your order!
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          Just like your favorite athlete needs time to prepare for the season,
          so do we need time to prepare your customized player apparel.
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          <span>
            Depending upon the popularity of the athlete or player,{" "}
            <br className="hidden lg:inline-block" /> apparel may require 14 to
            28 days to prepare.
          </span>
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
          <span>
            Updates to your order status are made available in your account
            profile and sent to the email:{" "}
            <br className="hidden lg:inline-block" /> ajames14@gmail.com
          </span>
        </Text>
        <Text className="font-medium text-black font-mulish text-md lg:text-xl">
          We thank you for your patience as we prepare your custom order.
        </Text>
      </div>
    </div>
  );
};

export default PreparingStatus;
