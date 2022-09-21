import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

type Props = {
  filterCategory?: any;
  options: any;
  RemoveFilter: (category: String, id: String) => void;
  AddFilteration: (category: String, id: String) => void;
  Filters: any;
  classToOverride?: string;
};

const GridList = ({
  filterCategory,
  options,
  AddFilteration,
  Filters,
  classToOverride,
  RemoveFilter,
}: Props) => {
  const handleSelect = (id) => {
    AddFilteration(filterCategory, id);
  };
  return (
    <div
      className={`grid grid-cols-5 gap-1 px-1 mx-2 my-6 mt-4 ${classToOverride}`}
    >
      {options.map((data: any) => {
        return (
          <div
            onClick={() =>
              Filters[filterCategory]?.includes(data.id)
                ? RemoveFilter(filterCategory, data.id)
                : handleSelect(data.id)
            }
            className={`p-2 mt-1 rounded h-8.5 w-10 text-sm text-center ${
              Filters[filterCategory]?.includes(data.id)
                ? "text-whiteSmoke bg-eclipse-1"
                : "text-ellipsis opacity-60 bg-whiteSmoke"
            }`}
            key={data.id}
          >
            {data.Label}
          </div>
        );
      })}
    </div>
  );
};

export default GridList;
