import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

interface Props {
  value: string;
  setValue: (newValue: string) => void;
  tabOptions: {
    id: string;
    value: string;
    label: string;
    disabled?: boolean;
  }[];
}

export const CustomTabs = ({ value, setValue, tabOptions }: Props) => {
  const isPhone = useMediaQuery("(max-width: 1000px)");
  const tabWidth =
    tabOptions.length > 4 ? "auto" : 87 / tabOptions.length + "vw";

  return (
    <Box
      sx={{ borderBottom: 1, borderColor: "divider" }}
      className="!w-[90%] md:!w-auto lg:!w-auto"
    >
      <Tabs
        value={value}
        textColor="secondary"
        indicatorColor="primary"
        aria-label="basic tabs example"
        variant="scrollable"
      >
        {tabOptions.map(({ id, value, label, disabled }) => (
          <Tab
            key={id}
            value={value}
            disabled={disabled}
            label={label}
            sx={{ width: isPhone ? "auto" : tabWidth }}
            onClick={() => setValue(value)}
            classes={{
              root: `text-base lg:!text-xl xl:!text-2xl !font-bold !capitalize !px-2 lg:!px-4`,
            }}
            className="!font-mulish !tracking-normal"
          />
        ))}
        ;
      </Tabs>
    </Box>
  );
};
