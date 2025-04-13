import { Brizy } from "@brizy/core";
import { TextboxEditorL } from "./Editor";
import { TextboxView } from "./View";

Brizy.registerComponent({
  id: "ThirdParty.Textbox",
  title: "Textbox",
  category: "custom",
  component: {
    editor: TextboxEditorL,
    view: TextboxView
  },
  options: ({ getValue }: any) => {
    const inputValue = getValue("editTextControl");
    const videoType = getValue("videoType");

    return [
      {
        toolbar: [
          {
            id: "editTextPopover",
            type: "popover",
            position: 100,
            devices: "all",
            config: {
              placement: "bottom",
              size: "auto",
              icon: "nc-pen"
            },
            options: [
              {
                id: "editTextControl",
                type: "textarea",
                label: "Text",
                devices: "all",
                icon: "nc-star",
                display: "block",
                placeholder: "type your text",
                default: {
                  value: "default text"
                }
              },
              {
                id: "AIGenerateControl",
                type: "button",
                onClick: () => {
                  console.log("generate clicked!");
                },
                config: {
                  text: "generate with AI"
                },
                disabled: inputValue === "disabled"
              }
            ]
          },
          {
            id: "editTextPopoverTest",
            type: "popover",
            position: 100,
            devices: "all",
            config: {
              placement: "bottom",
              size: "auto",
              icon: "nc-pen"
            },
            options: [
              {
                id: "videoType",
                type: "select",
                choices: [
                  { title: "Youtube", value: "youtube" },
                  { title: "Custom", value: "custom" }
                ]
              },
              {
                id: "AIGenerateControlTest",
                type: "button",
                onClick: () => {
                  console.log("generate clicked!");
                },
                config: {
                  text: "test"
                },
                disabled: videoType === "custom"
              },
              {
                id: "change videoType",
                type: "button",
                onClick: () => {
                  console.log(inputValue);
                  console.log(videoType);
                },
                config: {
                  text: "log values"
                },
              }
            ]
          },
          {
            id: "typographyPopover",
            type: "popover",
            position: 200,
            devices: "all",
            config: {
              placement: "bottom",
              size: "auto",
              icon: "nc-font"
            },
            options: [
              {
                id: "typographyControl",
                type: "typography",
                devices: "all",
                config: {
                  fontFamily: true,
                  fontSize: {
                    min: 8
                  },
                  lineHeight: {
                    min: 1
                  },
                  letterSpacing: {
                    min: -30,
                    max: 30
                  },
                  TextScripts: ["sub", "super"]
                }
              }
            ]
          }
        ]
      }
    ];
  }
});
