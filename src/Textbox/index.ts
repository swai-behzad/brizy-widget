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
        id: "popover",
        type: "popover",
        config: {
          size: "xlarge"
        },
        options: [
          {
            id: "changeText",
            type: "inputText",
            label: "Change Text",
            placeholder: "Type to change text"
          }
        ]
      }
    ];
  }
});
