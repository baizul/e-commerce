import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SignIn from "../../components/UserCheckout/SignIn";
import CheckoutDetails from "../../components/UserCheckout/CheckoutDetails";
import Text from "../../components/shared/Text";
import Stepper from "../../components/shared/Stepper";
import SignInSignUp from "../../components/LoginOrSignUp";
import { useSelector } from "react-redux";
import { IReducer } from "../../redux/Reducers";

const UserCheckout = () => {
  const [currentStatus, setCurrentStatus] = useState(0);
  const [submitted, setSubmitted] = useState({ guest: false, user: false });
  const { user_name } = useSelector((state: IReducer) => state.user_data);
  return (
    <div>
      <div className="mx-auto w-9/10">
        <Link to="/product-list" className="flex mt-[1.5rem] mb-[0.5rem]">
          <KeyboardBackspaceIcon
            sx={{ color: "#575757", width: { sm: "1.25rem", lg: "2rem" } }}
            className="mr-[0.5rem]"
          />
          <Text className="mt-1 text-xs font-semibold text-matterhorn-2 font-mulish lg:text-base lg:-mt-[0.05rem]">
            Continue Shopping
          </Text>
        </Link>
        <div className="flex flex-col items-start justify-between lg:flex-row">
          <Text className="text-3xl md:text-3.5xl lg:text-4.5xl font-extrabold font-mulish text-nero mb-[1.5rem] lg:block w-2/3">
            Checkout
          </Text>
          {(localStorage.getItem("token") || submitted.guest) && (
            <Stepper
              steps={["Address", "Shipping", "Payment"]}
              currentStep={currentStatus}
              show={true}
              classToOverride="lg:w-1/2 w-3/4 hidden lg:flex"
            />
          )}
        </div>
        {!localStorage.getItem("token") ? (
          submitted.guest || submitted.user ? (
            <>
              {submitted.user ? (
                <Text className="text-lg font-medium">
                  Welcome Back,&nbsp;
                  <span className="font-extrabold text-black">{user_name}</span>
                </Text>
              ) : (
                <div className="flex text-lg font-medium">
                  Already have an account?&nbsp;
                  <SignInSignUp hasLoginButton={true} hasTextButton={true} />
                </div>
              )}
            </>
          ) : (
            <SignIn submitted={submitted} setSubmitted={setSubmitted} />
          )
        ) : (
          <Text className="text-lg font-medium">
            Welcome Back,&nbsp;
            <span className="font-extrabold text-black">{user_name}</span>
          </Text>
        )}
        {submitted.user ||
          (submitted.guest && (
            <Stepper
              steps={["Address", "Shipping", "Payment"]}
              currentStep={currentStatus}
              show={true}
              classToOverride="block lg:hidden w-full mt-10"
            />
          ))}
      </div>
      <CheckoutDetails
        setCurrentStatus={setCurrentStatus}
        currentStatus={currentStatus}
      />
    </div>
  );
};

export default UserCheckout;
