import Text from "../../shared/Text";
import AccordionData from "./AccordionData";
import ReviewAccordion from "./ReviewAccordion";
interface Props {
  setisOpen: (val: boolean) => void;
}

const ProductDescription = ({ setisOpen }: Props) => {
  return (
    <div className="block w-full px-5 pt-10 m-4 ml-auto lg:w-1/2 lg:pt-0">
      <Text className="mb-4 text-xl font-extrabold md:text-2xl text-nero">
        PRODUCT DETAILS
      </Text>
      <AccordionData />
      <div>
        <ReviewAccordion setisOpen={setisOpen} />
      </div>
    </div>
  );
};
export default ProductDescription;
