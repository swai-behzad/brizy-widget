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
        content: "hello world",
        toolbar: [
          {
            id: "typographyPopover",
            type: "popover",
            position: 100,
            devices: "all",
            config: {
              placement: "bottom"
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
                  }
                }
              }
            ]
          }
        ]
      }
    ];
  }
});
