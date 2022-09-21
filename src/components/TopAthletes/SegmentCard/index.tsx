import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useMediaQuery } from "react-responsive";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Text from "../../shared/Text";

type Props = {
  flag: boolean;
  setFlag: (flag: boolean) => void;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#252525",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

const useStyles = makeStyles((theme) => {
  return {
    root: {
      "&.MuiButton-root": {
        border: "1px black solid",
      },
      "&.MuiButton-text": {
        color: "grey",
      },
      "&.MuiButton-contained": {
        backgroundColor: "#252525",
        color: "white",
        fontWeight: 800,
        fontFamily: "mulish",
        fontSize: "0.8rem",
        borderColor: "#575757 !important",
        textTransform: "none"
      },
      "&.MuiButton-outlined": {
        backgroundColor: "#FFFFFF",
        color: "#575757",
        fontWeight: 700,
        fontFamily: "mulish",
        fontSize: "0.8rem",
        borderColor: "#575757 !important",
        textTransform: "none"
      },
    },
  };
});

const SegmentCard = ({ flag, setFlag } : Props) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const classes = useStyles();
  return (
    <div className="w-[91%] mx-auto h-[11rem] lg:h-[7.5rem] ">
      <Link to="/product-list" className="flex mt-[1.5rem] mb-[0.5rem]">
        <KeyboardBackspaceIcon sx={{color: "#575757"}} className="mr-[0.5rem]"/>
        <Text className="text-matterhorn-2 font-mulish font-semibold text-[1rem]">
          {isDesktop ? "Continue Shopping" : "Back"}
        </Text>
      </Link>
      <div className="lg:relative">
        <Text className="text-[1.875rem] md:text-[2rem] lg:text-[1.875rem] font-extrabold font-mulish text-nero mb-[1.5rem] lg:inline-block">
          {flag ? "Top 100" : "Top 100 Estates"}
        </Text>
        <div className="flex justify-center lg:inline-block lg:absolute lg:right-0">
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <ThemeProvider theme={theme}>
              <Button
                variant={flag ? "contained" : "outlined"}
                className={classes.root}
                onClick={() => setFlag(!flag)}
              >
                Top 100
              </Button>
              <Button
                variant={flag ? "outlined" : "contained"}
                className={classes.root}
                onClick={() => setFlag(!flag)}
              >
                Top 100 Estates
              </Button>
            </ThemeProvider>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default SegmentCard;
