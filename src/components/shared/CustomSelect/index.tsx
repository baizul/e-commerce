import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectProps } from "@mui/material";
import Text from "../Text";
interface Props extends SelectProps {
  id: string;
  label: string;
  error?: boolean;
  helperText?: string;
  menuItem: { id: string | number; value: string | number; label?: string }[];
  isGender?: boolean;
}
const CustomSelect = ({
  id,
  label,
  menuItem,
  isGender = false,
  helperText,
  error,
  ...rest
}: Props) => {
  return (
    <FormControl fullWidth variant="filled">
      <InputLabel
        id={`${id}-select-label`}
        className={`!h-10 !text-xs !-top-1`}
        classes={{
          formControl: `scale-75 ${error ? "!text-crimson" : ""} ${
            rest?.value === "" && !error
              ? "!text-eclipse-1 !text-opacity-50"
              : ""
          } ${rest?.value !== "" && !error ? "!text-matterhorn-1" : ""}`,
        }}
      >
        {label || ""}
      </InputLabel>
      <Select
        inputProps={{
          classes: { select: "!bg-transparent !pt-5" },
        }}
        className={`!h-10 !bg-white !text-tiny before:!border-b-0 !border after:!border-transparent !rounded
${error ? "!border-crimson" : ""}
${rest?.value === "" && !error ? "!border-whiteSmoke" : ""}
${
  rest?.value !== "" && !error ? `!border-matterhorn-1 !border-opacity-50` : ``
}`}
        {...rest}
      >
        {menuItem.map(
          (menuItem: {
            id: string | number;
            value: string | number;
            label: string;
          }) => (
            <MenuItem key={menuItem.id} value={menuItem?.value}>
              {isGender ? menuItem?.label : menuItem?.value}
            </MenuItem>
          )
        )}
      </Select>
      {error && (
        <Text className="font-medium leading-[1.66] tracking-[0.006rem] text-xxs ml-[14px] text-crimson mt-1 font-mulish">
          {helperText}
        </Text>
      )}
    </FormControl>
  );
};
export default CustomSelect;
