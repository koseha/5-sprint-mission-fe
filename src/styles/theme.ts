// src/styles/theme.ts
import { createTheme } from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface Palette {
//     panda: Palette["primary"];
//   }
//   interface PaletteOptions {
//     panda?: PaletteOptions["primary"];
//   }
// }

const theme = createTheme({
  typography: {
    fontFamily: "Pretendard",
  },
  palette: {
    primary: {
      main: "#1976d2",
      100: "#3692FF",
      200: "#1967D6",
      300: "#1251AA",
    },
    grey: {
      900: "#111827",
      800: "#1f2937",
      700: "#374151",
      600: "#4b5563",
      500: "#6b7280",
      400: "#9ca3af",
      200: "#e5e7eb",
      100: "#f3f4f6",
      50: "#F9FAFB",
    },
    error: {
      main: "#F74747",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#fafafa",
          fontFamily: "'Roboto', sans-serif",
        },
        "*": {
          boxSizing: "border-box",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
});

export default theme;
