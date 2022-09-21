import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { DeliveryMethodData } from "../../../../helpers/UserCheckout/DeliveryMethod";
import Text from "../../../shared/Text";
import { useState } from "react";
import classNames from "classnames";

interface Props {
  setCurrentStatus: (val: number) => void;
}

const DeliveryMethod = ({ setCurrentStatus }: Props) => {
  const [deliveryDetails, setDeliveryDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit() {
    console.log(deliveryDetails);
    setSubmitted(true);
    setCurrentStatus(2);
  }

  if (submitted) {
    return (
      <div className="flex flex-row justify-between">
        <div className="text-xs font-medium text-darkGray md:text-2xl font-mulish ">
          {deliveryDetails}
        </div>
        <div>
          <Button
            variant="contained"
            className="w-24 md:w-32 !text-sm p-2 !bg-black lg:!h-10 !h-7"
            size="small"
            onClick={() => {
              setSubmitted(false);
              setCurrentStatus(1);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  } else
    return (
      <div className="mb-12 ">
        <Text className="mb-6 text-base font-extrabold whitespace-nowrap">
          Please select delivery options:
        </Text>
        <FormControl fullWidth>
          <RadioGroup defaultValue="standard" name="radio-buttons-group">
            {DeliveryMethodData.map(({ index, label, value, price }) => (
              <div
                key={index}
                onChange={() => setDeliveryDetails(value)}
                className={classNames(
                  "!text-xl border rounded-md flex items-center w-full lg:w-1/2 justify-between pl-1 pr-3 lg:pl-6 lg:pr-11 py-2 lg:py-4 mb-4 hover:!text-black hover:opacity-100 hover:border-matterhorn-2",
                  deliveryDetails === value
                    ? "!text-nero border-matterhorn-2"
                    : "!text-matterhorn-2 opacity-50 border-whiteSmoke"
                )}
              >
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={label}
                  classes={{
                    label: "!text-xs lg:!text-xl !font-mulish !font-medium",
                  }}
                  color="primary"
                />
                <Text className="mr-2 text-xs font-bold lg:text-xl !font-mulish">
                  {price}
                </Text>
              </div>
            ))}
          </RadioGroup>
        </FormControl>
        <div>
          <Button
            variant="contained"
            className="p-2 !text-base !font-mulish !h-10 !w-44"
            type="submit"
            size="small"
            onClick={handleSubmit}
          >
            Continue
          </Button>
        </div>
      </div>
    );
};

export default DeliveryMethod;
