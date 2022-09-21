import { useState } from "react";
import AthleteFinderModal from "../../components/AthleteFinderModal";
import Banner from "../../components/LandingPage/Banner";
import MediaContent from "../../components/LandingPage/MediaContent";
import Support from "../../components/Support";
import TopSellers from "../../components/LandingPage/TopSellers";

const LandingPage = () => {
  const [finderModalOpen, setFinderModalOpen] = useState(false);
  const [JoinModalOpen, setJoinModalOpen] = useState("");

  return (
    <div className="text-white">
      <Banner
        setFinderModalOpen={setFinderModalOpen}
        setJoinModalOpen={setJoinModalOpen}
      />
      <MediaContent setFinderModalOpen={setFinderModalOpen} />
      <TopSellers setJoinModalOpen={setJoinModalOpen} />
      <Support />
      {finderModalOpen && (
        <AthleteFinderModal
          finderModalOpen={finderModalOpen}
          setFinderModalOpen={setFinderModalOpen}
        />
      )}
    </div>
  );
};

export default LandingPage;
