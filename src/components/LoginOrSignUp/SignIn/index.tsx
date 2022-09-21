import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import RedditTextField from "../../shared/redditInput";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  signInInitialValues,
  signInfields,
  SignInDataValidationSchema,
} from "../../../helpers/LoginSignUp";
import { loginFn } from "../../../services/LoginOrSignUp";
import { CLIENT_ID } from "../../../config/Constants";
import Text from "../../shared/Text";

interface Props {
  handleClose: () => void;
  value?: boolean;
}

export const SignIn = ({ value, handleClose }: Props) => {
  const navigate = useNavigate();

  const client = useQueryClient();

  const { mutate, isLoading } = useMutation(loginFn, {
    onSuccess: (response) => {
      // localStorage.setItem("token", response.token);
      localStorage.setItem("token", "token12345");
      handleClose();
      {
        value ? navigate("/athlete-dashboard") : navigate("/product-list");
      }

      client.refetchQueries("currentUser");
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

    onSubmit: async ({ email, password }) => {
      const data = {
        email: email,
        password: password,
        client_id: CLIENT_ID,
      };

      mutate(data);
    },
  });

  return (
    <>
      <div className="flex flex-col w-11/12 mx-auto md:w-3/4">
        <Text className="mt-8 mb-6 text-xl font-extrabold text-center lg:text-3xl">
          Sign into your account
        </Text>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {signInfields.map(({ id, name, label }) => (
            <Fragment key={id}>
              <RedditTextField
                label={label}
                id={id}
                key={id}
                name={name}
                size="small"
                className=""
                variant="filled"
                onBlur={handleBlur}
                value={values[id]}
                onChange={handleChange}
                error={errors[id] && touched[id] ? true : false}
                type={id === "password" ? "password" : "text"}
              />
              <span className="m-1 text-xs text-crimson">
                {touched[id] && errors[id]}
              </span>
            </Fragment>
          ))}
          <span className="mt-2 !text-xs text-nero">
            Remember me
            <Checkbox
              color="secondary"
              name="rememberMe"
              onBlur={handleBlur}
              value={values?.rememberMe}
              onChange={handleChange}
            />
          </span>
          <Button
            variant="contained"
            className="w-48 h-12 !text-base !capitalize !mx-auto !p-1 !mt-3"
            disabled={
              !isValid || values?.password === "" || values?.email === ""
                ? true
                : false
            }
            type="submit"
            size="small"
          >
            {isLoading ? (
              <CircularProgress className="!text-white" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>

        <span
          className="mx-auto my-5 mb-16 cursor-pointer lg:mb-7 text-matterhorn-2"
          // onClick={() => navigate("/account")}
        >
          Forgot your password?
        </span>
      </div>
    </>
  );
};
