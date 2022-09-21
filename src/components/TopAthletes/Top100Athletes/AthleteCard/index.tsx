import Button from "@mui/material/Button";
import Text from "../../../shared/Text";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import classNames from "classnames";
import { Avatar, Badge } from "@mui/material";
interface Props {
  id: string;
  index: number;
  athlete_image: string;
  name: string;
  no: string;
  college: string;
  sport: string;
  year: string;
  isTotalRevenue: boolean;
  totalSold?: string;
  totalRevenue?: string;
}
const AthleteCard = (props: Props) => {
  return (
    <div
      className={classNames(
        "flex flex-row w-[100%]  mb-[0.6rem]   md:!justify-between  shadow-product ",
        props.isTotalRevenue
          ? "lg:h-16 bg-aliceBlue-1 h-32"
          : "h-32 lg:h-[8.68rem]  md:h-[10rem] bg-white hover:bg-whiteSmoke"
      )}
    >
      <div className="flex flex-row">
        <div
          className={classNames(
            "ml-[1.3rem]  lg:text-left  lg:my-auto",
            props.isTotalRevenue ? "mt-6" : "mt-[1rem]"
          )}
        >
          <p
            className={classNames(
              " md:text-[1rem] flex items-center justify-center  font-extrabold text-white rounded-full bg-eclipse-1 lg:ml-2",
              props.isTotalRevenue
                ? "w-6 h-6 !p-1 text-xxs mr-2 lg:mr-5"
                : " h-[1.75rem] w-[1.75rem] md:h-[2.25rem] md:w-[2.25rem] text-xs mr-5 "
            )}
          >
            {props.index + 1}
          </p>
        </div>
        <div className="flex flex-col justify-center ">
          <img
            src={props.athlete_image}
            alt="Athlete Image"
            className={classNames(
              !props.isTotalRevenue
                ? "h-16 lg:h-28 md:h-24 "
                : "w-12 h-12 lg:h-8 lg:w-8 rounded-none hidden md:block lg:block"
            )}
          />
          {!props.isTotalRevenue && (
            <Text className=" text-nero text-[1.10rem] font-extrabold ml-3 lg:hidden md:ml-7 ">
              #17
            </Text>
          )}
        </div>
      </div>
      {props.isTotalRevenue && (
        <div className="!mt-6">
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            badgeContent={
              <div className="bg-crimson relative lg:mr-[6%] left-[0.4rem] bottom-[0.21rem] mt-[2%] mr-[7%] md:mr-[3.1rem] h-3  w-3 lg:my-auto  md:h-[3.3rem] md:w-[2.8rem] skew-x-[-20deg] lg:skew-x-[-15deg] flex justify-center items-center">
                <Text className="text-white skew-x-[20deg] lg:skew-x-[15deg] font-mulish font-extrabold text-xxsm ">
                  17
                </Text>
              </div>
            }
            className="lg:!hidden md:!hidden"
          >
            <Avatar
              alt="Travis Howard"
              src={props.athlete_image}
              className="!w-12 !h-12 !lg:h-8 !lg:w-8 !mb-3 !rounded-none  lg:!hidden"
            />
          </Badge>
        </div>
      )}
      <div className="flex flex-col justify-center ml-2 lg:flex-row lg:w-[60%]">
        <div
          className={classNames(
            props.isTotalRevenue
              ? " lg:mt-3 lg:ml-4 md:ml-28 lg:w-[35%] md:relative md:right-[2rem]"
              : "lg:mt-12 lg:ml-4 md:ml-28 lg:w-[35%] md:relative md:right-[2rem]"
          )}
        >
          <Text
            className={classNames(
              props.isTotalRevenue
                ? "text-xs xlg:ml-2 lg:text-sm font-semibold text-blackPearl-1"
                : " text-nero text-[1.10rem] font-extrabold"
            )}
          >
            {props.name}
          </Text>
          <Text
            className={classNames(
              props.isTotalRevenue
                ? "hidden xlg:ml-2 lg:block text-xxs text-matterhorn-2 font-bold"
                : " text-nero text-[1.10rem] font-extrabold hidden lg:inline-block  "
            )}
          >
            #17
          </Text>
        </div>
        <div className="lg:flex lg:flex-col md:relative md:right-[2rem] lg:justify-center lg:ml-10 md:ml-28 lg:w-[50%] whitespace-nowrap">
          <Text
            className={classNames(
              props.isTotalRevenue
                ? "text-blackPearl-1 text-sm font-semibold"
                : "text-sm font-extrabold text-nero lg:uppercase"
            )}
          >
            {props.college}
          </Text>
          <span className="flex items-center ">
            <Text
              className={classNames(
                "font-medium text-eclipse",
                props.isTotalRevenue ? "text-xxs" : "text-[0.875rem]"
              )}
            >
              {props.sport}
            </Text>
            <Text className="h-[0.25rem] w-[0.25rem] ml-[0.25rem] mr-[0.25rem] bg-eclipse rounded-full ">
              .
            </Text>
            <Text
              className={classNames(
                "text-eclipse font-medium ",
                props.isTotalRevenue ? "text-xxs" : "text-[0.875rem]"
              )}
            >
              {props.year}
            </Text>
            <Text
              className={classNames(
                "font-bold ml-1  ",
                props.isTotalRevenue ? "text-xxs" : "text-[0.875rem]"
              )}
            >
              RB
            </Text>
          </span>
        </div>
        {!props.isTotalRevenue ? (
          <Text className="!capitalize text-base Text-0 lg:w-44 w-36 text-crimson text-semibold md:hidden ">
            Shop
          </Text>
        ) : (
          <div
            className={classNames(
              "relative flex w-64 top-4 lg:hidden md:hidden right-16"
            )}
          >
            <div className="flex flex-col">
              <Text className="text-xs font-extrabold lg:font-semibold lg:text-sm text-blackPearl-1">
                <>
                  Total Sold: {props.totalSold} | Total Revenue:
                  {props.totalRevenue}
                </>
              </Text>
              <Text className="font-medium text-eclipse text-xxsm lg:text-xxs">
                Jersey Revenue Sales
              </Text>
            </div>
            <MoreVertIcon className="!hidden ml-16 !lg:inline text-blackPearl-1" />
          </div>
        )}
      </div>
      <div
        className={classNames(
          "hidden  md:flex md:flex-col md:justify-center sm:inline-block items-center  ",
          props.isTotalRevenue ? "w-1/3" : "w-[25%] "
        )}
      >
        {props.isTotalRevenue ? (
          <div className="flex">
            <div className="flex flex-col">
              <Text className="text-xs font-semibold xlg:text-xxs lg:text-sm text-blackPearl-1">
                <>
                  Total Sold: {props.totalSold} | Total Revenue:
                  {props.totalRevenue}
                </>
              </Text>
              <Text className="font-medium text-eclipse text-xxsm lg:text-xxs">
                Jersey Revenue Sales
              </Text>
            </div>
            <MoreVertIcon className="ml-16 text-blackPearl-1" />
          </div>
        ) : (
          <Button
            variant="contained"
            className="!capitalize  text-base !font-light Text-0 lg:w-40 lg:h-8 "
          >
            Shop
          </Button>
        )}
      </div>
    </div>
  );
};
export default AthleteCard;