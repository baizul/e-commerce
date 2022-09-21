import { Chip } from "@mui/material";
import { useEffect} from "react";
import { AiOutlineClose } from "react-icons/ai";
type Props = {
  filterCategory: any;
  AddFilteration: (category: String, id: String) => void;
  RemoveFilter: (category: String, id: String) => void;
  options: any;
  Filters: any;
};

const ListSelect = ({
  AddFilteration,
  filterCategory,
  RemoveFilter,
  options,
  Filters,
}: Props) => {
  const handleSelect = (id) => {
    AddFilteration(filterCategory, id);
  };
  return (
    <div className={`flex flex-col mt-4 space-y-4 ${"text-white"}`}>
      {options.map((data: any) => {
        return (
          <div key={data.id}>
            <Chip
              onClick={() => {
                handleSelect(data.id);
              }}
              label={data.Label}
              className="mx-2 w-fit"
              classes={{
                root: `!py-5 !pr-2  !text-lg ${
                  Filters[filterCategory]?.includes(data.id)
                    ? "!bg-eclipse-1 !flex !fw-bold !justify-between !space-x-3 !text-white   !font-semibold !rounded"
                    : "!bg-transparent !text-matterHorn "
                }`,
              }}
              deleteIcon={
                Filters[filterCategory]?.includes(data.id) ? (
                  <AiOutlineClose className="ml-8" size={18} color="white" />
                ) : (
                  <></>
                )
              }
              onDelete={() => RemoveFilter(filterCategory , data.id)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListSelect;
