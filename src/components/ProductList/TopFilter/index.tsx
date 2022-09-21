import { Autocomplete, TextField } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import Text from "../../shared/Text";

interface Props {
  setFilter: (val: string) => void;
  filter: string;
}

const TopFilter = ({ filter, setFilter }: Props) => {
  const FilterData = [
    { value: "ascend", label: "A - Z" },
    { value: "desc", label: "Z - A" },
  ];
  return (
    <div className="flex justify-between pt-5">
      <Link to="/" className="flex items-center space-x-1 text-matterHorn">
        <BiArrowBack />
        <Text>Back</Text>
      </Link>
      <div className="w-1/2 lg:w-1/4">
        <Autocomplete
          classes={{
            root: "border-none",
            inputRoot: "bg-whiteSmoke",
            input: "!h-2",
          }}
          options={FilterData}
          popupIcon={<FiChevronDown />}
          ListboxProps={{ className: "bg-whiteSmoke" }}
          renderInput={(params) => (
            <TextField
              variant="outlined"
              {...params}
              InputProps={{
                ...params.InputProps,
                classes: { notchedOutline: "!border-none" },
              }}
              placeholder="Sort"
            />
          )}
        />
      </div>
    </div>
  );
};

export default TopFilter;
