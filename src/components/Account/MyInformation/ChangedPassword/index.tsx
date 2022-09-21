import {
  changePasswordInitialValues,
  changePasswordFormfields,
  changedPasswordValidationSchema,
  passwordData,
} from "../../../../helpers/Account";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import RedditTextField from "../../../shared/redditInput";
import Divider from "@mui/material/Divider";
import { resetPasswordFn } from "../../../../services/resetPassword";
import { useSelector, shallowEqual } from "react-redux";
import { useMutation } from "react-query";
import CircularProgress from "@mui/material/CircularProgress";
import { IReducer } from "../../../../redux/Reducers";
import { Tooltip, useMediaQuery } from "@mui/material";
import { BsDot } from "react-icons/bs";
import Text from "../../../shared/Text";

interface Props {
  changePasswordScreen: boolean;
  setChangePasswordScreen: (changePasswordScreen: boolean) => void;
}

const ChangedPassword = ({
  changePasswordScreen,
  setChangePasswordScreen,
}: Props) => {
  const isPhone = useMediaQuery("(max-width: 500px)");
  const userData = useSelector(
    (state: IReducer) => state.user_data,
    shallowEqual
  );

  const { mutate, isLoading } = useMutation(resetPasswordFn, {
    onSuccess: (response: any) => {
      setChangePasswordScreen(false);
    },
  });

  const formik = useFormik({
    initialValues: changePasswordInitialValues,
    validationSchema: changedPasswordValidationSchema,
    onSubmit: async ({ cpassword, cnpassword }) => {
      const data = {
        existing_password: cpassword,
        password: cnpassword,
        user_client_id: userData.id,
      };
      mutate(data);
    },
  });
  return (
    <div className="flex flex-row justify-center mb-12 lg:justify-items-start lg:mb-32">
      <div className="flex flex-col w-4/5 lg:w-1/3 mt-12 lg:!mt-24">
        <Text className="my-5 text-3xl font-extrabold lg:my-8 lg:text-5xl">
          Change Password
        </Text>
        <form onSubmit={formik.handleSubmit}>
          {changePasswordFormfields.map(({ id, name, label }) => (
            <Tooltip
              placement={isPhone ? "bottom" : "right-start"}
              open={
                id === "npassword" &&
                formik.touched.npassword &&
                formik.errors.npassword &&
                !isPhone
                  ? true
                  : id === "cnpassword" && isPhone
                  ? true
                  : false
              }
              title={
                <div className="p-3 rounded lg:w-96 border-quickSilver">
                  <Text className="text-xl font-bold text-black">
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
                  "!bg-white !border-2 !ml-2 !max-w-full lg:!w-96 !w-full !border-darkGray",
                arrow:
                  "!text-white before:!border-2 before:!border-darkGray text-2xl top-0 relative",
              }}
              PopperProps={{
                disablePortal: true,
              }}
              disableFocusListener
              disableHoverListener
              disableTouchListener
            >
              <div className={id === "npassword" ? "!mt-8" : "!mt-5 "} key={id}>
                <RedditTextField
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
                  error={formik.errors[id] && formik.touched[id] ? true : false}
                  type="password"
                />
                <span className="m-1 text-xxs text-crimson">
                  {formik.touched[id] && formik.errors[id]}
                </span>

                {id === "cpassword" && <Divider className="!h-2 !my-6" />}
              </div>
            </Tooltip>
          ))}
          <div className="flex items-center mt-40 lg:mt-12">
            <Button
              variant="text"
              onClick={() => setChangePasswordScreen(false)}
              classes={{
                root: "lg:!p-3 !w-2/5 !mt-8 !h-12  lg:!w-1/4 !text-base lg:!ml-12 !capitalize !text-matterhorn-2",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={!formik.isValid}
              type="submit"
              classes={{
                root: " lg:!p-3  !w-3/5 !mt-8 lg:!w-44 !h-9 !h-10  !text-base lg:!ml-12 !capitalize",
              }}
            >
              {isLoading ? (
                <CircularProgress className="!text-white" />
              ) : (
                "Update Password"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangedPassword;
