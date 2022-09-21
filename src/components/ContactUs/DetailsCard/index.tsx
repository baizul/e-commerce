import { Facebook, Instagram } from "@mui/icons-material";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { AthleticEstateContactData } from "../../../helpers/ContactUs";
import Text from "../../shared/Text";

const DetailsCard = () => {
  return (
    <div className="relative h-full px-4 py-8 text-white lg:p-8">
      <Text className="text-2xl font-extrabold lg:text-4xl">Contact information</Text>
      {AthleticEstateContactData.map((items, index) => {
        return (
          <div
            key={index}
            className="flex flex-col mt-16 space-x-0 xsm:flex-row lg:space-x-4 text-md lg:text-2xl"
          >
            <div className="w-3/4">
              <Text className="font-bold">{items.key}</Text>
            </div>
            <div className="w-full">
              <Text>{items.value}</Text>
            </div>
          </div>
        );
      })}

      <div className="relative flex justify-between mt-16 space-x-4 text-xl text-md lg:text-2xl lg:mt-0 lg:absolute lg:bottom-12">
        <div className="w-full">
          <Text className="font-bold">Additional ways to connect:</Text>
          <div className="flex mt-8 space-x-8 text-3xl lg:text-4xl">
              <AiFillFacebook />
              <AiFillInstagram />
              <AiFillLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
