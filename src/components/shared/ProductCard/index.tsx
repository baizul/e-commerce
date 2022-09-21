import Button from "@mui/material/Button";
import Text from "../Text";

interface Props {
  image: string;
  name: string;
  jerseyNumber: string;
  price: number;
}

const ProductCard = (props: Props) => {
  return (
    <div>
      <div className="relative border-solid border shadow-product border-whiteSmoke  flex flex-col items-center !w-[13.5rem] !min-w-[13.5rem] lg:!w-[17.5rem] lg:!min-w-[17.5rem] !h-[21rem] lg:!h-[25.2rem] md:!h-[21rem] bg-white !mr-4 rounded-[8px]">
        <img src={props.image} className="mt-4 h-[52%] max-h-[30rem]" />
        {props.name && (
          <Text className="mt-1 lg:mt-4 text-[1.1rem] font-medium font-mulish text-nero">
            {props.name}
          </Text>
        )}
        {props.name ? (
          <Text className="text-[1.3rem] font-bold font-mulish text-nero">
            {props.jerseyNumber}
          </Text>
        ) : (
          <Text className="mt-[1.95rem] lg:mt-[2.9rem] text-[1.1rem] font-bold font-mulish text-nero">
            {props.jerseyNumber}
          </Text>
        )}
        <Text className="mt-2 mb-1 lg:mt-4 font-extrabold text-[1rem] font-mulish text-eclipse">
          {`$${props.price.toFixed(2)}`}
        </Text>
        <div className="absolute !border-none w-full mt-3 bg-veryLightGrey !h-[0.1px] md:!h[0.1px] lg:!h-[0.1px] bottom-[2.3rem] md:bottom-[2.35rem] lg:bottom-[2.5rem]"></div>
        <Button
          color="secondary"
          size="small"
          className="!absolute mt-1 text-[0.8rem] font-normal divide-y bottom-[0.2rem] lg:bottom-[0.3rem] text-matterhorn-2 font-mulish hover:cursor-pointer"
          sx={{
            color: "#575757",
            fontFamily: "mulish",
            textTransform: "none",
            fontSize: "0.8rem",
            fontWeight: "400",
          }}
        >
          + Quick add
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
