import React, { useEffect, useState } from "react";
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

  const [text, setText] = useState<string>(editTextControl || "");
  const [uniqueId, setUniqueId] = useState<string>("");

  useEffect(() => {
    const fetchUniqueId = async () => {
      try {
        const response = await fetch(
          "https://ba9a-172-187-231-104.ngrok-free.app/widget",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              widget_id: widgetId,
              widget_type: widgetType.slice(11),
              device: "ALL"
            })
          }
        );

        const data = await response.json();
        console.log(data);
        if (data.data?.unique_id) {
          setUniqueId(data.data?.unique_id);
        }
      } catch (error) {
        console.error("Error fetching uniqueId:", error);
      }
    };

    fetchUniqueId();
  }, []);

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

  return <div data-unique-id={uniqueId}>{text}</div>;
};
