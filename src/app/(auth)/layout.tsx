import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        margin: "0 auto",
        // padding: "23px",
      }}
    >
      {children}
    </Box>
  );
}
