import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Text from "../../components/shared/Text";
import Conditions from "../../components/TermsAndCondition/Conditions";

const TermsAndCondition = () => {
  return (
    <div className="px-4 pt-8 lg:px-14">
      <Link
        to="/"
        className="flex items-center space-x-2 text-base font-semibold text-davyGrey"
      >
        <BiArrowBack size={24} />
        <Text>Continue Shopping</Text>
      </Link>
      <Text className="py-4 lg:text-[46px] text-3xl font-extrabold text-nero hidden lg:block">
        Terms & Conditions
      </Text>
      <Conditions />
    </div>
  );
};

export default TermsAndCondition;
