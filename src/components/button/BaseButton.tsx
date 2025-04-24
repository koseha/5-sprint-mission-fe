import { Button, ButtonProps } from "@mui/material";
import { ReactNode } from "react";

interface BaseButtonProps extends ButtonProps {
  isLoading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export const BaseButton = ({
  icon,
  iconPosition = "left",
  disabled,
  children,
  fullWidth = false,
  size = "medium",
  variant = "contained",
  ...props
}: BaseButtonProps) => {
  const renderIcon = () => {
    if (icon) {
      return icon;
    }
    return null;
  };

  return (
    <Button
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      startIcon={iconPosition === "left" ? renderIcon() : undefined}
      endIcon={iconPosition === "right" ? renderIcon() : undefined}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

/**
 * ** 상태 - 색상
 * default ::
 * hover ::
 * active ::
 * disable ::
 * ** 타입
 * primary >> 파란색
 * secondary >> 흰색
 */
