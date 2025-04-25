"use client";

import Image from "next/image";
import { CircleButton } from "./CircleButton";

type ImageCircleButtonProps = {
  size: number;
  src: string;
  alt: string;
};

export const ImageCircleButton = ({
  size,
  src,
  alt,
}: ImageCircleButtonProps) => {
  return (
    <CircleButton
      size="medium"
      sx={{
        // 버튼 배경 트랜지션
        transition: "background-color 0.3s ease-in-out",

        // 내부 img 기본 트랜지션
        "& img": {
          transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
        },

        // 호버 시 스타일
        "&:hover": {
          // img에 확대+밝기 조절
          "& img": {
            transform: "scale(1.04)",
            filter: "brightness(1.04)",
          },
        },
      }}
    >
      <Image width={size} height={size} src={src} alt={alt} />
    </CircleButton>
  );
};
