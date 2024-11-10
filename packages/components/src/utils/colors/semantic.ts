import { readableColor } from 'color2k';

import { commonColors } from "./common";
import type { BaseColor, ThemeColor } from "./types";

const base: BaseColor = {
  background: {
    DEFAULT: '#ffffff',
  },
  foreground: {
    ...commonColors.gray,
    DEFAULT: commonColors.gray[800]
  },
  divider: {
    DEFAULT: "rgba(17, 17, 17, 0.15)",
  },
  focus: {
    DEFAULT: commonColors.primary[400]
  },
  overlay: {
    DEFAULT: "#000000",
  },
}

export const themeColorsLight: ThemeColor = {
  ...base,
  default: {
    ...commonColors.gray,
    foreground: readableColor(commonColors.gray[400]),
    DEFAULT: commonColors.gray[400]
  },
  primary: {
    ...commonColors.primary,
    foreground: readableColor(commonColors.primary[400]),
    DEFAULT: commonColors.primary[400]
  },
  secondary: {
    ...commonColors.secondary,
    foreground: readableColor(commonColors.secondary[400]),
    DEFAULT: commonColors.secondary[400]
  },
  success: {
    ...commonColors.success,
    foreground: readableColor(commonColors.success[400]),
    DEFAULT: commonColors.success[400]
  },
  warning: {
    ...commonColors.warning,
    foreground: readableColor(commonColors.warning[400]),
    DEFAULT: commonColors.warning[400]
  },
  error: {
    ...commonColors.error,
    foreground: readableColor(commonColors.error[400]),
    DEFAULT: commonColors.error[400]
  },
}

export const semanticColors = {
  light: themeColorsLight
}