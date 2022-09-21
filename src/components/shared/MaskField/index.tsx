import RedditTextField from "../redditInput";
import InputMask from "react-input-mask";

interface Props {
  mask: string;
  maskChar?: string;
  onBlur?: () => void;
  onTouchStart?: () => void;
  onChange?: () => void;
  label?: string;
  variant?: "standard" | "filled" | "outlined";
  error?: boolean;
  value?: string;
  size?: "small" | "medium";
  id?: string;
  helperText?: string;
  name?: string;
}

const MaskTextField = ({
  mask,
  maskChar = "",
  onChange,
  error,
  onBlur,
  helperText,
  size,
  onTouchStart,
  label,
  value,
  variant,
  id,
  name,
}: Props) => {
  return (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      onBlur={onBlur}
      onTouchStart={onTouchStart}
      value={value}
      onChange={onChange}
    >
      {() => (
        <RedditTextField
          label={label}
          id={id}
          name={name}
          size={size}
          helperText={helperText}
          classes={{
            root: "!w-full",
          }}
          variant={variant || "filled"}
          error={error}
        />
      )}
    </InputMask>
  );
};

export default MaskTextField;
