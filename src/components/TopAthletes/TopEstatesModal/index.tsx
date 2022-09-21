import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Button } from "@mui/material";
import { topAthletes } from "../../../mockData/TopAthletes/index";
import { BsDot } from "react-icons/bs";

type Props = {
  modalOpen: boolean;
  handleModal: (data: boolean) => void;
};

const TopEstatesModal = ({ modalOpen, handleModal }: Props) => {
  return (
    <div className="relative top-[6vh] xl:top-[3vh] md:top-[4vh] mx-auto rounded bg-white font-mulish h-[90%]  md:h-[55%] lg:h-[92%] lg:w-[80%] md:w-[85%] w-10/12 xl:w-8/12 lg:mx-auto overflow-scroll  secondary-scroll ">
      <div className="">
        <div
          className="w-full pt-3 pr-3 text-xs text-right cursor-pointer"
          onClick={() => handleModal(false)}
        >
          <CloseIcon />
        </div>

        {/* Top part  */}

        <div className="block md:flex">
          <div className="-skew-x-[20deg] md:w-20 md:h-16 lg:w-24 lg:h-20 w-12 h-14 bg-crimson ml-8 justify-center flex">
            <p className="mx-auto pt-3 md:pt-3 lg:pt-6 md:text-4xl text-2xl skew-x-[20deg] font-extrabold text-center text-white ">
              17
            </p>
          </div>
          <div className="flex flex-col justify-center w-full mt-3 text-center md:mt-0 ">
            <div className="text-3xl font-extrabold ms:text-4xl">
              Athletic Estate
            </div>
            <div className="flex justify-center text-sm font-medium md:text-2xl">
              #17 <BsDot className="mt-1" /> Lorem <BsDot className="mt-1" />{" "}
              Lorem ipsum dolor
            </div>
          </div>
        </div>

        {/* Middle part  */}

        <div className="grid w-11/12 grid-cols-3 mx-auto my-8 md:w-10/12 md:grid-cols-5 lg:w-9/12">
          {topAthletes.map((items, index) => {
            return (
              <div key={index} className="flex flex-col items-center my-1">
                <Avatar src={items.profile} classes={{ root: "!w-16 !h-16" }} />
                <div className="text-center text-1xs">
                  <p>{items.name}</p>
                  <p>{items.lastName}</p>
                  <p>{items.TimeOfPlay}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Joining Banner  */}

        <div className="w-5/6 p-4 mx-auto my-4 bg-white border rounded-md lg:items-center lg:grid lg:grid-cols-2 border-whiteSmoke drop-shadow-md ">
          <div className="md:w-[420px] w-auto h-auto">
            <h4 className="text-sm font-extrabold md:text-2xl text-nero">
            Lorem ipsum dolor sit amet, consectetur?
            </h4>
            <p className="my-2 text-xs font-medium text-nero">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Button
              className="!mt-4 md:float-right ml-auto lg:ml-0"
              variant="contained"
              color={"primary"}
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopEstatesModal;
