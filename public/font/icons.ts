export type IconsId =
  | "arrow-left"
  | "compact"
  | "logo"
  | "slider";

export type IconsKey =
  | "ArrowLeft"
  | "Compact"
  | "Logo"
  | "Slider";

export enum Icons {
  ArrowLeft = "arrow-left",
  Compact = "compact",
  Logo = "logo",
  Slider = "slider",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowLeft]: "61697",
  [Icons.Compact]: "61698",
  [Icons.Logo]: "61699",
  [Icons.Slider]: "61700",
};
