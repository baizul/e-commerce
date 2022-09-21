import { useState, useRef } from "react";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
interface Props {
  children: JSX.Element | JSX.Element[];
  btnClassToOverride?: string;
  classToOverRide?: string;
  leftArrowBtnClassOverride?: string;
  isHorizontal?: boolean;
  SliderContainerClass?: string;
}
const ContentSlider = ({
  children,
  classToOverRide,
  btnClassToOverride,
  leftArrowBtnClassOverride,
  SliderContainerClass,
  isHorizontal = true,
}: Props) => {
  const [showSliderButtons, setshowSliderButtons] = useState({
    prevBtn: true,
    nextBtn: true,
  });
  const [touchPosition, setTouchPosition] = useState(null);
  const swiper: any = useRef(null);
  const handleTouchStart = (e: any) => {
    const touchDown = isHorizontal
      ? e.touches[0].clientX
      : e.touches[0].clientY;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = isHorizontal
      ? e.touches[0].clientX
      : e.touches[0].clientY;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      isHorizontal
        ? (swiper.current.scrollLeft += 300)
        : (swiper.current.scrollTop += 300);
    }
    if (diff < -5) {
      isHorizontal
        ? (swiper.current.scrollLeft -= 300)
        : (swiper.current.scrollTop -= 300);
    }
    setTouchPosition(null);
  };
  return (
    <div className={classNames(classToOverRide, !isHorizontal ? "!top-0" : "")}>
      {showSliderButtons.prevBtn && (
        <button
          className={classNames(
            "absolute rounded-full top-1/2 -translate-y-1/2 !left-[2.8rem] z-10 h-[1.5rem] w-[1.5rem] bg-black bg-opacity-70 text-white hidden lg:flex justify-center items-center m-1",
            btnClassToOverride,
            leftArrowBtnClassOverride,
            !isHorizontal ? "!top-[-1%] left-[28%] h-full w-full" : ""
          )}
          onClick={() =>
            isHorizontal
              ? (swiper.current.scrollLeft -= 300)
              : (swiper.current.scrollTop -= 300)
          }
        >
          {isHorizontal ? (
            <KeyboardArrowLeftIcon />
          ) : (
            <KeyboardControlKeyIcon />
          )}
        </button>
      )}
      <div
        ref={swiper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={classNames(
          SliderContainerClass,
          "container",
          !isHorizontal && "flex-col h-full"
        )}
      >
        {children}
      </div>
      {showSliderButtons.nextBtn && (
        <button
          className={classNames(
            "absolute top-1/2 rounded-full -translate-y-1/2 !right-[3.8rem] z-10 h-[1.5rem] w-[1.5rem] bg-black bg-opacity-70 text-white hidden lg:flex justify-center items-center",
            btnClassToOverride,
            !isHorizontal ? "top-[78%] left-[35%] h-full w-full" : ""
          )}
          onClick={() =>
            isHorizontal
              ? (swiper.current.scrollLeft += 300)
              : (swiper.current.scrollTop += 300)
          }
        >
          {isHorizontal ? <IoIosArrowForward /> : <KeyboardArrowDownIcon />}
        </button>
      )}
    </div>
  );
};
export default ContentSlider;
