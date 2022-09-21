import { accessoriesData } from "../../../mockData/ProductDetails";
import ProductCard from "../../shared/ProductCard";
import ContentSlider from "../../shared/ContentSlider";
import { Resources } from "../../../config/Resources";
import Text from "../../shared/Text";

const Accessories = () => {
  return (
    <div className="relative !w-full bg-whiteSmoke h-[32rem] lg:h-[34.1rem] pb-8 overflow-hidden">
      <Text className="relative font-extrabold text-[1.3rem] mt-5 lg:mt-3 text-nero font-mulish top-8 left-4 lg:left-12">
        CHECK OUT THESE ACCESSORIES
      </Text>
      <span className="absolute right-0 w-[55%] h-[7rem] top-[3.4rem] md:top-[3.1rem] lg:top-[3rem] hidden lg:block">
        <img
          src={Resources.images.ProductDetails.image.backgroundImage}
          alt="Accessories"
          className="md:h-[2rem] md:w-[25rem] lg:w-[39rem] lg:h-[3.4rem] md:ml-auto"
        />
      </span>
      <div>
        <ContentSlider classToOverRide="relative z-10 top-12 left-4 lg:left-12" leftArrowBtnClassOverride="lg:-translate-y-5">
          {accessoriesData.map(({ id, image, name, jerseyNumber, price }) => (
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
    </div>
  )
};

export default Accessories;
