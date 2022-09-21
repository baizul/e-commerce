import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import TopSection from "../TopSection";

interface Props {
  setactiveTabIndex: (activeTabIndex: string) => void;
}

const PasswordCreated = ({ setactiveTabIndex }: Props) => {
  return (
    <>
      <TopSection currentStep={0} />
      <div className="flex flex-col items-center justify-center p-4 mx-auto text-center text-black bg-white rounded-bl-lg rounded-br-lg md:w-4/5 w-9/10 sm:w-1/2 font-mulish">
        <div className=" md:py-5">
          {
            <CheckCircleOutlineIcon
              style={{ fontSize: 60, color: "#43A959" }}
            />
          }
        </div>

        <h1 className="mb-6 text-xl font-bold lg:text-3xl w-max lg:mb-8 font-mulish">
          Password Created
        </h1>
        <div className="flex justify-center mx-6 mb-4 md:mb-10">
          <p className="text-xs font-medium font-mulish !text-center sm:text-sm">
            Now that you’ve created your password, select continue to finish
            setting up your account.
          </p>
        </div>

        <div className="mx-20 mb-4">
          <button className="px-10 md:px-20 py-2.5  text-base font-semibold text-white bg-red-700 rounded shadow-md  w-max">
            Continue
          </button>
        </div>
        <div className="text-xs font-medium underline sm:text-sm">
          <Link to="#">I'll finish this later</Link>
        </div>
      </div>
    </>
  );
};

export default PasswordCreated;
