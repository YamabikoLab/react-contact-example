import React, { type ReactNode } from "react";
import Button from "@mui/material/Button";
import { type SxProps, type Theme } from "@mui/material";

interface Props {
  children: ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  disabled?: boolean | undefined;
  size?: "small" | "large" | "medium" | undefined;
  sx?: SxProps<Theme> | undefined;
  variant?: "text" | "contained" | "outlined" | undefined;
}
const CommonButton = ({
  children,
  color,
  disabled,
  size,
  sx,
  variant,
}: Props): JSX.Element => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
