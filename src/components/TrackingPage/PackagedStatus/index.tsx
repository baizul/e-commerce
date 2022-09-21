import { trackingPageData } from "../../../helpers/TrackingPage";
import Text from "../../shared/Text";

const PackagedStatus = () => {
  return (
    <div className="mb-50 mt-7 lg:flex lg:w-9/10 lg:mx-auto">
      <img
        src={trackingPageData.images.lockerRoom}
        alt="Athlete is in the locker room"
        className="w-full lg:w-5.5/12 h-120 lg:h-168 mb-9.5"
      />
      <div className="lg:pt-1 w-11/12 lg:w-7/12 mx-auto lg:pl-[6%]">
        <Text className="mb-8 text-3xl font-extrabold text-black font-mulish lg:text-4xl">
          Your order is packaged!
        </Text>
        <Text className="mb-6 text-black lg:mb-8font-medium font-mulish text-md lg:text-xl">
          Get ready to gear up for the big game!
        </Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 inine-block font-mulish text-md lg:text-xl">
          <span>
            Your order has been prepared and is about to ship.{" "}
            <br className="hidden lg:inline-block" /> Estimated shipping date if{" "}
            <span className="font-bold"> 20 April 2022.</span>
          </span>
        </Text>
        <Text className="font-medium text-black font-mulish text-md lg:text-xl">
          We thank you for your patience as we prepare your custom order.
        </Text>
      </div>
    </div>
  );
};

export default PackagedStatus;
