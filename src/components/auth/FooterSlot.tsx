"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

type FooterSlotProps = {
  comment: string;
  link: string;
  linkTitle: string;
};

export const FooterSlot = ({ comment, link, linkTitle }: FooterSlotProps) => {
  return (
    <Box sx={{ marginTop: "24px" }}>
      <Typography variant="textMd" fontWeight="medium">
        {comment}
      </Typography>
      &ensp;
      <Link href={link}>
        <Typography
          variant="textMd"
          fontWeight="medium"
          sx={(theme) => ({
            // color: "#3692ff",
            color: theme.palette.primary[100],
            textDecoration: "underline",
          })}
        >
          {linkTitle}
        </Typography>
      </Link>
    </Box>
  );
};
