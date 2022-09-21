import { Avatar } from "@mui/material";
import { AthleteDetailsKeys } from "../../../../helpers/ProductDetails";
import Text from "../../../shared/Text";

type Props = {
  AthleteImage?: string;
  AthleteName?: string;
  AthleteNumber?: string;
  AthleteSport?: string;
  AthleteSchool?: string;
};

const AthleteDataCard = ({
  AthleteImage,
  AthleteName,
  AthleteNumber,
  AthleteSport,
  AthleteSchool,
}: Props) => {
  return (
    <div className="flex flex-col items-center w-full px-6 py-3 bg-white border rounded-md lg:flex-row drop-shadow-md border-whiteSmoke">
      <Avatar classes={{ root: "!w-32 !h-32" }} src={AthleteImage} />
      <div className="w-full mt-4 ml-4 space-y-1 lg:ml-auto md:mt-0 lg:w-7/10">
        {AthleteName && (
          <div className="flex flex-col items-start justify-between space-x-0 xsm:space-x-6 xsm:flex-row md:items-center text-eclipse">
            <Text className="text-lg font-bold">{AthleteName}</Text>
            <Text className="order-first mt-1 text-sm font-normal xsm:order-last md:mt-0">
              Name
            </Text>
          </div>
        )}
        {AthleteNumber && (
          <div className="flex flex-col items-start justify-between space-x-0 xsm:space-x-6 xsm:flex-row md:items-center text-eclipse">
            <Text className="text-lg font-bold">{AthleteNumber}</Text>
            <Text className="order-first mt-1 text-sm font-normal xsm:order-last md:mt-0">
              Number
            </Text>
          </div>
        )}
        {AthleteSport && (
          <div className="flex flex-col items-start justify-between space-x-0 xsm:space-x-6 xsm:flex-row md:items-center text-eclipse">
            <Text className="text-lg font-bold">{AthleteSport}</Text>
            <Text className="order-first mt-1 text-sm font-normal xsm:order-last md:mt-0">
              Sport
            </Text>
          </div>
        )}
        {AthleteSchool && (
          <div className="flex flex-col items-start justify-between space-x-0 xsm:space-x-6 xsm:flex-row md:items-center text-eclipse">
            <Text className="text-lg font-bold">{AthleteSchool}</Text>
            <Text className="order-first mt-1 text-sm font-normal xsm:order-last md:mt-0">
              School
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default AthleteDataCard;
