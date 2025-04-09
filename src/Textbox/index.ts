import { Brizy } from "@brizy/core";
import { TextboxEditor } from "./Editor";
import { TextboxView } from "./View";

Brizy.registerComponent({
  id: "ThirdParty.Textbox",
  title: "Textbox",
  category: "custom",
  component: {
    editor: TextboxEditor,
    view: TextboxView
  },
  options: ({ getValue }: any) => {
    const inputValue = getValue("editTextControl");
    const videoType = getValue("videoType");

    return [
      {
        content: "hello world",
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
                onclick: () => {
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
                onclick: () => {
                  console.log("generate clicked!");
                },
                config: {
                  text: "generate with AI for test"
                },
                disabled: videoType === "custom"
              },
              {
                id: "change videoType",
                type: "button",
                onclick: () => {
                  console.log("generate clicked!");
                },
                config: {
                  text: "generate with AI for test"
                },
                disabled: videoType === "custom"
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
