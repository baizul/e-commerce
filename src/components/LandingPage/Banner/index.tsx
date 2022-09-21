import { Button } from "@mui/material";
import Text from "../../shared/Text";
import { useState } from "react";

type Props = {
  setFinderModalOpen: (finderModalOpen: boolean) => void;
  setJoinModalOpen: (JoinModalOpen: string) => void;
};

const Banner = ({ setFinderModalOpen, setJoinModalOpen }: Props) => {
  return (
    <div className="px-2 py-10 bg-no-repeat bg-cover lg:pr-32 lg:pb-40 lg:pt-24 bg-heroImage">
      <div className="px-5 py-10 ml-0 mr-0 bg-black rounded-md lg:ml-64 md:rounded-2xl bg-opacity-70 backdrop-blur-sm lg:mr-96 lg:px-11">
        <Text className="text-2xl xsm:text-4xl lg:!text-4.5xl lg:!leading-14 font-bold">
        Lorem ipsum dolor sit amet
        </Text>

        <Text className="pt-3 text-base xsm:text-lg md:!text-xl font-light md:font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>

        <div className="flex flex-col items-center w-full mt-5 space-x-0 space-y-4 xsm:flex-row xsm:items-start lg:w-3/4 xsm:mt-9 xsm:space-y-0 xsm:space-x-3">
          <Button
            variant="contained"
            color="primary"
            className="!capitalize h-8 xsm:h-10 w-3/4 xsm:w-1/2 !text-sm xsm:!text-base lg:!font-light !font-mulish"
            onClick={() => setFinderModalOpen(true)}
          >
            Find
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="!capitalize h-10 !w-1/2 !text-sm !font-medium !tracking-wide !font-mulish"
          >
            Join
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
