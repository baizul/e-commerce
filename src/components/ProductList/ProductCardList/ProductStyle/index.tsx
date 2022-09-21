import { Button, FormControl } from "@mui/material";
import {} from "@mui/styles";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import {
  JerseyColorData,
  JerseysizeData,
  jerseySizes,
} from "../../../../helpers/ProductList";
import AutoComplete from "../../../shared/AutoComplete";
import { MdDone } from "react-icons/md";
import SizeGrid from "./SizeGrid";
import classNames from "classnames";
import Text from "../../../shared/Text";
import { addItemToCart } from "../../../../redux/Actions/cart";
import { useDispatch } from "react-redux";
interface Props {
  setSelectStyle: (val: boolean) => void;
  product_image: string;
  priceOffered: string;
}

const ProductStyle = ({
  setSelectStyle,
  priceOffered,
  product_image,
}: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const isDesktop = useMediaQuery({ minWidth: 1224 });
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      addItemToCart({
        id: `${Math.random() * 999}`,
        name: "Firstname Lastname",
        jerseyNumber: "#00",
        qty: quantity,
        price: Number(priceOffered),
        teamName: "Braves Jersey",
        image: product_image,
        color: color,
        size: size,
      })
    );
  };

  const ADDTOCART = () => {
    addToCart();
    setAdded(true);
    setTimeout(() => setSelectStyle(false), 3000);
  };

  return (
    <div className="absolute inset-0 flex flex-col justify-between px-4 py-2 bg-black rounded-md select-none lg:py-4 bg-opacity-70 font-mulish lg:top-10 lg:px-9">
      {!added ? (
        <>
          <FormControl className="flex flex-col space-y-2 lg:space-y-4">
            <Text className="self-start text-sm font-bold lg:text-lg text-whiteSmoke">
              SIZE
            </Text>
            <SizeGrid
              appliedFilters={size}
              setAppliedFilters={setSize}
              options={jerseySizes}
              classToOverride="!mx-0 hidden lg:grid"
            />
            <AutoComplete
              options={JerseysizeData}
              setValue={setSize}
              placeholder="Select Size"
              classToOverride="block lg:hidden"
            />
            <div className="flex flex-col space-x-0 lg:space-x-4 lg:flex-row">
              <Text className="self-start text-sm font-bold lg:text-lg lg:self-center text-whiteSmoke">
                COLOR
              </Text>
              <AutoComplete
                options={JerseyColorData}
                setValue={setColor}
                placeholder="Select Color"
              />
            </div>
            <div className="flex mt-4 ml-auto lg:justify-between lg:ml-0">
              <Text className="self-center hidden text-lg font-bold text-whiteSmoke lg:block">
                QTY
              </Text>
              <div className="flex space-x-2">
                <Text
                  className={classNames(
                    "flex items-center justify-center w-8 text-white rounded-sm cursor-pointer h-7 lg:w-10  lg:h-9",
                    quantity > 1 ? "bg-eclipse-1" : "bg-eclipse-1 opacity-70"
                  )}
                  onClick={() => setQuantity(quantity <= 0 ? 0 : quantity - 1)}
                >
                  <AiOutlineMinus />
                </Text>
                <Text className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer lg:w-10 bg-nero lg:h-9 h-7">
                  {quantity}
                </Text>
                <Text
                  className="flex items-center justify-center w-8 text-white rounded-sm cursor-pointer h-7 lg:w-10 bg-eclipse lg:h-9"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <AiOutlinePlus />
                </Text>
              </div>
            </div>
            {color && size && !isDesktop && (
              <Button
                fullWidth
                variant="contained"
                autoCapitalize="Off"
                size="small"
                style={{ textTransform: "none" }}
                onClick={() => {
                  ADDTOCART();
                }}
              >
                Add to Cart
              </Button>
            )}
            {isDesktop && color && size && (
              <Button
                fullWidth
                variant="contained"
                autoCapitalize="Off"
                size="small"
                className="text-base font-semibold"
                style={{ textTransform: "none" }}
                onClick={() => {
                  ADDTOCART();
                }}
              >
                Add to Cart
              </Button>
            )}
          </FormControl>
          <Text
            onClick={() => setSelectStyle(false)}
            className="text-xs font-semibold text-center text-white cursor-pointer lg:text-base"
          >
            Cancel
          </Text>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-crimson">
            <MdDone className="text-white lg:text-5xl text-3.5xl" />
          </div>
          <Text className="text-xs font-bold text-white lg:text-xl">
            Added to Cart
          </Text>
        </div>
      )}
    </div>
  );
};

export default ProductStyle;
