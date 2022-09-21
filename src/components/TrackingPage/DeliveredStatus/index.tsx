import { trackingPageData } from "../../../helpers/TrackingPage";
import { Resources } from "../../../config/Resources";
import { useMediaQuery } from "react-responsive";
import Text from "../../shared/Text";

const DeliveredStatus = () => {
  const isTab = useMediaQuery({ minWidth: 820 });
  var athleteImage = isTab ? Resources.images.TrackingPage.athleteNoDesktop : Resources.images.TrackingPage.athleteNo;
  return (
    <div className="mb-50 mt-7 lg:flex lg:w-9/10 lg:mx-auto">
      <img
        src={trackingPageData.images.onTheField}
        alt="athelete on the field"
        className="w-full lg:w-5.5/12 h-120 lg:h-168 mb-9.5"
      />
      <div className="w-11/12 lg:w-7/12 mx-auto lg:pl-[6%] lg:pt-1">
        <Text className="mb-8 text-3xl font-extrabold text-black font-mulish lg:text-4xl">Your order has been delivered!</Text>
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
        Your order has arrived!
        </Text>
        <Text className="font-medium text-black font-mulish text-md lg:text-xl">
        Share an image of you wearing the player apparel of your favorite athlete and have it post on the public product page of Athletic Estate.  
        </Text>
        <img src={athleteImage} className="w-full scale-x-110 md:w-3/4 h-72" alt="camera image" />
        <Text className="mb-6 font-medium text-black lg:mb-8 font-mulish text-md lg:text-xl">
        Share images are a subject to approval by Athletic Estate.  By uploading your image, you agree to Terms of Service & Privacy Policy.  
        </Text>
        <Text className="font-medium text-black font-mulish text-md lg:text-xl">A confirmation email will be sent if your image was approved.</Text>
      </div>
    </div>
  );
};

export default DeliveredStatus;
