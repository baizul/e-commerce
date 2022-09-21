import { Avatar, Button } from "@mui/material";
import Text from "../../../shared/Text";

type Props = {
  AthleticEstateDetails: any;
};

const AthleticEstateData = ({ AthleticEstateDetails }: Props) => {
  return (
    <div className="px-0 py-3 border-0 rounded-md shadow-none sm:px-6 md:bg-white md:border bg-none md:drop-shadow-md border-whiteSmoke">
      <div className="w-full overflow-x-auto no-scrollbar">
        <div className="grid grid-cols-5 grid-rows-2 mb-4 gap-y-6 xl:w-full w-147">
          {[...Array(10)].map((items, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center w-full lg:w-fit"
              >
                <Avatar
                  src={AthleticEstateDetails.profile}
                  classes={{ root: "!w-22.5 !h-22.5" }}
                />
                <div className="text-center text-tiny">
                  <Text>{AthleticEstateDetails.name}</Text>
                  <Text>{AthleticEstateDetails.TimeOfPlay}</Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Button
        variant="text"
        classes={{ root: "w-full !normal-case !mt-4 !text-black" }}
      >
        Show more
      </Button>
    </div>
  );
};

export default AthleticEstateData;
