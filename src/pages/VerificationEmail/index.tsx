import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useEffect, useRef } from "react";
import Text from "../../components/shared/Text";
import { verifyEmailFn } from "../../services/LoginOrSignUp";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
export const VerificationEmail = (props) => {
  const { token } = useParams();

  const response = useQuery(["verifyEmailFn"], () => verifyEmailFn(token));

  return (
    <>
    {response ?
    <div className="flex justify-center p-8 mx-auto my-6">
      <div className="flex flex-col items-center p-8 py-16 mx-5 my-0 shadow-product rounded-xl">
        <CheckCircleIcon className="!text-persianGreen !w-24 !h-24" />
        <Text className="mt-5 text-2xl font-bold text-center lg:text-4xl">
          Email Verification
        </Text>
        <Text className="w-3/4 text-center text-matterhorn-2 margin-auto">
          Your email is verified
        </Text>
        <Text className="w-3/4 text-center text-matterhorn-2 margin-auto">
          You can continue using this application
        </Text>
      </div>
    </div> : <p className="w-full text-center text-black">Loading...</p>}
    </>
  );
};
