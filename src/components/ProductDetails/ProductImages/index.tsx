import { Box, Button } from "@mui/material";
import classNames from "classnames";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Resources } from "../../../config/Resources";
import ZoomImage from "./ZoomImage";
import { ProductSliderImages } from "../../../helpers/ProductDetails";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ContentSlider from "../../shared/ContentSlider";
import { useMediaQuery } from "react-responsive";

type Props = {
  setOpen: () => void;
};

const ProductImages = ({ setOpen }: Props) => {
  const [activeImage, setactiveImage] = useState(0);
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return (
    <Box className="absolute w-11/12 py-2 md:py-4 px-0   md:px-4  -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md top-1/2 left-1/2  md:w-1/2 lg:w-[40%] outline-0">
      <div className="relative flex flex-col items-center justify-between w-full px-2 md:flex-row md:px-0">
        <div className="order-last text-md text-ellipsis md:order-first">
          Firstname Lastname - #00
        </div>
        <Button
          variant="text"
          classes={{
            root: "!text-black !text-lg !min-w-fit !ml-auto !p-0 md:!ml-0",
          }}
          onClick={() => setOpen()}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <div className="flex flex-col xl:flex-row">
        <div className="order-last w-full h-full overflow-hidden xl:w-1/5 xl:order-first">
          <div className="h-fit xl:h-96">
            <ContentSlider
              btnClassToOverride="!top-full "
              classToOverRide="relative z-10 top-0 xl:top-10 mx-4 xl:mx-0 h-fit xl:h-screen-4/5"
              SliderContainerClass="h-fit xl:!h-72 justify-start items-center"
              isHorizontal={isDesktop ? false : true}
            >
              {ProductSliderImages.map((items, index) => (
                <div
                  className={classNames(
                    index === activeImage
                      ? "border-eclipse-1"
                      : "border-whiteSmoke",
                    "px-5 m-1 border rounded border-whiteSmoke"
                  )}
                >
                  <img
                    key={index}
                    onClick={() => setactiveImage(index)}
                    src={items}
                    className={"mx-4 max-w-12 lg:h-auto xl:mx-0 lg:py-2"}
                  />
                </div>
              ))}
            </ContentSlider>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-full space-x-4 xl:w-4/5 xl:ml-auto ">
          {activeImage > 0 && (
            <button
              onClick={() => activeImage > 0 && setactiveImage(activeImage - 1)}
              className={classNames(
                "absolute left-8 rounded-full -translate-y-1/2 z-10 h-8 w-8 bg-black bg-opacity-70 text-white hidden lg:flex justify-center items-center"
              )}
            >
              <IoIosArrowBack />
            </button>
          )}
          <ZoomImage imageUrl={ProductSliderImages[activeImage]} />
          {activeImage < ProductSliderImages.length - 1 && (
            <button
              onClick={() =>
                activeImage < ProductSliderImages.length - 1 &&
                setactiveImage(activeImage + 1)
              }
              className={classNames(
                " absolute rounded-full -translate-y-1/2 !right-8 z-10 h-8 w-8 bg-black bg-opacity-70 text-white hidden lg:flex justify-center items-center"
              )}
            >
              <IoIosArrowForward />
            </button>
          )}
        </div>
      </div>
    </Box>
  );
};

export default ProductImages;
