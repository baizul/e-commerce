import { IconButton } from "@mui/material";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { BsZoomIn, BsZoomOut } from "react-icons/bs";

type Props = {
  imageUrl: string;
};

const ZoomImage = ({ imageUrl }: Props) => {
  const [currentHeightsize, setcurrentHeightsize] = useState(100);
  useEffect(()=>{
    setcurrentHeightsize(100)
  },[imageUrl])
  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="flex justify-center w-full ml-0 overflow-auto md:ml-auto md:pr-0 h-96 no-scrollbar">
        <div>
          <img
            style={{
              height: `${currentHeightsize}%`,
            }}
            src={imageUrl}
            className={classNames(
              `transition-all w-full min-w-fit max-w-fit ease-in-out delay-150`
            )}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4 md:w-fit md:mt-0">
        <div className="static rounded-md overflow-hidden md:absolute flex flex-row md:flex-col ml-8 right-[5%] top-3/4 w-fit">
          <IconButton
            disabled={!(currentHeightsize === 100)}
            classes={{
              root: classNames(
                currentHeightsize === 100 ? "opacity-70" : "opacity-20",
                "!text-2xl  !text-white !rounded-none !bg-black !p-2"
              ),
            }}
            onClick={() => {
              setcurrentHeightsize(200);
            }}
          >
            <BsZoomIn />
          </IconButton>
          <IconButton
            disabled={!(currentHeightsize === 200)}
            classes={{
              root: classNames(
                currentHeightsize === 200 ? "opacity-70" : "opacity-20",
                "!text-2xl !text-white !rounded-none !bg-black !p-2"
              ),
            }}
            onClick={() => {
              setcurrentHeightsize(100);
            }}
          >
            <BsZoomOut />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ZoomImage;
