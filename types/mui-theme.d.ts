// theme.d.ts
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    100?: string;
    200?: string;
    300?: string;
  }
  interface PaletteColorOptions {
    100?: string;
    200?: string;
    300?: string;
  }

  interface Palette {
    button: {
      default: string;
      hover: string;
      active: string;
      disabled: string;
    };
    heart: {
      true: string;
      false: string;
    };
  }
  interface PaletteOptions {
    button?: {
      default: string;
      hover: string;
      active: string;
      disabled: string;
    };
    heart: {
      true: string;
      false: string;
    };
  }

  interface TypographyVariants {
    text3xl: React.CSSProperties;
    text2xl: React.CSSProperties;
    textXl: React.CSSProperties;
    text2lg: React.CSSProperties;
    textLg: React.CSSProperties;
    textMd: React.CSSProperties;
    textSm: React.CSSProperties;
    textXs: React.CSSProperties;
    // 필요시 계속 추가
  }

  interface TypographyVariantsOptions {
    text3xl?: React.CSSProperties;
    text2xl?: React.CSSProperties;
    textXl?: React.CSSProperties;
    text2lg?: React.CSSProperties;
    textLg?: React.CSSProperties;
    textMd?: React.CSSProperties;
    textSm?: React.CSSProperties;
    textXs?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    text3xl: true;
    text2xl: true;
    textXl: true;
    text2lg: true;
    textLg: true;
    textMd: true;
    textSm: true;
    textXs: true;
  }
}
