import React, { JSX } from "react";
import { Brizy } from "@brizy/core";
import { InputEditor } from "./Editor";
import { InputView } from "./View";

Brizy.registerComponent({
  id: "ThirdParty.Input",
  title: "My Input",
  category: "custom",
  component: {
    editor: InputEditor,
    view: InputView
  },
  options: (props: any) => {
    return [
      {
        selector: ".brz-input",
        toolbar: [
          {
            id: "inputPopover",
            type: "popover",
            config: {
              size: "large"
            },
            options: [
              {
                id: "toolbarInput",
                type: "inputText",
                label: "Change Text",
                placeholder: "Type to change text3"
              },
              {
                id: "toolbarButton",
                type: "button",
                onClick: () => {
                  console.log("button clicked");
                },
                config: {
                  text: "save"
                }
              }
            ]
          }
        ]
      }
    ];
  }
});
