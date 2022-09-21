import OrderStatus from "../../components/TrackingPage/OrderStatus";
import PreparingStatus from "../../components/TrackingPage/PreparingStatus";
import PackagedStatus from "../../components/TrackingPage/PackagedStatus";
import ShippedStatus from "../../components/TrackingPage/ShippedStatus";
import { useState } from "react";
import { Button } from "@mui/material";
import DeliveryStatus from "../../components/TrackingPage/DeliveryStatus";
import DeliveredStatus from "../../components/TrackingPage/DeliveredStatus";
import OrderDetails from "../../components/TrackingPage/OrderDetails";

const TrackingPage = () => {
  const [statusStep, setStatusStep] = useState(1);
  
  const changeStatusStep = () => {
    if (statusStep < 6) {
      setStatusStep(statusStep + 1);
    } else {
      setStatusStep(1);
    }
  }

  return (
    <div>
      <OrderStatus statusStep={statusStep} setStatusStep={setStatusStep} />
      {statusStep == 1 && <OrderDetails />}
      {statusStep == 2 && <PreparingStatus />}
      {statusStep == 3 && <PackagedStatus />}
      {statusStep == 4 && <ShippedStatus />}
      {statusStep == 5 && <DeliveryStatus />}
      {statusStep == 6 && <DeliveredStatus />}
      <div className="sticky bottom-0 text-right">
        <Button
          variant="contained"
          color="primary"
          className="!h-10 !text-base !font-light !mt-7 !font-mulish"
          onClick={changeStatusStep}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TrackingPage;
