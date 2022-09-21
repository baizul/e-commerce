import { Avatar, Badge, Button } from "@mui/material";
import { useState } from "react";
import { TbPencil } from "react-icons/tb";
import className from "classnames";
import Text from "../../../shared/Text";
import classNames from "classnames";

type Props = {
  readonly: boolean;
  formik: any;
  fileChangedHandle: () => void;
  userData: object;
  image: File | null;
  setImage: (image) => void;
  isAeMembership?: boolean;
};

export const ImageUpload = ({
  readOnly,
  formik,
  fileChangedHandle,
  userData,
  image,
  setImage,
  isAeMemberShip,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col  items-center w-1/4 lg:self-start",
        isAeMemberShip ? "py-0" : "py-16"
      )}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <Button
            variant="text"
            component="label"
            className="hover:bg-black"
            disabled={readOnly}
          >
            <input
              type="file"
              accept="image/png, image/gif, image/jpeg"
              className="hidden"
              onChange={fileChangedHandle}
            />
            <TbPencil className="w-8 h-8 lg:w-14 lg:h-14 p-2.5 text-white rounded-full bg-crimson cursor-pointer" />
          </Button>
        }
      >
        <Avatar
          // alt={}
          className="!w-32 !h-32 lg:!w-64 lg:!h-64"
          src={
            image
              ? URL.createObjectURL(image)
              : userData?.profile_image_url
              ? userData?.profile_image_url
              : "https://"
          }
        >
          <Text className="font-medium text-5.5xl lg:text-8xl text-matterhorn-2">
            {formik.values?.firstName?.charAt(0)}
          </Text>
        </Avatar>
      </Badge>
      <Text className="mt-5 text-xs font-extrabold text-center w-72 lg:text-2xl lg:font-extrabold text-nero">
        {`${userData?.first_name || ""} ${userData?.last_name || ""}`}
      </Text>
    </div>
  );
};
