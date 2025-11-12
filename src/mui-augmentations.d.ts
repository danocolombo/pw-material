import type { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface CommonColors {
    blue?: string;
    orange?: string;
    red?: string;
    black?: string;
    grey?: string;
  }

  interface Palette {
    common: CommonColors;
  }

  interface PaletteOptions {
    common?: CommonColors;
  }

  interface TypographyVariants {
    tab?: CSSProperties;
    estimate?: CSSProperties;
    learnButton?: CSSProperties;
    goButton?: CSSProperties;
    bodyPlain?: CSSProperties;
  }

  interface TypographyVariantsOptions {
    tab?: CSSProperties;
    estimate?: CSSProperties;
    learnButton?: CSSProperties;
    goButton?: CSSProperties;
    bodyPlain?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    tab?: true;
    estimate?: true;
    learnButton?: true;
    goButton?: true;
    bodyPlain?: true;
  }
}
