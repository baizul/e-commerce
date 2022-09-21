import { Chip } from "@mui/material";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
  filterCategory?: any;
  options: any;
  RemoveFilter: (category: String, id: String) => void;
  AddFilteration: (category: String, id: String) => void;
  Filters: any;
  classToOverride?: string;
};

const InputFieldFilter = ({
  filterCategory,
  options,
  AddFilteration,
  Filters,
  classToOverride,
  RemoveFilter,
}: Props) => {
  const [FieldData, setFieldData] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      AddFilteration(filterCategory, FieldData);
      setFieldData("")
    }
  };
  return (
    <div className={`flex flex-col mt-4 space-y-4`}>
      <input
        value={FieldData}
        onChange={(e) => setFieldData(e.target.value)}
        onKeyPress={handleKeyPress}
        className="px-2 py-2 mx-2 mt-3 text-sm rounded outline-none bg-whiteSmoke w-fit"
        placeholder={options[0].Label}
      />
      {Filters[filterCategory]?.map((data: any) => {
        return (
          <div className="mx-2" key={data.id}>
            <Chip
              label={data}
              className="mx-2 w-fit"
              classes={{
                root: `!py-5 !pr-2 !text-lg ${"!bg-eclipse-1 !flex !fw-bold !justify-between !space-x-3 !text-white   !font-semibold !rounded"}`,
              }}
              deleteIcon={
                <AiOutlineClose className="ml-8" size={18} color="white" />
              }
              onDelete={() => RemoveFilter(filterCategory, data)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InputFieldFilter;
