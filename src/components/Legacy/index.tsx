import { Button } from "@mui/material";
import Text from "../shared/Text";

const Legacy = ({
  setJoinModalOpen,
}: {
  setJoinModalOpen: (param: string) => void;
}) => {
  return (
    <div className="w-full px-4 pt-20 bg-no-repeat bg-cover bg-legacyMobile sm:bg-legacy h-auto lg:h-[500px] font-mulish md:px-36 py-16 lg:py-3 flex">
      <div className="flex flex-col items-center justify-center px-8 py-10 space-x-3 bg-black rounded-md lg:flex-row h-5/6 bg-opacity-70 lg:h-auto lg:m-auto">
        <div className="flex flex-col w-full space-y-6 text-white">
          <Text className="text-3xl font-bold leading-8 lg:text-[45px]">
          Lorem ipsum dolor sit amet
          </Text>

          <Text className="text-base font-light leading-6 lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>

        <Button
          variant="contained"
          className="w-[55%] !capitalize md:w-1/3 lg:w-1/4 text-base p-0 !font-light"
        >
          Join
        </Button>
      </div>
    </div>
  );
};
export default Legacy;
