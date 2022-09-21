import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { tabOptions } from "../../../helpers/Account";
import Box from "@mui/material/Box";
type Props = {
  value: string;
  setValue: (value) => void;
  handleChange: (event, newValue) => void;
};

export const CustomTabs = (props: Props) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={props.value}
        onChange={props.handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="basic tabs example"
        variant="scrollable"
      >
        {tabOptions.map((item) => {
          return (
            <Tab
              key={item.id}
              value={item.value}
              label={item.label}
              classes={{ root: "text-base lg:!text-2xl !capitalize !p-2 lg:!mx-12" }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};
