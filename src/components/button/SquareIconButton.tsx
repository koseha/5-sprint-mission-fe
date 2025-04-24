import { IconButton, IconButtonProps } from "@mui/material";
import { styled } from "@mui/system";

interface SquareIconButtonProps extends IconButtonProps {
  size?: "small" | "medium" | "large";
}

const getSize = (size: SquareIconButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "36px";
    case "large":
      return "56px";
    case "medium":
    default:
      return "44px";
  }
};

const StyledSquareIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "size",
})<SquareIconButtonProps>(({ theme, size }) => ({
  width: getSize(size),
  height: getSize(size),
  borderRadius: "12px", // 사각형이지만 약간 둥근 모서리
  backgroundColor: "#fff",
  color: theme.palette.text.primary,
  border: `1px solid #ddd`,
  boxShadow: `0 1px 3px rgba(0, 0, 0, 0.1)`,
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

export const SquareIconButton = (props: SquareIconButtonProps) => {
  return <StyledSquareIconButton {...props} />;
};
