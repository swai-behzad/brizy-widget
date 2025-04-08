export interface TextboxInterface {
  bold: boolean;
  fontFamily: string;
  fontFamilyType: "google" | "upload" | "system";
  fontSize: number;
  fontSizeSuffix: "px" | "em" | "rem" | "vw";
  fontSoftness: number;
  fontStyle: string;
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fontWidth: number;
  italic: boolean;
  letterSpacing: number;
  lineHeight: number;
  lowercase: boolean;
  script: undefined | "super" | "sub";
  strike: boolean;
  underline: boolean;
  uppercase: boolean;
  variableFontWeight: number;
}
