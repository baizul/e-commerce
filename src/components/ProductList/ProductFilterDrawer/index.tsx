import { Drawer } from "@mui/material";
import { useEffect, useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { FilterationOptionsData } from "../../../helpers/ProductList";
import Text from "../../shared/Text";
import GridList from "./GridList";
import InputFieldFilter from "./InputFieldFilter";
import ListSelect from "./ListSelect";

type Props = {
  isFilterActive: boolean;
  setIsFilterActive: (isFilterActive: boolean) => void;
  Filters: any;
  setFilters: (value: any) => void;
};

const ProductFilterDrawer = ({
  isFilterActive,
  setIsFilterActive,
  Filters,
  setFilters,
}: Props) => {
  const AddFilteration = (category, value) => {
    let FilterData = { ...Filters };
    if (FilterData[category]) {
      let categoryFilters = FilterData[category];
      !categoryFilters.includes(value) && categoryFilters.push(value);
      FilterData[category] = categoryFilters;
    } else {
      FilterData[category] = [value];
    }
    setFilters(FilterData);
  };
  const RemoveFilter = (category, value) => {
    let FilterData = { ...Filters };
    if (FilterData[category]) {
      let categoryFilters = FilterData[category];
      categoryFilters.includes(value) &&
        categoryFilters.splice(categoryFilters.indexOf(value), 1);
      FilterData[category] = categoryFilters;
    }

    setFilters(FilterData);
  };
  return (
    <Drawer
      BackdropProps={{
        classes: {
          root: "!hidden",
        },
      }}
      classes={{
        root: `w-full lg:w-fit mt-14 lg:mt-12`,
        paper: "!relative w-full",
      }}
      anchor={"left"}
      open={isFilterActive}
      onClose={() => setIsFilterActive(false)}
    >
      <div className="w-full px-4 pt-12 space-y-6">
        <div
          className="flex items-center justify-between w-full pl-2"
          onClick={() => setIsFilterActive(false)}
        >
          <div className="flex items-center space-x-2 cursor-pointer">
            <IoFilterOutline size={24} />
            <Text className="font-bold text-1.5xl">Filter</Text>
          </div>
          <MdOutlineArrowBackIosNew
            size={24}
            strokeWidth={0}
            className="cursor-pointer"
          />
        </div>
        <div className="space-y-6 w-72">
          {FilterationOptionsData.map(({ id, FilterTitle, options, type }) => {
            return (
              <div key={id} className="mt-2">
                <Text className="px-1 mx-2 text-xl font-bold ">
                  {FilterTitle}
                </Text>
                {type === "listSelect" && (
                  <ListSelect
                    filterCategory={id}
                    Filters={Filters}
                    AddFilteration={AddFilteration}
                    RemoveFilter={RemoveFilter}
                    options={options}
                  />
                )}
                {type === "input" && (
                  <InputFieldFilter
                    filterCategory={id}
                    Filters={Filters}
                    AddFilteration={AddFilteration}
                    RemoveFilter={RemoveFilter}
                    options={options}
                  />
                )}
                {type === "gridList" && (
                  <GridList
                    filterCategory={id}
                    Filters={Filters}
                    AddFilteration={AddFilteration}
                    RemoveFilter={RemoveFilter}
                    options={options}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Drawer>
  );
};

export default ProductFilterDrawer;
