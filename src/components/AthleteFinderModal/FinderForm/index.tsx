import { FindYourAtheleteFields } from "../../../helpers/AthleteFinderModal";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomSelect from "../../shared/CustomSelect";

const AthleteFinderForm = ({ formik }: any) => {
  return (
    <>
      {FindYourAtheleteFields.map((item) => {
        return item.type === "select" ? (
          <div className="mt-5" key={item.id}>
            <CustomSelect
              id={item.id}
              label={
                formik.values[item?.id] === "" ? item.placeholder : item.label
              }
              menuItem={item.MenuItem}
              value={formik.values[item?.id]}
              onChange={formik.handleChange}
              name={item.id}
              onBlur={formik.handleBlur}
              IconComponent={KeyboardArrowDownIcon}
              error={
                formik.errors[item.id] && formik.touched[item.id] ? true : false
              }
              helperText={formik.errors[item.id]}
            />
          </div>
        ) : (
          <div key={item.id} className="mt-5">
            <Autocomplete
              value={formik.values[item?.id]}
              onChange={(e, value) => formik.setFieldValue(item.id, value)}
              id={item.id}
              onFocus={() => formik.setFieldTouched(item.id, true)}
              className={`!border !rounded ${
                formik.touched[item.id] && formik.values[item.id] !== ""
                  ? `!border-matterhorn-1 !border-opacity-50`
                  : `!border-whiteSmoke`
              }`}
              ListboxProps={{ style: { height: "6.625rem" } }}
              freeSolo
              options={item.searchItem?.map((option) => option?.name) || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  variant="standard"
                  className="!h-10"
                  placeholder={item.label}
                  InputProps={{
                    ...params.InputProps,
                    classes: { root: "!text-sm !h-10" },
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" className="ml-2" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </div>
        );
      })}
    </>
  );
};

export default AthleteFinderForm;
