import { Resources } from "../../../../config/Resources";
import ContentSlider from "../../../shared/ContentSlider";
import ZoomInSharpIcon from "@mui/icons-material/ZoomInSharp";
import classNames from "classnames";
import { useMediaQuery } from "@mui/material";
interface Props {
  handleOpen: () => void;
}

export const Product = ({ handleOpen }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isPhone = useMediaQuery("(max-width: 300px)");
  const isTab = useMediaQuery("(max-width: 1200px)");

  return (
    <div
      className="flex flex-col-reverse w-full pl-0 mb-16 lg:pr-8 lg:my-0 lg:flex-row lg:w-1/2 lg:pl-12"
      style={{ alignItems: isDesktop ? "unset" : "center" }}
    >
      <ContentSlider
        btnClassToOverride="!top-full "
        classToOverRide="relative z-10 top-0 xl:top-10 mx-4 xl:mx-0 h-fit xl:!h-[500px] lg:my-4"
        SliderContainerClass="h-fit xl:!h-[480px] justify-start items-center"
        isHorizontal={isDesktop ? false : true}
      >
        {[...Array(8)].map((item, index) => (
          <img
            src={Resources.images.ProductDetails.ProductSmall}
            className="w-24 h-20 lg:w-auto lg:h-auto"
            key={index}
          />
        ))}
      </ContentSlider>

      <div
        className={classNames(
          "w-5/6 flex flex-row justify-end lg:flex-col lg:items-end lg:justify-start",
          isTab && isDesktop ? "!pl-24" : "lg:!pl-24"
        )}
        style={{ alignItems: isDesktop ? "unset" : "center" }}
      >
        <div className="w-3/5 h-3/5 lg:!w-[75%] lg:!h-[75%] 2xl:h-[50vh] 2xl:w-[40vh]">
          <img src={Resources.images.ProductDetails.Product} />
        </div>

        <div
          className={classNames(
            "flex justify-end pb-4 pl-8 pt-72 lg:pr-2 lg:p-0 md:pl-24 md:pt-[100%]",
            isPhone ? "!pl-4" : "!pl-8 lg:!pl-48"
          )}
          onClick={() => handleOpen()}
        >
          <ZoomInSharpIcon className="justify-self-end !w-9 !h-9  p-1 text-white bg-black rounded bg-opacity-70 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
