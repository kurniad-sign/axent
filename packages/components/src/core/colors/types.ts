export type ColorScale = Partial<{
  50: string;
  75: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  foreground: string;
  DEFAULT: string;
}>

export type BaseColor = {
  background: ColorScale;
  foreground: ColorScale;
  divider: ColorScale;
  focus: ColorScale;
  overlay: ColorScale;
}

export type ThemeColor = BaseColor & {
  default: ColorScale;
  primary: ColorScale;
  secondary: ColorScale;
  success: ColorScale;
  warning: ColorScale;
  error: ColorScale
}