import Modal, { ModalProps } from "@mui/material/Modal";
import { Box } from "@mui/system";
import classNames from "classnames";

interface Props extends Omit<ModalProps, "children"> {
  open: boolean;
  onClose?: (param: boolean) => void;
  children: JSX.Element | JSX.Element[];
  classToOverride?: string;
}

const CustomModal = ({
  open,
  onClose,
  children,
  classToOverride,
  ...rest
}: Props) => {
  return (
    <Modal
      open={open}
      onClose={() => onClose(!open)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="!flex !justify-center !items-center !overflow-y-auto !outline-none"
      {...rest}
    >
      <Box
        className={classNames(
          "relative w-11/12 xl:w-6.25/12 sm:w-4/5 mb-8 mx-auto rounded bg-white outline-none",
          classToOverride
        )}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
