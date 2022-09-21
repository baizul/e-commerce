/**
 * @function Theme
 * @params {jsx} children
 * @returns theme of an applicaion.
 */

import { createTheme, ThemeProvider } from "@mui/material/styles";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Theme = (props: Props) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#CB0736" /* Crimson */,
        contrastText: "white",
      },
      secondary: {
        main: "#252525" /* Nero */,
        contrastText: "white",
      },
    },
    typography: {
      button: {
        fontFamily: "Mulish",
        letterSpacing: "0.025em",
        textTransform: "none",
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  );
};

export default Theme;
