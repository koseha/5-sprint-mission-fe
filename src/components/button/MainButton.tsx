import { ReactNode } from "react";
import { BaseButton } from "./BaseButton";
import { ButtonProps, useTheme } from "@mui/material";

type MainButtonProps = {
  variant: "primary" | "secondary";
  size: "lg" | "md" | "sm42" | "sm48";
  choice: "confirm" | "cancel";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children?: ReactNode;
} & Omit<ButtonProps, "variant" | "size">;

export const MainButton = ({
  variant = "primary",
  size,
  choice,
  icon,
  iconPosition,
  children,
  ...props
}: MainButtonProps) => {
  const theme = useTheme();

  const sizeStyle = {
    lg: {
      fontSize: "20px",
      padding: "16px 124px",
      borderRadius: "40px",
      height: "56px",
    },
    md: {
      fontSize: "18px",
      padding: "12px 71px",
      borderRadius: "40px",
      height: "48px",
    },
    sm42: {
      fontSize: "16px",
      padding: "12px 23px",
      borderRadius: "8px",
      height: "42px",
    },
    sm48: {
      fontSize: "16px",
      padding: "12px 23px",
      borderRadius: "8px",
      height: "48px",
    },
  };

  const choiceStyle = {
    confirm: {
      primary: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.button.default,
        "&:hover": {
          backgroundColor: theme.palette.button.hover,
        },
        "&:active": {
          backgroundColor: theme.palette.button.active,
        },
        "&.Mui-disabled": {
          backgroundColor: theme.palette.button.disabled,
          color: theme.palette.grey[100],
        },
      },
      secondary: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.error.main,
        border: `1px solid ${theme.palette.error.main}`,
      },
    },
    cancel: {
      primary: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.primary.main}`,
      },
      secondary: {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.common.white,
        border: `1px solid ${theme.palette.error.main}`,
      },
    },
  };

  return (
    <BaseButton
      icon={icon}
      iconPosition={iconPosition}
      {...props}
      sx={{ ...sizeStyle[size], ...choiceStyle[choice][variant], ...props.sx }}
    >
      {children}
    </BaseButton>
  );
};
