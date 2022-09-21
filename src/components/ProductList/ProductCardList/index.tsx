import { Button } from "@mui/material";
import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Resources } from "../../../config/Resources";
import Text from "../../shared/Text";
import OfferTag from "./OfferTag";
import ProductStyle from "./ProductStyle";
import { addItemToCart } from "../../../redux/Actions/cart";
import { useDispatch } from "react-redux";

interface Props {
  product_image: string;
  priceOffered: string;
  initialPrice?: string;
  offer?: string;
}

const ProductCardList = ({
  product_image,
  priceOffered,
  initialPrice,
  offer,
}: Props) => {
  const [selectStyle, setSelectStyle] = useState(false);
  return (
    <div className="relative h-auto pt-5 rounded-md shadow-product font-mulish">
      <Link to="/product-details" className="flex flex-col items-center">
        <img src={product_image} alt="jerseys" className=" h-28 lg:h-fit" />
      </Link>
      <div className="pb-5 space-y-1 text-xs lg:text-xl text-center border-veryLightGrey border-b-0.3 px-2">
        <Text className="font-medium">Firstname Lastname</Text>
        <Text className="font-bold lg:font-extrabold">#00</Text>
        <div className="flex items-center justify-center space-x-2 font-bold lg:font-extrabold">
          <Text>{`$${priceOffered}`}</Text>
          {initialPrice && <s className="font-light">{`$${initialPrice}`}</s>}
          {offer ? (
            <OfferTag offerPrice={offer} />
          ) : (
            <div className="h-6"></div>
          )}
        </div>
      </div>
      <Button
        variant="text"
        className="!py-2 !text-center! !text-matterhorn-2 w-full"
        color="inherit"
        onClick={() => {
          setSelectStyle(true);
        }}
      >
        + Quick add
      </Button>
      {selectStyle && (
        <ProductStyle
          setSelectStyle={setSelectStyle}
          priceOffered={priceOffered}
          product_image={product_image}
        />
      )}
    </div>
  );
};

export default ProductCardList;
