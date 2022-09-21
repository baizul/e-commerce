import Button from "@mui/material/Button";
import { Fragment } from "react";
import { useMutation } from "react-query";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import RedditTextField from "../../shared/redditInput";
import { registerFn } from "../../../services/LoginOrSignUp";
import { CLIENT_ID } from "../../../config/Constants";
import Text from "../../shared/Text";

import {
  SignUpDataValidationSchema,
  signUpfields,
  signUpInitialValues,
} from "../../../helpers/LoginSignUp";
type Props = {
  success: boolean;
  setSuccess: (success: boolean) => void;
  setEmail: (email: string) => void;
  setFirstName: (firstname: string) => void;
  setLastName: (lastname: string) => void;
  setPassword: (password: string) => void;
  handleClose: (value: boolean) => void;
};

export const SignUp = (props: Props) => {
  const { mutate, isLoading } = useMutation(registerFn, {
    onSuccess: () => {
      props.setSuccess(true);
    },
  });
  const formik = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: SignUpDataValidationSchema,
    onSubmit: async ({ firstName, lastName, email, password }) => {
      const data = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        is_email_verification: true,
        client_id: CLIENT_ID,
        source: "web",
      };
      props.setEmail(email);
      props.setFirstName(firstName);
      props.setLastName(lastName);
      props.setPassword(password);

      mutate(data);
    },
  });
  return (
    <div className="flex flex-col w-11/12 mx-auto lg:w-4/6">
      <Text className="my-6 text-2xl font-extrabold text-center lg:text-3xl lg:pl-5 lg:text-left">
        Sign Up
      </Text>
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        {signUpfields.map(({ id, name, label }) => (
          <Fragment key={id}>
            {
              <>
                <RedditTextField
                  label={label}
                  key={id}
                  id={id}
                  name={name}
                  className=""
                  size="small"
                  variant="filled"
                  onBlur={formik.handleBlur}
                  value={formik.values[id]}
                  onChange={formik.handleChange}
                  error={formik.errors[id] && formik.touched[id] ? true : false}
                  type={id === "password" ? "password" : "text"}
                />
                <span className="m-1 text-xs text-crimson">
                  {formik.touched[id] && formik.errors[id]}
                </span>
              </>
            }
          </Fragment>
        ))}
        <Button
          variant="contained"
          className="h-10 w-48 !text-base !mx-auto !p-2 lg:!p-3 !mt-2"
          disabled={
            !formik.isValid ||
            formik?.values?.password === "" ||
            formik?.values?.email === "" ||
            formik?.values?.firstName === "" ||
            formik?.values?.lastName === ""
              ? true
              : false
          }
          type="submit"
          size="small"
        >
          {isLoading ? (
            <CircularProgress className="!text-white" />
          ) : (
            "Create Account"
          )}
        </Button>
        <Button
          disableElevation={true}
          variant="contained"
          className="h-10 w-48 !text-base !mx-auto !p-2 lg:!p-3 !mt-2 !bg-black"
          size="small"
          onClick={() => props.handleClose(false)}
        >
          Continue as a Guest
        </Button>
      </form>
      <span className="my-5 text-xxs text-matterhorn-2 ">
        By selecting “Create Account” you agree to the Terms of Service, Privacy
        Policy and confirm that you are at least 16 years of age.
      </span>
    </div>
  );
};
