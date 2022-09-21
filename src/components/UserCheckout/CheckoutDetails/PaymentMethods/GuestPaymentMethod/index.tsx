import { Button, TextField } from "@mui/material";
import { Resources } from "../../../../../config/Resources";
import RedditTextField from "../../../../shared/redditInput";
import Text from "../../../../shared/Text";
import InputMask from "react-input-mask";

interface Props {
  setPaymentDetails: (val: any) => void;
  PaymentDetails: any;
}

const GuestPaymentMethod = ({ setPaymentDetails, PaymentDetails }: Props) => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 !font-mulish">
      <div className="flex flex-col w-full mb-10 space-y-5">
        <Text className="text-base font-semibold lg:text-lg lg:font-extrabold">
          Pay with a credit card
        </Text>
        <div className="flex w-full px-2 py-1 border rounded-md border-matterhorn-2/50">
          <div className="flex justify-between w-full">
            <div className="flex w-3/4">
              <img src={Resources.images.Account.CreditCardIcon} alt="Credit" />
              <InputMask
                mask="9999 9999 9999 9999"
                maskChar=""
                onChange={(event) =>
                  setPaymentDetails({
                    ...PaymentDetails,
                    cardNumber: event.target.value,
                  })
                }
              >
                {() => {
                  return (
                    <TextField
                      variant="standard"
                      placeholder="Card number"
                      className="!px-2 !outline-none !w-full"
                      InputProps={{ disableUnderline: true }}
                    />
                  );
                }}
              </InputMask>
            </div>
            <div className="flex w-1/2">
              <InputMask
                mask="99/99"
                maskChar=""
                placeholder="MM/YY"
                onChange={(event) =>
                  setPaymentDetails({
                    ...PaymentDetails,
                    validity: event.target.value,
                  })
                }
              >
                {() => {
                  return (
                    <TextField
                      variant="standard"
                      placeholder="MM/YY"
                      className="!outline-none !w-1/2"
                      InputProps={{ disableUnderline: true }}
                    />
                  );
                }}
              </InputMask>
              <TextField
                variant="standard"
                placeholder="CVC"
                className="!outline-none !w-1/2"
                InputProps={{ disableUnderline: true }}
                inputProps={{ maxLength: 3 }}
                type="password"
                onChange={(event) =>
                  setPaymentDetails({
                    ...PaymentDetails,
                    cvc: event.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-0 mb-10 space-y-5 lg:mx-auto">
        <Text className="text-base font-semibold lg:text-lg lg:font-extrabold">
          Pay with PayPal
        </Text>
        <Button
          variant="outlined"
          size="large"
          className="!w-52 !border-nero !h-10"
        >
          <img src={Resources.images.Account.payPal} />
        </Button>
      </div>
      <div className="flex flex-col space-y-5">
        <Text className="!font-mulish font-semibold text-base lg:font-extrabold lg:text-lg">
          Have a Promo Code?
        </Text>
        <div className="flex justify-between space-x-5">
          <RedditTextField
            label="Giftcard or Promo code"
            variant="filled"
            className="!w-full !font-mulish !border-black"
            sx={{ fontFamily: "mulish" }}
          />
          <Button
            disabled={true}
            variant="contained"
            className="!w-5/6 !capitalize"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GuestPaymentMethod;
