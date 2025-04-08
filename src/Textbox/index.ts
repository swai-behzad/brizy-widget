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
  options: ({}) => {

    let className = ""

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
                  className = "generate with ai"
               },
               config: {
                  text: "generate with AI"
               }
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
                className: className,
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
