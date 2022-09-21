import { Button, CircularProgress } from "@mui/material";
import Text from "../../Text";

interface Props {
  heading: string;
  subHead: string;
  btnLabel?: string;
  onClick: () => void;
  closeTooltip: () => void;
  removeButtonIsLoading: boolean;
}

const RemoveItemsTooltipUI = ({
  heading,
  subHead,
  btnLabel = "Remove",
  onClick,
  closeTooltip,
  removeButtonIsLoading,
}: Props) => {
  return (
    <div className="pl-4 text-black">
      <Text className="text-xl font-bold">{heading}</Text>
      <Text className="text-sm font-bold">{subHead}</Text>
      <div className="flex w-full my-3 space-x-6 ">
        <Button
          onClick={(event) => {
            event.preventDefault();
            onClick();
          }}
          variant="contained"
          className="w-1/2 !normal-case"
        >
          
          {removeButtonIsLoading ? (
              <CircularProgress className="!text-white" size={25} />
            ) : (
              btnLabel
            )}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={closeTooltip}
          className="w-1/2 !normal-case"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default RemoveItemsTooltipUI;
