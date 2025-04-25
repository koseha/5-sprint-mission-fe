// app/theme-provider.tsx
"use client";

import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "@/styles/theme";

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          margin: "0 auto",
          padding: { lg: "52px", sm: "52px", xs: "16px" },
          minHeight: "100vh",
        }}
      >
        {children}
      </Container>
    </ThemeProvider>
  );
}
