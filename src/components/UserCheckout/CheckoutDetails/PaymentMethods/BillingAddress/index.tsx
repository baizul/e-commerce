import { Checkbox, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import {
  AddressFormValidationSchema,
  addressInitialValues,
} from "../../../../../helpers/Account/ShippingAddresses";
import Form from "../../../../Account/ShippingAddresses/AddressForm/Form";
import Text from "../../../../shared/Text";

const BillingAddress = () => {
  const [isSame, setisSame] = useState(true);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: addressInitialValues(),
    validationSchema: AddressFormValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="pt-12 !font-mulish">
      <Text className="text-base font-semibold lg:text-lg lg:font-extrabold">
        Billing Address
      </Text>
      <div className="!text-sm">
        <FormControlLabel
          control={
            <Checkbox
              checked={isSame}
              onChange={() => setisSame(!isSame)}
              size="small"
            />
          }
          classes={{
            label: "!font-mulish !whitespace-nowrap !text-xs !font-semibold",
          }}
          label="Billing address is the same as shipping address"
        />
      </div>
      {!isSame && (
        <div className="w-3/5">
          <Form formik={formik} />{" "}
        </div>
      )}
    </div>
  );
};

export default BillingAddress;
