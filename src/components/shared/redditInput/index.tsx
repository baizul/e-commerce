import TextField, { TextFieldProps } from "@mui/material/TextField";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import classNames from "classnames";
type Props = TextFieldProps & {
  className?: string;
  inputPropsClassName?: string;
  inputLabelClassName?: string;
};
const RedditTextField = ({
  className,
  inputPropsClassName,
  inputLabelClassName,
  InputProps,
  ...rest
}: Props) => {
  return (
    <TextField
      className="!w-full rounded !border !border-black !bg-white"
      size="small"
      onWheel={(event:any) =>  event?.target?.blur() }
      FormHelperTextProps={{
        classes: { error: "!text-xxs !font-normal !text-crimson" },
      }}
      InputProps={
        {
          disableUnderline: true,
          className: classNames(
            "!h-10 rounded !border !bg-white !overflow-hidden",
            rest.error
              ? "!border-crimson"
              : rest.value
              ? "!border-matterhorn-1 !border-opacity-50"
              : "!border-whiteSmoke",
            className
          ),
          ...InputProps,
        } as Partial<OutlinedInputProps>
      }
      inputProps={{
        className: classNames(
          "!h-10 !pt-2 !pb-0 !text-tiny !font-normal !text-nero !bg-white",
          inputPropsClassName
        ),
      }}
      InputLabelProps={{
        className: classNames(
          "!text-xs",
          rest.error
            ? "!text-crimson"
            : rest.value
            ? "!text-matterhorn-1"
            : "!text-eclipse-1 !text-opacity-50",
          inputLabelClassName
        ),
      }}
      helperText={rest.error ? rest.helperText : ""}
      {...rest}
    />
  );
};
export default RedditTextField;
