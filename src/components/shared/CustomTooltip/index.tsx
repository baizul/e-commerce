import { Tooltip, TooltipProps } from "@mui/material";
import classNames from "classnames";

interface Props extends TooltipProps {
  arrowClassToOverride?: string;
  handleRemove?: () => void;
  isFullArrow?: boolean;
}

const CustomTooltip = ({
  arrowClassToOverride,
  handleRemove,
  isFullArrow,
  ...rest
}: Props) => {
  return (
    <Tooltip
      {...rest}
      arrow
      classes={{
        popper: "!z-50",
        tooltipPlacementTop: "!w-72 md:!w-fit !mr-4",
        tooltip:
          "!bg-white !border-2 !ml-4 !max-w-full lg:!w-96 !w-fit !border-darkGray",
        arrow: classNames(
          arrowClassToOverride,
          "!text-white before:!border-2 before:!border-darkGray",
          !isFullArrow
            ? "!h-8 !w-12  !-ml-0 !-mb-8 lg:!-mb-0 lg:!w-6 lg:!-ml-6"
            : "text-3xl"
        ),
      }}
      PopperProps={{
        disablePortal: true,
        modifiers: [
          {
            name: "flip",
            enabled: false,
            options: {
              altBoundary: false,
              rootBoundary: "document",
              padding: 8,
            },
          },
          {
            name: "preventOverflow",
            enabled: false,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: "viewport",
              padding: 8,
            },
          },
          {
            name: "arrow",
            enabled: false,
          },
        ],
      }}
      disableFocusListener
      disableHoverListener
      disableTouchListener
    />
  );
};

export default CustomTooltip;
