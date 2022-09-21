import { Backdrop, CircularProgress, BackdropProps } from "@mui/material";
import React from "react";

interface Props extends BackdropProps {
  backDropIsOpen?: boolean;
}

const CustomBackDrop = ({ backDropIsOpen, ...rest }: Props) => {
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backDropIsOpen}
        {...rest}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default CustomBackDrop;
