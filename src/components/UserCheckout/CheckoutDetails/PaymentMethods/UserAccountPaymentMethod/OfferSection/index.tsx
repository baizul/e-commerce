import { Button, Divider, InputAdornment } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import { Resources } from "../../../../../../config/Resources";
import RedditTextField from "../../../../../shared/redditInput";
import Text from "../../../../../shared/Text";

const OfferSection = () => {
  const [promoCode, setpromoCode] = useState("");
  return (
    <div className="flex flex-col w-full pr-4 space-x-0 md:space-x-18 md:flex-row lg:w-7/12">
      <div className="flex flex-col w-full space-y-5 sm:w-1/2 md:w-4/12">
        <Text className="text-lg font-extrabold">Pay with PayPal</Text>
        <Button variant="outlined" size="large">
          <img src={Resources.images.Account.payPal} />
        </Button>
      </div>
      <Divider orientation="vertical" className="!m-8" />
      <div className="flex flex-col w-full mt-8 space-y-5 md:mt-0 md:w-8/12">
        <Text className="text-lg font-extrabold">Have a promo code?</Text>
        <div className="flex flex-col w-full space-x-0 xxsm:space-x-3 xxsm:flex-row">
          <div className="w-full !mb-8 xxsm:!mb-0 xxsm::w-2/4">
            <RedditTextField
              placeholder="Giftcard or Promo code"
              variant="filled"
              value={promoCode}
              onChange={(e) => setpromoCode(e.target.value)}
              InputProps={{
                endAdornment: promoCode === "save30" && (
                  <Text className="text-crimson text-md">Applied</Text>
                ),
                classes: {
                  input: classNames("!pt-0 !text-md"),
                },
              }}
              className="!w-full "
            />
          </div>
          {promoCode === "save30" ? (
            <Button
              variant="contained"
              onClick={() => setpromoCode("")}
              className="!w-1/2"
              color="secondary"
            >
              Remove
            </Button>
          ) : (
            <Button
              disabled={!promoCode}
              variant="contained"
              color="secondary"
              className="!w-1/2"
            >
              Apply
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OfferSection;
