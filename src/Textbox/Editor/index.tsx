import React, { useState } from "react";
import { TextboxInterface } from "../type";

export const TextboxEditorL: React.FC<TextboxInterface> = (props) => {
  const {
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

  const [text, setText] = useState<string>(editTextControl || "");

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setText(e.currentTarget.textContent || "");
    console.log("typing");
    console.log(text);
  };

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
    // Optional custom styles, like width/softness could be added here
    // fontStretch is not widely supported but related to fontWidth
    fontStretch: `${fontWidth}%`, // experimental, not all browsers support
    opacity: fontSoftness < 100 ? fontSoftness / 100 : 1 // optional use of softness as opacity
  };

  return (
    <div
      // data-unique-id={uniqueId}
      contentEditable
      suppressContentEditableWarning
      onInput={handleInput}
      style={textStyle}
    >
      {text}
      <button onClick={() => console.log(props)}>log props</button>
    </div>
  );
};
