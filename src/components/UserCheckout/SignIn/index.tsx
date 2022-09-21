import Button from "@mui/material/Button";
import RedditTextField from "../../shared/redditInput";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import { loginFn } from "../../../services/LoginOrSignUp";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import { useMutation } from "react-query";
import { CLIENT_ID } from "../../../config/Constants";
import {
  SignInDataValidationSchema,
  signInfields,
  signInInitialValues,
} from "../../../helpers/LoginSignUp";
import Text from "../../shared/Text";
import { useNavigate } from "react-router-dom";
import SignInSignUp from "../../LoginOrSignUp";

interface Props {
  submitted: any;
  setSubmitted: (val: any) => void;
}

const CheckoutSignIn = ({ submitted, setSubmitted }: Props) => {
  const { mutate, isLoading } = useMutation(loginFn, {
    onSuccess: (response: any) => {
      localStorage.setItem("token", response?.token);
      setSubmitted({ ...submitted, user: true });
    },
  });

  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    touched,
  } = useFormik({
    initialValues: signInInitialValues,
    validationSchema: SignInDataValidationSchema,
    onSubmit: ({ email, password }) => {
      const data = { email: email, password: password, client_id: CLIENT_ID };
      mutate(data);
    },
  });
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 mt-14 lg:grid-cols-2">
      <div className="flex flex-col items-center justify-center border-0 lg:border-r border-whiteSmoke">
        <Text className="mb-8 text-xl font-extrabold lg:text-4xl whitespace-nowrap">
          Sign into your account
        </Text>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full px-10 lg:px-28 text-eclipse-1"
        >
          {signInfields.map(({ id, name, label }) => (
            <>
              <RedditTextField
                label={label}
                id={id}
                key={id}
                name={name}
                size="small"
                variant="filled"
                onBlur={handleBlur}
                value={id === "email" ? values.email : values.password}
                onChange={handleChange}
                error={
                  id === "email"
                    ? errors.email && touched.email
                      ? true
                      : false
                    : errors.password && touched.password
                    ? true
                    : false
                }
                type={id === "password" ? "password" : "text"}
              />
              <span className="m-1 text-xs text-crimson">
                {id === "email"
                  ? touched.email && errors.email
                  : touched.password && errors.password}
              </span>
            </>
          ))}
          {localStorage.getItem("token") && (
            <Text className="text-base text-veryLightGrey">
              Remember me
              <Checkbox
                disabled={
                  !isValid || values?.password === "" || values?.email === ""
                    ? true
                    : false
                }
                name="rememberMe"
                onBlur={handleBlur}
                value={values?.rememberMe}
                onChange={handleChange}
                color="secondary"
              />
            </Text>
          )}
          <Button
            variant="contained"
            className="w-48 h-12 p-2 !text-base font-semibold font-mulish"
            disabled={
              !isValid || values?.password === "" || values?.email === ""
                ? true
                : false
            }
            type="submit"
            size="small"
            sx={{
              margin: "auto",
              padding: "10px",
              marginTop: "30px",
            }}
          >
            {isLoading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              "Sign in"
            )}
          </Button>
          <Text className="mt-6 text-center cursor-pointer">
            Forgot password?
          </Text>
        </form>
        <div className="md:hidden">
          <Divider sx={{ m: 3 }} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Text className="mb-8 text-xl font-extrabold lg:text-4xl whitespace-nowrap">
          Don't have an account?
        </Text>
        <div className="flex px-4 space-x-3 font-semibold lg:px-0">
          <SignInSignUp hasLoginButton={true} />
          <Button
            variant="contained"
            className="!normal-case !w-44 !h-10 !py-4 !px-2 !font-mulish !text-sm !text-white !bg-black !whitespace-nowrap"
            size="small"
            onClick={() => setSubmitted({ ...submitted, guest: true })}
          >
            Continue as a Guest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSignIn;
