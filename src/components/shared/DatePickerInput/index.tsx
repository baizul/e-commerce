import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import classNames from "classnames";
import { months } from "../../../helpers/AthleteDashboard";

type Props = {
  InputProps: any;
  inputProps: any;
  inputRef: any;
  isMobile: boolean;
};

export const DatePickerInput = ({
  InputProps,
  inputProps,
  inputRef,
  isMobile,
}: Props) => {
  return (
    <Box
      className={classNames(
        "flex justify-end",
        isMobile ? "lg:hidden" : "hidden lg:block"
      )}
    >
      <Box className="flex items-center h-9 bg-pattensBlue !text-blackPearl-2 rounded">
        <>
          <span className="mr-3 bg-pattensBlue">
            {InputProps?.endAdornment}
            {isMobile && (
              <CalendarTodayIcon className="ml-2 !w-5 !h-5 !text-blackPearl-2" />
            )}
          </span>
          <input
            ref={inputRef}
            {...inputProps}
            readOnly={true}
            className="!border-0 !outline-0 w-32 lg:w-24 bg-pattensBlue !text-blackPearl-2 text-xs"
            value={
              inputProps?.value
                ? months[new Date(inputProps?.value).getMonth()] +
                  " " +
                  new Date(inputProps?.value).getDate() +
                  "th, " +
                  new Date(inputProps?.value).getFullYear()
                : months[new Date().getMonth()] +
                  " " +
                  new Date().getDate() +
                  "th, " +
                  new Date().getFullYear()
            }
          />
          <KeyboardArrowDownIcon className="!mr-2" />
        </>
      </Box>
    </Box>
  );
};
