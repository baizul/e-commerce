import { Formik, useFormik } from "formik";
import Stepper from "../../shared/Stepper";
import {
  createPasswordInitialValues,
  createPasswordValidationSchema,
  createPasswordFormFields,
  passwordData,
} from "../../../helpers/Account";

import { Tooltip, useMediaQuery } from "@mui/material";
import { BsDot } from "react-icons/bs";
import Text from "../../shared/Text";
import RedditTextField from "../../shared/redditInput";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TopSection from "../TopSection";

interface Props {
  setactiveTabIndex: (activeTabIndex: string) => void;
}

const AccountSetup = ({ setactiveTabIndex }: Props) => {
  const steps = ["Create Password", "Banking", "Image and Bio", "Revenue"];
  const isPhone = useMediaQuery("(max-width: 500px)");
  // const isPhone = useMediaQuery("(max-width: 500px)");
  const [first, setfirst] = useState(false);
  const formik = useFormik({
    initialValues: createPasswordInitialValues,
    validationSchema: createPasswordValidationSchema,
    onSubmit: (values) => {
      setactiveTabIndex("passwordCreated");
    },
  });
  useEffect(() => {
    if (formik.values.cnpassword && formik.values.epassword) {
      setfirst(false);
    }
  }, [formik.values]);

  return (
    <>
      <TopSection currentStep={0} />

      <div className="flex flex-col h-[65vh] p-4 mx-auto text-center bg-white rounded-bl-lg rounded-br-lg w-9/10 lg:w-4/5">
        <Tooltip
          placement={"bottom"}
          open={first}
          title={
            <div className="rounded w-65 lg:w-70 border-quickSilver">
              <Text className="text-xl font-bold text-left text-black">
                Passwords must:
              </Text>
              {passwordData.map((item) => {
                return (
                  <div className="flex mt-1">
                    <BsDot className="text-black" />
                    <span className="text-xs text-nero" key={item.id}>
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>
          }
          arrow
          classes={{
            tooltip:
              "!bg-white !border-2 !max-w-full lg:top-8 !w-full !border-darkGray",
            arrow:
              "!text-white before:!border-2 before:!border-darkGray text-3xl top-0 relative",
          }}
          PopperProps={{
            disablePortal: true,
            modifiers: [
              {
                name: "flip",
                enabled: false,
                options: {
                  altBoundary: false,
                  rootBoundary: "document",
                  padding: 8,
                },
              },
              {
                name: "preventOverflow",
                enabled: false,
                options: {
                  altAxis: true,
                  altBoundary: true,
                  tether: true,
                  rootBoundary: "viewport",
                  padding: 8,
                },
              },
              {
                name: "arrow",
                enabled: false,
              },
            ],
          }}
          disableFocusListener
          disableHoverListener
          disableTouchListener
        >
          <div className="lg:w-3/4 lg:mx-auto ">
            <Text className="my-2 text-3xl font-extrabold text-center w-max lg:text-4xl">
              Create Password
            </Text>

            <form onSubmit={formik.handleSubmit}>
              {createPasswordFormFields.map(({ id, name, label }) => (
                <div
                  className={id === "epassword" ? "!mt-1" : "!mt-2 "}
                  key={id}
                >
                  <RedditTextField
                    onFocus={() => {
                      setfirst(true);
                    }}
                    fullWidth
                    label={label}
                    key={id}
                    id={id}
                    name={name}
                    size="small"
                    className={
                      !formik.errors[id] &&
                      formik.touched[id] &&
                      "!border-chateauGreen"
                    }
                    variant="filled"
                    onBlur={formik.handleBlur}
                    value={formik.values[id]}
                    onChange={formik.handleChange}
                    error={
                      formik.errors[id] && formik.touched[id] ? true : false
                    }
                    type="password"
                  />
                  <span className="m-1 text-xxs text-crimson">
                    {formik.touched[id] && formik.errors[id]}
                  </span>
                </div>
              ))}

              <div className="flex items-baseline mt-0 lg:w-full ">
                <Button
                  variant="text"
                  classes={{
                    root: "lg:!p-3 !w-1/2 !mt-6 !h-12 !text-xs lg:!text-base  lg:!w-1/2  !capitalize !text-matterhorn-2",
                  }}
                >
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  disabled={!formik.isValid}
                  type="submit"
                  classes={{
                    root: "lg:!p-3 !w-1/2  lg:!w-1/2 !mt-6  !h-9 lg:!h-12 lg:!px-1  !text-xs lg:!text-base  !capitalize",
                  }}
                >
                  Create Password
                </Button>
              </div>
            </form>
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default AccountSetup;
