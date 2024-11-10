import { brownColor } from "./brown";
import { errorColor } from "./error";
import { grayColor } from "./gray";
import { primaryColor } from "./primary";
import { secondaryColor } from "./secodary";
import { successColor } from "./success";
import { warningColor } from "./warning";

export const commonColors = {
  white: '#ffffff',
  black: '#000000',
  primary: primaryColor,
  secondary: secondaryColor,
  success: successColor,
  warning: warningColor,
  error: errorColor,
  brown: brownColor,
  gray: grayColor
}

export type CommonColors = typeof commonColors