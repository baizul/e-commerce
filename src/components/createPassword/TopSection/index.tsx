import { IconButton } from "@mui/material";
import Stepper from "../../shared/Stepper";
import CloseIcon from "@mui/icons-material/Close";
import Text from "../../shared/Text";

interface Props {
  currentStep: number;
  setJoinClubModalOpen?: (data: string) => void;
}

const TopSection = ({ currentStep, setJoinClubModalOpen }: Props) => {
  const steps = ["Create Password", "Banking", "Image & Bio", "Revenue"];
  return (
    <div className="relative flex items-center bg-no-repeat bg-cover lg:!h-[15.6rem] h-[12.2rem] bg-accountSetupImage">
      <div className="absolute lg:!-top-8 lg:!right-5 !-top-5 !right-3">
        <IconButton
          aria-label="close"
          sx={{
            color: "white",
          }}
          className="cursor-pointer color-white top-10"
          onClick={() => setJoinClubModalOpen("")}
        >
          <CloseIcon sx={{ fontSize: { md: 40 } }} />
        </IconButton>
      </div>
      <div className="m-auto pt-4 pb-12 !bg-black !bg-opacity-70 rounded-2xl  lg:!w-[73%] w-[93%] sm:!h-[75%]">
        <Text className="mt-3 mb-4 text-xl font-bold text-center text-white lg:!pb-3 lg:!text-3xl">
          Account Setup
        </Text>
        <div className="w-[80%] m-auto">
          <Stepper steps={steps} currentStep={currentStep} show={true} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
