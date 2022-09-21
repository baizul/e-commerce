import { Autocomplete, Paper, TextField } from "@mui/material";
import classNames from "classnames";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  options?: { value: string; label: string }[];
  setValue?: (value: string) => void;
  placeholder?: string;
  classToOverride?: string;
  textOverride?: string;
  value?: string;
  disableClearable?: boolean;
  paperBackground?: string;
}

const AutoComplete = ({
  options,
  setValue,
  placeholder,
  classToOverride,
  textOverride,
  value,
  disableClearable = true,
  paperBackground = "bg-eclipse-1 text-white",
}: Props) => {
  return (
    <Autocomplete
      classes={{
        root: "bg-eclipse-1 border-none rounded-[3px] outline-none",
        clearIndicator: "!text-white",
        input: classNames("!p-0", textOverride ? textOverride : "!text-white"),
      }}
      value={value}
      className={classToOverride}
      options={options}
      ListboxProps={{
        className: classNames(paperBackground),
      }}
      PaperComponent={(props) => (
        <Paper
          classes={{
            root: classNames("mt-2 !rounded-[3px]", paperBackground),
          }}
          {...props}
          elevation={4}
        />
      )}
      fullWidth
      disableClearable={disableClearable}
      popupIcon={
        <BsChevronDown
          className={classNames(
            "text-xs",
            textOverride ? textOverride : "!text-white"
          )}
        />
      }
      onChange={(_, option: any) => setValue(option ? option.value : "")}
      renderInput={(params) => (
        <TextField
          variant="outlined"
          {...params}
          InputProps={{
            ...params.InputProps,
            classes: { notchedOutline: "!border-none" },
          }}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default AutoComplete;
