// Common types and interfaces used across the application

export interface NavigationProps {
  value: number;
  setValue: (value: number) => void;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}

export interface PageProps {
  setValue: (value: number) => void;
  setSelectedIndex: (index: number) => void;
}

export interface AlertState {
  open: boolean;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface LottieAnimationData {
  v?: string;
  fr?: number;
  ip?: number;
  op?: number;
  w?: number;
  h?: number;
  nm?: string;
  ddd?: number;
  assets?: any[];
  layers?: any[];
  markers?: any[];
}

export interface ThemeColors {
  blue: string;
  orange: string;
  red: string;
  black: string;
  grey: string;
}

export interface CustomThemeOptions {
  palette?: {
    common?: ThemeColors;
    primary?: {
      main: string;
    };
    secondary?: {
      main: string;
    };
  };
  typography?: any;
  overrides?: any;
}
