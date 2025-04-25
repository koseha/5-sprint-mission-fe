// src/styles/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Pretendard",
    text3xl: {
      fontSize: "32px",
    },
    text2xl: {
      fontSize: "24px",
    },
    textXl: {
      fontSize: "20px",
    },
    text2lg: {
      fontSize: "18px",
    },
    textLg: {
      fontSize: "16px",
    },
    textMd: {
      fontSize: "14px",
    },
    textSm: {
      fontSize: "13px",
    },
    textXs: {
      fontSize: "12px",
    },
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
    button: {
      default: "#3692FF",
      hover: "#1967D6",
      active: "#1251AA",
      disabled: "#9ca3af",
    },
    heart: {
      true: "#FF68CC",
      false: "#6B7280",
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
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: 0,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default theme;
