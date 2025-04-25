import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { ReactNode } from "react";
import { ImageCircleButton } from "../button/ImageCircleButton";
import { LinkButton } from "../button/LinkButton";

type AuthLayoutProps = {
  children: ReactNode;
  footerSlot?: ReactNode;
};

export const AuthLayout = ({ children, footerSlot }: AuthLayoutProps) => {
  return (
    <Box sx={authContainerStyle}>
      <Box sx={logoContainerStyle}>
        <LinkButton href="/">
          <Image
            src={"/assets/images/logo.png"}
            width={392}
            height={132}
            layout="responsive"
            alt="logo"
          />
        </LinkButton>
      </Box>
      {children}
      <Box sx={oauthContainerStyle}>
        <Typography variant="textLg" fontWeight="medium">
          간편 로그인하기
        </Typography>
        <Box sx={{ display: "flex", gap: "12px" }}>
          <ImageCircleButton
            size={42}
            src="/assets/images/oauth-google.png"
            alt="logo-google"
          />
          <ImageCircleButton
            size={42}
            src="/assets/images/oauth-kakao.png"
            alt="logo-kakao"
          />
        </Box>
      </Box>
      <Box sx={{ margin: "0 auto" }}>{footerSlot}</Box>
    </Box>
  );
};

const authContainerStyle = {
  width: { sm: "640px", xs: "100%" },
  marginX: "auto",
  marginY: { lg: "50px", sm: "20px", xs: "10px" },
  minHeight: "100vh", // 화면 전체 높이 확보
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logoContainerStyle = {
  width: { lg: "392px", sm: "392px", xs: "198px" },
  height: { lg: "132px", sm: "132px", xs: "66px" },
  marginX: "auto",
  marginBottom: { md: "40px", xs: "24px" },
};

const oauthContainerStyle = {
  width: "100%",
  height: "75px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 23px",
  backgroundColor: "#E6F2FF",
  borderRadius: "8px",
};
