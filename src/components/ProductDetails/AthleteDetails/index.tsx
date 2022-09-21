import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ProductDetails } from "../../../helpers/ProductDetails";
import Text from "../../shared/Text";
import AthleteDataCard from "./AthleteDataCard";

const AthleteDetails = () => {
  return (
    <div className="w-full px-6">
      <div className="flex flex-col lg:flex-row">
        <Text className="font-extrabold text-1.5xl">DETAILS</Text>
        <div
          className={`lg:ml-auto ml-0 space-x-2 font-normal md:font-bold text-sm flex items-center text-eclipse-1 hover:text-crimson`}
        >
          <AiOutlineSearch size={22} />
          <Text>Find Your Athlete</Text>
        </div>
      </div>
      <div className="mt-4">
        <AthleteDataCard
          AthleteImage={ProductDetails.AthleteDetails.profileImage}
          AthleteName={ProductDetails.AthleteDetails.name}
          AthleteNumber={ProductDetails.AthleteDetails.number}
          AthleteSport={ProductDetails.AthleteDetails.sport}
          AthleteSchool={ProductDetails.AthleteDetails.school}
        />
      </div>
    </div>
  );
};

export default AthleteDetails;
