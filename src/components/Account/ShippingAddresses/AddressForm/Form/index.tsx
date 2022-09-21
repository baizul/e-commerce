import { AddNewShippingFormFields } from "../../../../../helpers/Account/ShippingAddresses";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RedditTextField from "../../../../shared/redditInput";
import CustomSelect from "../../../../shared/CustomSelect";
import { Checkbox, FormControlLabel } from "@mui/material";
import Text from "../../../../shared/Text";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";


const Form = ({formik}:any) => {
  return (
    <div>
      {AddNewShippingFormFields.map(({ name, id, label, type, ...item }) => {
        switch (type) {
          case "textbox":
            return (
              <div
                className={`mt-3 lg:w-1/2 lg:inline-block lg:odd:pr-4 lg:even:pl-4 ${
                  (id === "zipCode" &&
                    `w-1/2 inline-block pl-2.5 lg:!w-1/4 lg:odd:!pl-2.5 lg:odd:!pr-0`) ||
                  ""
                }`}
                key={id}
              >
                <RedditTextField
                  id={id}
                  name={name}
                  label={label}
                  variant="filled"
                  className=""
                  error={formik.errors[id] && formik.touched[id] ? true : false}
                  onChange={formik.handleChange}
                  value={formik.values[id]}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors[id] && formik.touched[id]
                      ? formik.errors[id]
                      : ""
                  }
                />
              </div>
            );
          case "select":
            return (
              <div
                className={`mt-3 lg:w-1/2 lg:inline-block lg:odd:pr-4 lg:even:pl-4 ${
                  (id === "state" &&
                    `w-1/2 inline-block pr-2.5 lg:!w-1/4 lg:odd:!pl-2.5 lg:even:!pr-2.5`) ||
                  ""
                }`}
                key={id}
              >
                <CustomSelect
                  labelId={`${id}-select-label`}
                  id={id}
                  name={id}
                  value={formik.values[id]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  IconComponent={KeyboardArrowDownIcon}
                  label={label}
                  menuItem={item.MenuItem}
                  error={formik.errors[id] && formik.touched[id] ? true : false}
                  helperText={formik.errors[id]}
                />
              </div>
            );

          case "checkbox":
            return (
              <div className={`mt-3`} key={id}>
                <FormControlLabel
                  label={
                    <Text
                      className={`!text-xs !font-mulish !font-medium ${
                        formik.values[id] ? "!text-black" : "!text-darkGray"
                      }`}
                    >
                      Set address as default
                    </Text>
                  }
                  control={
                    <Checkbox
                      checkedIcon={
                        <CheckBoxIcon className="!w-[13px] !h-[13px] text-black" />
                      }
                      icon={
                        <CheckBoxOutlineBlankIcon className="!w-[13px] !h-[13px] !text-darkGray" />
                      }
                      id={id}
                      checked={formik.values[id]}
                      onChange={formik.handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                />
              </div>
            );
        }
      })}
    </div>
  );
};
export default Form;
