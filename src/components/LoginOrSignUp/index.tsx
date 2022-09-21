import * as React from "react";
import classNames from "classnames";
import { Success } from "./Success";
import { Resources } from "../../config/Resources";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import CustomModal from "../shared/CustomModal";
import { Button } from "@mui/material";
interface Props {
  hasLoginButton?: boolean;
  hasTextButton?: boolean;
}
const SignInSignUp = ({ hasLoginButton = false, hasTextButton }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleOpen = (isSignin: boolean) => {
    setOpen(true);
    setSignIn(isSignin);
    setSuccess(false);
  };

  const handleClose = (value) => setOpen(value);

  const [signIn, setSignIn] = React.useState(true);

  return (
    <div>
      {hasLoginButton && (
        <>
          {hasTextButton ? (
            <span
              onClick={() => handleOpen(true)}
              className="font-extrabold text-black cursor-pointer"
            >
              Log in
            </span>
          ) : (
            <Button
              variant="contained"
              size="small"
              onClick={() => handleOpen(false)}
              className="!normal-case !w-44 !h-10 !py-4 !px-2 !font-mulish !text-sm !whitespace-nowrap"
            >
              Create an account
            </Button>
          )}
        </>
      )}
      {!hasLoginButton && (
        <div className="flex items-center">
          <div onClick={() => handleOpen(false)} className="cursor-pointer">
            Register
          </div>
          <span className="px-4 lg:px-1">|</span>
          <div onClick={() => handleOpen(true)} className="cursor-pointer">
            Login
          </div>
        </div>
      )}
      <CustomModal open={open} onClose={handleClose}>
        {success ? (
          <Success
            email={email}
            firstname={firstname}
            lastname={lastname}
            password={password}
          />
        ) : (
          <>
            <div className="!font-mulish">
              <div className="flex flex-row items-center h-12 font-bold lg:h-20 font-mulish">
                <div
                  className={classNames(
                    "w-1/2 text-center text-sm lg:text-2xl h-full pt-4 lg:pt-6 cursor-pointer rounded-tl ",
                    signIn ? "text-crimson" : "text-darkGray bg-whiteSmoke "
                  )}
                  onClick={() => setSignIn(true)}
                >
                  Sign In
                </div>
                <div
                  className={classNames(
                    "w-1/2 text-center text-sm lg:text-2xl h-full pt-4 lg:pt-6 cursor-pointer rounded-tr",
                    !signIn ? "text-crimson" : "text-darkGray bg-whiteSmoke "
                  )}
                  onClick={() => setSignIn(false)}
                >
                  Sign Up
                </div>
              </div>
            </div>
            <div className="!font-mulish">
              {signIn ? (
                <SignIn handleClose={() => handleClose(false)} />
              ) : (
                <SignUp
                  success={success}
                  setSuccess={setSuccess}
                  setEmail={setEmail}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setPassword={setPassword}
                  handleClose={handleClose}
                />
              )}
            </div>
          </>
        )}
      </CustomModal>
    </div>
  );
};

export default SignInSignUp;
