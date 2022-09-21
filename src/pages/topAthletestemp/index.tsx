import TopEstates from "../../components/TopAthletes/TopEstates";
import SegmentCard from "../../components/TopAthletes/SegmentCard";
import { useState } from "react";
import ProductPagination from "../../components/ProductList/ProductPagination";
import Top100Athletes from "../../components/TopAthletes/Top100Athletes";

const TopAthletesTemp = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div>
      <SegmentCard flag={flag} setFlag={setFlag} />
      {flag ? <Top100Athletes /> : <TopEstates />}
      <div className="mb-24 lg:mb-14">
        <ProductPagination size="small" />
      </div>
    </div>
  );
};

export default TopAthletesTemp;
