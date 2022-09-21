import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Divider from "@mui/material/Divider";
import Text from "../../shared/Text";
import { CheckoutAccordionData } from "../../../helpers/UserCheckout/CheckoutAccordion";
import { useState } from "react";

interface Props {
  setCurrentStatus: (val: number) => void;
  currentStatus: number;
}

const CheckoutDetails = ({ setCurrentStatus, currentStatus }: Props) => {
  const accordionStatus = {
    0: "shippingAddress",
    1: "deliveryMethod",
    2: "paymentMethod",
    3: "cnfOrder",
  };
  const [expanded, setExpanded] = useState(["shippingAddress"]);
  const handleAccordionStatus = (event, currentStatus) => {
    setExpanded([...expanded, accordionStatus[currentStatus]]);
  };
  return (
    <div className="px-5 lg:px-20 mt-[3.75rem] mb-44">
      <Divider className="!text-whiteSmoke" />
      {CheckoutAccordionData.map(({ id, title, Component }) => (
        <div key={id}>
          <Accordion
            elevation={0}
            expanded={expanded.includes(id) && true}
            onChange={(event) => handleAccordionStatus(event, currentStatus)}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              classes={{ expanded: "!text-nero !font-mulish" }}
            >
              <Text className="text-1.5xl lg:text-4xl font-extrabold text-darkGray lg:py-4 py-1">
                {title}
              </Text>
            </AccordionSummary>
            <AccordionDetails>
              <Component setCurrentStatus={setCurrentStatus} />
            </AccordionDetails>
          </Accordion>
          <Divider className="!text-whiteSmoke" />
        </div>
      ))}
    </div>
  );
};

export default CheckoutDetails;
