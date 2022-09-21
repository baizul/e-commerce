import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import { Resources } from "../../../../config/Resources";
import Text from "../../../shared/Text";

const MissingCard = () => {
  const [JoinModalOpen, setJoinModalOpen] = useState("");

  return (
    <div className="flex flex-col items-center w-full p-4 bg-white border rounded-md xsm:flex-row drop-shadow-md border-whiteSmoke">
      <Avatar
        classes={{ root: " !w-16 md:!w-24 md:!h-24 !h-16" }}
        src={Resources.images.ProductDetails.NotEstateProfile}
        alt="NotEstateProfile"
      />
      <div className="w-full ml-auto xsm:w-3/4">
        <h4 className="text-base font-extrabold text-nero">
          Are you missing from here?
        </h4>
        <Text className="text-xs text-nero ">
          If you held this jersey that represents this estate, Join Athletic
          Estate!
        </Text>
        <Button
          className="!mt-4"
          variant="contained"
          color={"primary"}
          onClick={() => setJoinModalOpen("joinModel")}
        >
          Join Athletic Estate
        </Button>
      </div>
    </div>
  );
};

export default MissingCard;
