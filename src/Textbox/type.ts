export interface TextboxInterface {
  typographyControlBold: boolean;
  typographyControlFontFamily: string;
  typographyControlFontFamilyType: "google" | "upload" | "system";
  typographyControlFontSize: number;
  typographyControlFontSizeSuffix: "px" | "em" | "rem" | "vw";
  typographyControlFontSoftness: number;
  typographyControlFontStyle: string;
  typographyControlFontWeight:
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  typographyControlFontWidth: number;
  typographyControlItalic: boolean;
  typographyControlLetterSpacing: number;
  typographyControlLineHeight: number;
  typographyControlLowercase: boolean;
  typographyControlScript: undefined | "super" | "sub";
  typographyControlStrike: boolean;
  typographyControlUnderline: boolean;
  typographyControlUppercase: boolean;
  typographyControlVariableFontWeight: number;
}
