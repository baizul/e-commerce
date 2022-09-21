import { topSellersData } from "../../../mockData/Landing";
import { topSellersBackground } from "../../../helpers/Landing";
import Legacy from "../../Legacy";
import ProductCard from "../../shared/ProductCard";
import ContentSlider from "../../shared/ContentSlider";
import Text from "../../shared/Text";

const TopSellers = ({
  setJoinModalOpen,
}: {
  setJoinModalOpen: (param: string) => void;
}) => {
  return (
    <div className="relative !w-full bg-whiteSmoke h-auto pb-8 overflow-hidden">
      <Text className="relative font-extrabold text-[1.3rem] text-nero font-mulish top-8 left-4 lg:left-12">
        TOP SELLERS
      </Text>
      <span className="absolute right-0 w-[55%] top-[3.4rem] md:top-[3.1rem] lg:top-[3.1rem]">
        <img
          src={topSellersBackground}
          alt="Top Sellers"
          className="md:h-[2rem] md:w-[25rem] lg:w-[33rem] md:ml-auto"
        />
      </span>
      <div>
        <ContentSlider classToOverRide="relative z-10 top-12 left-4 lg:left-12" leftArrowBtnClassOverride="lg:-translate-y-5">
          {topSellersData.map(({ id, image, name, jerseyNumber, price }) => (
            <ProductCard
              key={id}
              image={image}
              name={name}
              jerseyNumber={jerseyNumber}
              price={price}
            />
          ))}
        </ContentSlider>
      </div>
      <div className="relative top-8">
        <Legacy setJoinModalOpen={setJoinModalOpen} />
      </div>
    </div>
  );
};

export default TopSellers;
