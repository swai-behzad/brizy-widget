import React from "react";
import { TextboxInterface } from "../type";

export const TextboxView: React.FC<TextboxInterface> = (props) => {
  const {
    _id: widgetId,
    device,
    thirdPartyId: widgetType,
    editTextControl,
    typographyControlBold: bold,
    typographyControlFontFamily: fontFamily,
    typographyControlFontFamilyType: fontFamilyType,
    typographyControlFontSize: fontSize,
    typographyControlFontSizeSuffix: fontSizeSuffix,
    typographyControlFontSoftness: fontSoftness,
    typographyControlFontStyle: fontStyle,
    typographyControlFontWeight: fontWeight,
    typographyControlFontWidth: fontWidth,
    typographyControlItalic: italic,
    typographyControlLetterSpacing: letterSpacing,
    typographyControlLineHeight: lineHeight,
    typographyControlLowercase: lowercase,
    typographyControlScript: script,
    typographyControlStrike: strike,
    typographyControlUnderline: underline,
    typographyControlUppercase: uppercase,
    typographyControlVariableFontWeight: variableFontWeight
  } = props;

  const textStyle: React.CSSProperties = {
    fontFamily: fontFamily || "inherit",
    fontSize: fontSize ? `${fontSize}${fontSizeSuffix}` : "inherit",
    fontWeight: bold ? "bold" : variableFontWeight || fontWeight || "normal",
    fontStyle: italic ? "italic" : fontStyle || "normal",
    letterSpacing: letterSpacing ? `${letterSpacing}px` : undefined,
    lineHeight: lineHeight ? `${lineHeight}` : undefined,
    textTransform: uppercase ? "uppercase" : lowercase ? "lowercase" : "none",
    textDecoration: [underline ? "underline" : "", strike ? "line-through" : ""]
      .filter(Boolean)
      .join(" "),
    verticalAlign:
      script === "super" ? "super" : script === "sub" ? "sub" : "baseline",
    fontStretch: `${fontWidth}%`,
    opacity: fontSoftness < 100 ? fontSoftness / 100 : 1
  };

  return <div>View for test</div>;
};
