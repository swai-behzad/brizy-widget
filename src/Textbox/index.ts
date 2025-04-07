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
  options: () => {
    return [
      {
        toolbar: [
          {
            id: "changeTextPopover",
            type: "popover",
            config: {
              size: "xlarge"
            },
            options: [
              {
                id: "changeTextInput",
                type: "inputText",
                label: "Change Text",
                placeholder: "Type to change text1"
              },
              {
                id: "changeTextInput2",
                type: "inputText",
                label: "Change Text",
                placeholder: "Type to change text2"
              }
            ]
          },
          {
            id: "togglePopover",
            type: "popover",
            options: [
              {
                id: "toggleSwitch",
                type: "switch",
                label: "toggle"
              }
            ]
          }
        ]
      }
    ];
  }
});
