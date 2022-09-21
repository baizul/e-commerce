import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineClose } from "react-icons/ai";
import Text from "../../../shared/Text";

interface Props {
    handleClose : ()=> void
}

const SuccessModal = ({handleClose} : Props) => {
  return (
    <Box className="absolute w-11/12 px-4 py-4 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md lg:w-9/12 top-1/2 left-1/2 outline-0">
      <div className="flex w-full">
        <Button
          onClick={handleClose}
          variant="text"
          classes={{
            root: "!text-black !text-lg !min-w-fit !ml-auto !p-0 ",
          }}
        >
          <AiOutlineClose />
        </Button>
      </div>
      <div className="px-2 pt-8 pb-32 lg:py-16 lg:px-6">
        <div className="flex justify-center w-full">
          <CheckCircleOutlineRoundedIcon className="!text-5.5xl lg:!text-9xl  text-chateauGreen" />
        </div>
        <div className="w-full mt-4 text-center">
          <h3 className="text-xl font-extrabold lg:text-4.5xl">
            Thank you for contacting us!
          </h3>
          <Text className="mt-4 text-base lg:text-xl">
            Your message has been sent succesfully!
          </Text>
          <Text className="mt-4 text-base lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
      </div>
    </Box>
  );
};

export default SuccessModal;
