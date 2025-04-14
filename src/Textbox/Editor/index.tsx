import React, { useEffect, useState } from "react";
import { TextboxInterface } from "../type";
import { getPageIdFromUrl } from "../../utils/helper";

export const TextboxEditorL: React.FC<TextboxInterface> = (props) => {
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

  useEffect(() => {
    const pageId = getPageIdFromUrl();
    console.log(pageId);

    const fetchUniqueId = async () => {
      try {
        const response = await fetch(
          "https://2e8c-172-187-231-104.ngrok-free.app/widget",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              page_id: pageId,
              widget_id: widgetId,
              widget_type: widgetType.slice(11),
              value: text,
              device: "ALL"
            })
          }
        );
      } catch (error) {
        console.error("Error fetching uniqueId:", error);
      }
    };

    fetchUniqueId();
  }, []);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setText(e.currentTarget.textContent || "");
    console.log("typing");
    console.log(text);
  };

  const handleBlur = async () => {
    console.log("handleBlur called");
    try {
      await fetch("https://2e8c-172-187-231-104.ngrok-free.app/widget/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          widget_id: widgetId,
          value: text
        })
      });
      console.log("handleBlur done");
    } catch (error) {
      console.error("Error updating text on blur:", error);
    }
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
    fontStretch: `${fontWidth}%`,
    opacity: fontSoftness < 100 ? fontSoftness / 100 : 1
  };

  return (
    <div>
      <div
        contentEditable
        suppressContentEditableWarning
        onInput={handleInput}
        onBlur={handleBlur}
        tabIndex={0}
        //   style={textStyle}
      >
        {text}
      </div>
      <button onClick={() => console.log(props)}>log props</button>
    </div>
  );
};
