import { ProductDetails } from "../../../helpers/ProductDetails";
import Text from "../../shared/Text";
import MissingCard from "./AreYouMissingCard";
import AthleticEstateData from "./AthleticEstateData";

const AthleticEstate = () => {
  return (
    <div className="w-full px-0 pl-6 mt-10 md:px-6 ">
      <div className="flex flex-col sm:px-0 lg:flex-row">
        <Text className="font-extrabold text-1.5xl">STATE</Text>
        <div
          className={`lg:ml-auto ml-0 space-x-2 font-normal text-sm flex items-center text-eclipse-1 `}
        >
          <span>{ProductDetails.AthleteDetails.number}</span>
          <span className="flex items-center ">
            &bull;
            <Text className="ml-2">{ProductDetails.AthleteDetails.sport}</Text>
          </span>
          <span className="flex items-center">
            &bull;
            <Text className="ml-2">{ProductDetails.AthleteDetails.school}</Text>
          </span>
        </div>
      </div>
      <div className="mt-4 ">
        <AthleticEstateData
          AthleticEstateDetails={ProductDetails.AthleticEstateDetails}
        />
      </div>
      <div className="pr-6 mt-4 sm:pr-0">
        <MissingCard />
      </div>
    </div>
  );
};

export default AthleticEstate;
