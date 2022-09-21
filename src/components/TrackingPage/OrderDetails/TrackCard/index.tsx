import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

const useStylesCrimson = makeStyles((theme) => {
  return {
    root: {
      "&.MuiButton-contained": {
        backgroundColor: "#CB0736",
        color: "white",
        fontWeight: 600,
        fontFamily: "mulish",
        fontSize: "1rem",
        borderColor: "#CB0736 !important",
        textTransform: "none",
      },
    },
  };
});

const useStylesGrey = makeStyles((theme) => {
  return {
    root: {
      "&.MuiButton-contained": {
        backgroundColor: "#252525",
        color: "white",
        fontWeight: 600,
        fontFamily: "mulish",
        fontSize: "1rem",
        borderColor: "#575757 !important",
        textTransform: "none",
      },
    },
  };
});

const TrackCard = () => {
  const classesCrimson = useStylesCrimson();
  const classesGrey = useStylesGrey();
  return (
    <div className="flex flex-col mx-auto mb-5 w-9/10 lg:hidden">
      <div className="h-10 w-44">
        <Button variant="contained" className={classNames(
            "w-full",
            classesCrimson.root
          )}>
          Track Order
        </Button>
      </div>
      <div className="h-10 mt-3 w-44 ">
        <Button variant="contained" className={classNames(
            "w-full",
            classesGrey.root
          )}>
          Order Again
        </Button>
      </div>
    </div>
  );
};

export default TrackCard;
