import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IReducer } from "../../../redux/Reducers";
import { SET_TOAST_ERROR } from "../../../redux/Actions/common";

const ErrorBox = () => {
  const open = useSelector((state: IReducer) => state.toast_error.error);
  const message = useSelector((state: IReducer) => state.toast_error.message);
  const dispatch = useDispatch();
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(SET_TOAST_ERROR({ error: false, message: "" }));
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert onClose={handleClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorBox;
