import React, { useState } from "react";
import {
  ShippingFormFields,
  shippingInitialValues,
} from "../../../../helpers/UserCheckout/ShippingAddress";
import RedditTextField from "../../../shared/redditInput";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import CustomSelect from "../../../shared/CustomSelect";
import Text from "../../../shared/Text";
import { useQuery } from "react-query";
import axios from "../../../../utils/Axios/axiosInstance";
import { API_URLS } from "../../../../config/API_URLS";
import { useSelector } from "react-redux";
import { IReducer } from "../../../../redux/Reducers";

interface Props {
  setCurrentStatus: (val: number) => void;
}

const ShippingAddress = ({ setCurrentStatus }: Props) => {
  const [shippingDetails, setShippingDetails] = useState<any>([]);
  const [submitted, setSubmitted] = useState(false);
  const { id } = useSelector((state: IReducer) => state.user_data);

  const formik = useFormik({
    initialValues: shippingInitialValues,
    onSubmit: async (values) => {
      setShippingDetails(values);
      setSubmitted(true);
      setCurrentStatus(1);
    },
  });

  // useQuery(
  //   ["shippingAddress"],
  //   () => axios.get(`${API_URLS.getShippingAddress}?user_client_id=${id}`),
  //   {
  //     onSuccess: (data) => {
  //       console.log(data);
  //     },
  //   }
  // );

  if (submitted) {
    return (
      <>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col font-medium tracking-tighter md:tracking-tight text-normal text-darkGray md:text-2xl font-mulish ">
            <Text>{shippingDetails.name}</Text>
            <Text>{shippingDetails.address}</Text>
            <Text>{shippingDetails?.apartment}</Text>
            <Text>
              {shippingDetails.city},{shippingDetails.state},
              {shippingDetails.zip}
            </Text>
          </div>
          <div>
            <Button
              variant="contained"
              className="w-24 md:w-32  !text-sm p-2 !bg-black lg:!h-10 !h-7"
              size="small"
              onClick={() => {
                setSubmitted(false);
                setCurrentStatus(0);
              }}
              sx={{
                textTransform: "none",
                margin: "auto",

                marginTop: "30px",
              }}
            >
              Edit
            </Button>
          </div>
        </div>
      </>
    );
  } else
    return (
      <div className="flex flex-col w-11/12 mb-12">
        <form
          onSubmit={formik.handleSubmit}
          className="grid w-full grid-cols-1 py-4 lg:w-3/4 lg:grid-cols-2 gap-y-2 gap-x-8"
        >
          <RedditTextField
            label="Name"
            id="name"
            name="name"
            size="small"
            classes={{
              root: "!w-full",
            }}
            variant="filled"
            helperText={
              formik.errors.name && formik.touched.name
                ? formik.errors.name
                : ""
            }
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors.name && formik.touched.name}
            onChange={formik.handleChange}
          />
          <RedditTextField
            label="Email Address"
            id="email"
            name="email"
            size="small"
            classes={{
              root: "!w-full",
            }}
            variant="filled"
            helperText={
              formik.errors.email && formik.touched.email
                ? formik.errors.email
                : ""
            }
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.errors.email && formik.touched.email}
            onChange={formik.handleChange}
          />
          <RedditTextField
            label="Address"
            id="address"
            name="address"
            size="small"
            classes={{
              root: "!w-full",
            }}
            variant="filled"
            helperText={
              formik.errors.address && formik.touched.address
                ? formik.errors.address
                : ""
            }
            onBlur={formik.handleBlur}
            value={formik.values.address}
            error={formik.errors.address && formik.touched.address}
            onChange={formik.handleChange}
          />
          <RedditTextField
            label="Aparment/Suite/Floor (optional)"
            id="apartment"
            name="apartment"
            size="small"
            classes={{
              root: "!w-full",
            }}
            variant="filled"
            helperText={
              formik.errors.apartment && formik.touched.apartment
                ? formik.errors.apartment
                : ""
            }
            onBlur={formik.handleBlur}
            value={formik.values.apartment}
            error={formik.errors.apartment && formik.touched.apartment}
            onChange={formik.handleChange}
          />
          <CustomSelect
            sx={{
              border: "1px solid grey",
              maxWidth: "100%",
              color: "black",
            }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="city"
            value={formik.values.city}
            id="city"
            label="City"
            size={"small"}
            menuItem={[
              { id: "1", value: "New York" },
              { id: "2", value: "Austin" },
              { id: "3", value: "Phoenix" },
            ]}
          />
          <div className="flex space-x-2">
            <CustomSelect
              sx={{
                border: "1px solid grey",
                maxWidth: "100%",
                color: "black",
              }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="state"
              value={formik.values.state}
              id="state"
              label="State"
              size={"small"}
              menuItem={[
                { id: "1", value: "New York" },
                { id: "2", value: "Austin" },
                { id: "3", value: "Phoenix" },
              ]}
            />
            <RedditTextField
              label="Zip"
              id="zip"
              name="zip"
              size="small"
              classes={{
                root: "!w-full",
              }}
              variant="filled"
              helperText={
                formik.errors.zip && formik.touched.zip ? formik.errors.zip : ""
              }
              onBlur={formik.handleBlur}
              value={formik.values.zip}
              error={formik.errors.zip && formik.touched.zip}
              onChange={formik.handleChange}
            />
          </div>
          <Button
            variant="contained"
            className="p-2 w-44 !text-base !normal-case !mt-4 !font-mulish"
            disabled={
              !formik.isValid ||
              formik?.values?.name === "" ||
              formik?.values?.email === "" ||
              formik?.values?.address === "" ||
              formik?.values?.city === "" ||
              formik?.values?.state === "" ||
              formik?.values?.zip === ""
                ? true
                : false
            }
            type="submit"
            size="small"
            onClick={() => {}}
          >
            Continue
          </Button>
        </form>
      </div>
    );
};

export default ShippingAddress;
