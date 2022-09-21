import { Button, CircularProgress } from "@mui/material";
import Text from "../../../shared/Text";

type Props = {
  isLoading?: boolean;
  handleDelete?: () => void;
  setDeleteAccount?: (deleteAccount: boolean) => void;
};

export const TooltipText = ({
  isLoading,
  handleDelete,
  setDeleteAccount,
}: Props) => {
  return (
    <div className="flex flex-col p-3 rounded border-quickSilver">
      <Text className="pl-1 text-xl font-bold text-nero">Delete Account</Text>
      <Text className="pl-1 text-sm text-nero">
        Are you sure you want to delete your account?
      </Text>
      <div className="flex flex-row mt-6 justify-evenly">
        <Button
          variant="contained"
          classes={{
            root: `!h-10 w-32 lg:w-40 !text-base !capitalize !mr-1`,
          }}
          onClick={() => handleDelete()}
        >
          {isLoading ? (
            <CircularProgress className="!text-white !p-1" />
          ) : (
            "Delete"
          )}
        </Button>
        <Button
          variant="contained"
          classes={{
            root: `${"!bg-black"} w-32 lg:w-40 !h-10  !text-base !capitalize ml-1`,
          }}
          onClick={() => setDeleteAccount(false)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
