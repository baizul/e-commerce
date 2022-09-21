import UniversityCard from "./UniversityCard";
import { universityCardData } from "../../../mockData/TopAthletes/TopEstates";
import React from "react";
import TopEstatesModal from "../TopEstatesModal";
import Modal from "@mui/material/Modal";

const TopEstates = () => {
  const [teamDetails, setTeamDetails] = React.useState(false);

  const handleModal = (data: boolean) => {
    setTeamDetails(data);
  };

  return (
    <>
      <Modal
        open={teamDetails}
        onClose={() => handleModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className=" outline-0"
      >
        <TopEstatesModal modalOpen={teamDetails} handleModal={handleModal} />
      </Modal>
      <div className="w-[91%] mx-auto" onClick={() => setTeamDetails(true)}>
        {universityCardData.map(
          ({ id, name, sport, duration, playerInformation }, index) => (
            <UniversityCard
              key={id}
              index={index}
              id={id}
              name={name}
              sport={sport}
              duration={duration}
              playerInformation={playerInformation}
            />
          )
        )}
      </div>
    </>
  );
};

export default TopEstates;
