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
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-input",
              title: "Input"
            },
            devices: "desktop",
            options: [
              {
                id: "link",
                type: "inputText",
                devices: "desktop"
              }
            ]
          }
        ]
      }
    ];
  }
});