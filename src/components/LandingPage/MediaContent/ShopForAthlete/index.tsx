import { Button } from "@mui/material";
import Text from "../../../shared/Text";

const ShopForAthlete = ({
  setFinderModalOpen,
}: {
  setFinderModalOpen: (param: boolean) => void;
}) => {
  return (
    <div className="py-3 pl-3 mt-5 xl:p-8">
      <Text className="text-3xl lg:text-4.5xl font-extrabold xl:!leading-14">
        Lorem ipsum dolor sit amet
      </Text>

      <Text className="mt-2 lg:mt-3.5 text-base lg:text-lg font-light leading-5">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <Button
        variant="contained"
        color="primary"
        className="!h-10 !text-base !font-light !mt-7 !font-mulish"
        onClick={() => setFinderModalOpen(true)}
      >
        Find
      </Button>
    </div>
  );
};
export default ShopForAthlete;
