import { trackingPageData } from "../../../helpers/TrackingPage";
import { Button } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import Stepper from "../../shared/Stepper";
import Text from "../../shared/Text";

type Props = {
  statusStep: number;
  setStatusStep: (statusStep: number) => void;
};

const OrderStatus = ({ statusStep, setStatusStep }: Props) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const groundImage = isDesktop
    ? trackingPageData.images.groundDesktop
    : trackingPageData.images.groundMobile;
  const steps = [
    "Ordered",
    "Preparing",
    "Packaged",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];

  const currentStep = statusStep;

  return (
    <div className="relative mt-7 h-[20rem] lg:h-[18.5rem] mx-auto w-[91%]">
      <img
        src={groundImage}
        alt="ground image"
        className="w-full h-80 lg:h-72"
      />
      <div className="flex justify-center">
        <div className="absolute top-[13.4%] lg:w-73/100 flex justify-center h-73/100 w-[92.5%] bg-black/70 rounded-[15px]">
          <div className="absolute top-[17.5%]">
            <div>
              <Text className="inline-block text-xl font-bold text-white font-mulish">
                Order&nbsp;
              </Text>
              <Text className="inline-block text-xl font-normal text-white font-mulish">
                <span> #BLI837465LQ</span>
              </Text>
            </div>
            <div>
              <Text className="inline-block text-[0.9375rem] font-bold text-white font-mulish">
                Order Date:&nbsp;
              </Text>
              <Text className="inline-block text-[0.9375rem] font-normal text-white font-mulish">
                March 22, 2022
              </Text>
            </div>
          </div>
          <div className="absolute top-[30%] pb-2 mx-auto bg-transparent shadow-xl h- rounded-2xl w-full">
            <div className="container mt-5 horizontal h-[8rem]">
              <Stepper steps={steps} currentStep={currentStep} show={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
