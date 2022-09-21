import { Top100AthletesData } from "../../../mockData/TopAthletes/Top100Athletes";
import AthleteCard from "./AthleteCard";
import React from "react";

const Top100Athletes = () => {
  const [athleteBio, setAthleteBio] = React.useState(false);

  const handleModal = (data: boolean) => {
    setAthleteBio(data);
  };

  return (
    <div className="w-[90%] mx-auto lg:mt-0">
      {Top100AthletesData.map(
        ({ id, athlete_image, name, no, college, sport, year }, index) => (
          <AthleteCard
            key={id}
            index={index}
            id={id}
            athlete_image={athlete_image}
            name={name}
            no={no}
            college={college}
            sport={sport}
            year={year}
            isTotalRevenue={false}
          />
        )
      )}
    </div>
  );
};

export default Top100Athletes;
