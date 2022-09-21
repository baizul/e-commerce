import { Resources } from "../../../../config/Resources";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import SizeGrid from "../../../ProductList/ProductCardList/ProductStyle/SizeGrid";
import { jerseySizes, JerseyColorData } from "../../../../helpers/ProductList";
import AutoComplete from "../../../shared/AutoComplete";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Button } from "@mui/material";
import classNames from "classnames";
import Text from "../../../shared/Text";
import { useMediaQuery } from "@mui/material";
import { addItemToCart } from "../../../../redux/Actions/cart";
import { useDispatch } from "react-redux";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addItemToCart({
        id: `${Math.random() * 999}`,
        name: "Firstname Lastname",
        jerseyNumber: "#00",
        qty: quantity,
        price: Number(130),
        teamName: "Braves Jersey",
        image: "https://ae.sharemeister.com/images/ProductDetails/product.png",
        color: color,
        size: selectedSize,
      })
    );
  };
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const isPhone = useMediaQuery("(max-width: 300px)");
  const [selectedSize, setSelectedSize] = useState<any>([]);
  const [color, setColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  return (
    <div className="flex-col items-center w-full p-4 pt-4 lg:w-1/2">
      <Text className="flex items-center">
        <img
          src={Resources.images.ProductDetails.Trending}
          className="w-4 h-6 m-1"
        />
        <span className="text-xs lg:text-xl text-crimson">Trending</span>
      </Text>
      <div className="flex items-center my-1 lg:my-3">
        <Rating
          name="text-feedback"
          value={5}
          readOnly
          className="!text-gorse"
        />
        <span className="text-xs lg:mx-3 lg:text-base text-davyGrey">
          25 reviews
        </span>
      </div>

      <div className="flex items-center h-12">
        <img
          src={Resources.images.ProductDetails.AthleteProfile}
          className="w-10 h-10"
        />
        <span className="mx-2 text-xl font-extrabold lg:text-4xl">
          Michael Jordan - #23
        </span>
      </div>
      <Text className="mt-1 text-sm lg:mt-3 lg:text-xl text-ecliTextse">
        Basketball &#183; University of North Carolina
      </Text>
      <Text className="my-1 text-sm lg:my-3 lg:text-xl text-eclipse-1">
        Rank: 1st
      </Text>
      <Text className="flex items-center">
        <span className="text-xl font-extrabold lg:text-4xl">$104.00</span>
        <del className="mx-2 text-sm lg:text-xl text-eclipse-1">$130.00</del>
      </Text>
      <Text className="mt-5 text-xl font-extrabold">SIZE</Text>
      <SizeGrid
        appliedFilters={selectedSize}
        setAppliedFilters={setSelectedSize}
        options={jerseySizes}
        classToOverride={classNames(
          "relative right-4 lg:flex ",
          isPhone ? "w-full" : "w-2/3 lg:w-full"
        )}
      />
      <div className="flex">
        <Text className="py-1 mr-3 text-xl font-extrabold">COLOR</Text>
        <div className="w-40 ">
          <AutoComplete
            options={JerseyColorData}
            setValue={setColor}
            placeholder="Select Color"
          />
        </div>
      </div>
      <div className="flex my-6">
        <Text className="py-2 mr-3 text-xl font-extrabold">QTY</Text>
        <div className="flex pt-2 space-x-2 pl-7 ">
          <span
            className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer h-7 lg:w-10 bg-veryLightGrey lg:h-9"
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
          >
            <AiOutlineMinus />
          </span>
          <span className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer lg:w-10 bg-nero lg:h-9 h-7">
            {quantity}
          </span>
          <span
            className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer h-7 lg:w-10 bg-eclipse-1 lg:h-9"
            onClick={() => setQuantity(quantity + 1)}
          >
            <AiOutlinePlus />
          </span>
        </div>
      </div>
      <div className="!mt-10 w-full lg:w-80 mb-12 text-center">
        <Button
          fullWidth
          variant={added ? "outlined" : "contained"}
          autoCapitalize="Off"
          className={classNames(
            "!capitalize",
            isDesktop ? "!w-full" : "!w-11/12"
          )}
          onClick={() => {
            addToCart();
            setAdded(true);
          }}
          disabled={color && selectedSize.length !== 0 ? false : true}
        >
          {selectedSize.length !== 0 && color !== ""
            ? " Cart"
            : "Select a Size"}
        </Button>
      </div>
    </div>
  );
};
