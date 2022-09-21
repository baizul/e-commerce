import { Avatar, Chip } from "@mui/material";
import React from "react";

interface Props {
  name: string;
  image?: string;
}

const CustomChip = ({ name, image }: Props) => {
  return (
    <Chip
      avatar={<Avatar alt="Natacha" src={image || ""} />}
      classes={{
        deleteIcon: "!fill-black !text-black",
        root: "!rounded-md !bg-black !font-bold  !text-sm !bg-opacity-10 !py-5",
      }}
      label={name}
      onDelete={() => {}}
    />
  );
};

export default CustomChip;
