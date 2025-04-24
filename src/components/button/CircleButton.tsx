import { IconButton, IconButtonProps } from "@mui/material";
import { styled } from "@mui/system";

interface CircleButtonProps extends IconButtonProps {
  selected?: boolean; // 선택된 상태
  size?: "small" | "medium" | "large";
}

const getSize = (size: CircleButtonProps["size"]) => {
  switch (size) {
    case "small":
      return "32px";
    case "large":
      return "56px";
    case "medium":
    default:
      return "40px";
  }
};

const StyledCircleButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "selected" && prop !== "size",
})<CircleButtonProps>(({ theme, selected, size }) => ({
  width: getSize(size),
  height: getSize(size),
  borderRadius: "50%",
  backgroundColor: selected ? theme.palette.primary.main : "#fff",
  color: selected ? "#fff" : theme.palette.text.primary,
  border: `1px solid ${selected ? theme.palette.primary.main : "#ddd"}`,
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: selected ? theme.palette.primary.dark : "#f0f0f0",
  },
  fontSize: "16px",
}));

export const CircleButton = (props: CircleButtonProps) => {
  return <StyledCircleButton {...props} />;
};
