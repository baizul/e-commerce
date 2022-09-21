import { Checkbox, FormControlLabel, Radio } from "@mui/material";
import Text from "../../../shared/Text";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CustomTooltip from "../../../shared/CustomTooltip";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import RemoveItemsTooltipUI from "../../../shared/CustomTooltip/RemoveItemsTooltipUI";
import classNames from "classnames";

interface Props {
  address: {
    id?: string;
    name?: string;
    email?: string;
    address?: string;
    apartment?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    defaultAddress?: boolean;
    active: boolean;
  };
  editAddressHandle: (val: string) => void;
  removeAddressHandle: (val: string) => void;
  defaultAddressHandle: (val: string) => void;
  activeAddressHandle: (val: string) => void;
}

const ViewAddress = ({ address, editAddressHandle, removeAddressHandle, defaultAddressHandle, activeAddressHandle}: Props) => {
  const [remove, setRemove] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      <CustomTooltip
        placement={isMobile ? "right-start" : "top"}
        arrowClassToOverride={"!-top-16"}
        open={remove}
        isFullArrow={false}
        title={
          <RemoveItemsTooltipUI
            heading="Remove Shipping Address"
            subHead="Are you sure you want to remove this shipping address?"
            closeTooltip={() => setRemove(false)}
            onClick={() => setRemove(false)}
            removeButtonIsLoading={false}
          />
        }
      >
        <div
          className={classNames(
            "border  rounded px-0 py-4 lg:w-3/5",
            remove ? "border-crimson" : "border-matterhorn-2 border-opacity-50"
          )}
        >
          <div className="flex items-center">
            <div className="px-3 lg:px-5">
              <input
                type="radio"
                checked={address.active}
                onChange={() => {activeAddressHandle(address.id)}}
                name={address.id}
                color="primary"
                className={classNames(address.active ? "accent-crimson" : "accent-darkGray", "h-[11px] w-[11px] lg:h-[1.875rem] lg:w-[1.875rem]")
                }
              />
            </div>
            <div
              className={`flex-1 w-36 text-xs font-medium lg:text-2xl ${
                address.active ? "text-nero" : "text-darkGray"
              } `}
            >
              <Text>{address.name}</Text>
              <Text className="flex flex-wrap">{`${address.apartment} ${address.address}`}</Text>
              <Text className="flex flex-wrap">{`${address.city} ${address.state} ${address.zipCode}`}</Text>
            </div>
            <div className=" border-whiteSmoke h-20 border ml-4 lg:h-[9.56rem]"></div>
            <div
              className={`flex flex-wrap space-x-1 text-xs font-bold mx-4 lg:text-[1.375rem] ${
                address.active ? "text-nero" : "text-darkGray"
              }`}
            >
              <div onClick={() => editAddressHandle(address.id)}>
                <Text className="cursor-pointer">Edit</Text>
              </div>
              <div>
                <Text className="align-baseline">|</Text>
              </div>
              <div onClick={() => setRemove(!remove)}>
                <Text
                  className={`cursor-pointer ${remove ? "text-crimson" : ""}`}
                >
                  Remove
                </Text>
              </div>
            </div>
          </div>
        </div>
      </CustomTooltip>
      <FormControlLabel
        label={
          <Text
            className={`!text-xs !font-mulish !font-medium ${
              address.defaultAddress ? "!text-black" : "!text-darkGray"
            }`}
          >
            Set address as default
          </Text>
        }
        control={
          <Checkbox
            checkedIcon={
              <CheckBoxIcon className="!w-[13px] !h-[13px] text-black" />
            }
            icon={
              <CheckBoxOutlineBlankIcon className="!w-[13px] !h-[13px] !text-darkGray" />
            }
            id={address.id}
            checked={address.defaultAddress}
            onChange={() => {defaultAddressHandle(address.id)}}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
      />
    </>
  );
};

export default ViewAddress;
