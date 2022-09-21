import { Button, Modal, TextareaAutosize } from "@mui/material";
import classNames from "classnames";
import { useFormik } from "formik";
import { useState } from "react";
import {
  ContactInitialvalues,
  ContactUsValidationValues,
} from "../../../helpers/ContactUs";
import RedditTextField from "../../shared/redditInput";
import Text from "../../shared/Text";
import SuccessModal from "./SuccessModal";

const ContactUsForm = () => {
  const [SuccessModalToggler, setSuccessModalToggler] = useState(false);
  const handleClose = () => {
    setSuccessModalToggler(false);
  };
  const handleOpen = () => {
    setSuccessModalToggler(true);
  };
  const formik = useFormik({
    initialValues: ContactInitialvalues,
    onSubmit: (values) => {
      handleOpen();
    },
    validationSchema: ContactUsValidationValues,
  });
  return (
    <>
      <Modal
        open={SuccessModalToggler}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SuccessModal handleClose={handleClose} />
      </Modal>
      <div className="p-2 pt-8 pb-8 lg:p-8">
        <Text className="text-2xl font-extrabold lg:text-4xl">Send us a message</Text>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            formik.handleSubmit();
            formik.resetForm();
          }}
          className="flex flex-col mt-8 space-y-3"
        >
          <RedditTextField
            label="Full name"
            id="fullName"
            name="fullName"
            size="small"
            className=""
            variant="filled"
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            error={formik.errors.fullName && formik.touched.fullName}
            onChange={formik.handleChange}
          />
          {formik.touched.fullName && (
            <span className="m-1 text-xs text-crimson">
              {formik.errors.fullName}
            </span>
          )}
          <RedditTextField
            label="Email address"
            id="emailAddress"
            name="emailAddress"
            onBlur={formik.handleBlur}
            value={formik.values.emailAddress}
            error={formik.errors.emailAddress && formik.touched.emailAddress}
            onChange={formik.handleChange}
            variant="filled"
          />
          {formik.touched.emailAddress && (
            <span className="m-1 text-xs text-crimson">
              {formik.errors.emailAddress}
            </span>
          )}
          <RedditTextField
            hiddenLabel
            placeholder="Subject"
            variant="outlined"
            id="subject"
            name="subject"
            inputProps={{
              className: "!h-10 !py-0 !text-[14px] !pt-2 !text-nero !bg-white ",
            }}
            InputProps={{
              classes: {
                input: classNames("!pt-0 !text-xl"),
                notchedOutline: classNames(
                  formik.errors.subject && formik.touched.subject
                    ? "!border-crimson"
                    : "!border-whiteSmoke",
                  "!border"
                ),
              },
            }}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            error={formik.errors.subject && formik.touched.subject}
            onChange={formik.handleChange}
          />
          {formik.touched.subject && (
            <span className="m-1 text-xs text-crimson">
              {formik.errors.subject}
            </span>
          )}
          <textarea
            id="description"
            onBlur={formik.handleBlur}
            value={formik.values.description}
            onChange={formik.handleChange}
            name="description"
            rows={10}
            placeholder={"How can we help you?..."}
            className={classNames(
              formik.errors.description && formik.touched.description
                ? "border-crimson"
                : "border-whiteSmoke",
              "!mt-4 resize-none w-full placeholder-italic outline-none p-4 border rounded"
            )}
          />
          {formik.touched.description && (
            <span className="m-1 text-xs text-crimson">
              {formik.errors.description}
            </span>
          )}
          <div className="flex items-center justify-center w-full mt-8 space-x-4 ">
            <Button className="!text-davyGrey w-48 !normal-case">Cancel</Button>
            <Button
              type="submit"
              disabled={
                formik.values.fullName &&
                formik.values.description &&
                formik.values.subject &&
                formik.values.emailAddress
                  ? false
                  : true
              }
              className="!normal-case w-48"
              variant="contained"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUsForm;
