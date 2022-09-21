import Button from "@mui/material/Button";
import { Resources } from "../../../config/Resources";
import { registerFn } from "../../../services/LoginOrSignUp";
import { CLIENT_ID } from "../../../config/Constants";
import CircularProgress from "@mui/material/CircularProgress";
import { useMutation } from "react-query";
import Text from "../../shared/Text";

interface Props {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
}

export const Success = ({ firstname, lastname, email, password }: Props) => {
  const { mutate, isLoading } = useMutation(registerFn);

  const handleResend = async () => {
    const data = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
      is_email_verification: true,
      client_id: CLIENT_ID,
      source: "web",
    };
    mutate(data);
  };

  return (
    <div className="top-1/2">
      <div className="flex flex-col p-5 mx-auto m-16 font-[mulish]">
        <img
          width="60px"
          height="30px"
          className="mx-auto"
          src={Resources.images.SignInSignUp.MailLogo}
        />

        <Text className="my-4 text-2xl font-bold text-center">
          Please Verify Your Email
        </Text>

        <span className="text-center text-matterhorn-2 lg:mx-8">
          Almost done! We’ve sent an email to{" "}
          <span className="font-semibold">{email}</span>. Please click the link
          and follow the steps to finialize your account confirmation.
        </span>
        <br />
        <span className="text-center text-matterhorn-2 lg:px-28">
          If you are unable to find the email in your inbox, make sure to
          <span className="font-semibold"> check your spam folder.</span>
        </span>

        <span className="mt-20 text-center text-matterhorn-2">
          Still having trouble locating your email?
        </span>

        <Button
          variant="contained"
          className="!p-2 w-44 !capitalize !mx-auto  !mt-3"
          size="small"
          onClick={handleResend}
        >
          {isLoading ? (
            <CircularProgress sx={{ color: "white" }} />
          ) : (
            " Resend Email"
          )}
        </Button>
        <br />
        <span className="text-center text-matterhorn-2">
          Need help? Contact us
        </span>
      </div>
    </div>
  );
};
