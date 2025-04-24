import { ButtonProps, useTheme } from "@mui/material";
import { BaseButton } from "./BaseButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type HeartButtonProps = {
  size: "lg" | "sm";
  isLiked: boolean;
  likeCount: number;
} & Omit<ButtonProps, "size">;

export const HeartButton = ({ size, isLiked, likeCount }: HeartButtonProps) => {
  const theme = useTheme();

  return (
    <BaseButton
      sx={{
        backgroundColor: "white",
        color: theme.palette.grey[500],
        borderRadius: "35px",
        height: `${size === "lg" ? "40px" : "34px"}`,
      }}
      icon={
        isLiked ? (
          <FavoriteIcon sx={{ color: theme.palette.heart.true }} />
        ) : (
          <FavoriteBorderIcon sx={{ color: theme.palette.heart.false }} />
        )
      }
    >
      {likeCount}
    </BaseButton>
  );
};
