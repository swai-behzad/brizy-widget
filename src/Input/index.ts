import React, { JSX } from "react";
import { Brizy } from "@brizy/core";
import { InputEditor } from "./Editor";
import { InputView } from "./View";

Brizy.registerComponent({
  id: "ThirdParty.Input",
  content: "this is my new content",
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
        content: "this is my new content 2",
        toolbar: [
          {
            id: "inputPopover",
            type: "popover",
            config: {
              size: "large"
            },
            content: "this is my new content 3",
            options: [
              {
                id: "toolbarInput",
                type: "inputText",
                label: "Change Text",
                placeholder: "Type to change text3",
                content: "this is my new content 4"
              },
              {
                id: "toolbarButton",
                content: "this is my new content 5",
                type: "button",
                onClick: () => {
                  console.log("button clicked");
                },
                value: "dawdawd",
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

export const getToolbarContols = ({ getValue }: any) => {
  const inputValue = getValue("toolbarInput");

  return [
    {
      selector: ".brz-input",
      content: "this is my new content 2",
      toolbar: [
        {
          id: "inputPopover",
          type: "popover",
          config: {
            size: "large"
          },
          content: "this is my new content 3",
          options: [
            {
              id: "toolbarInput",
              type: "inputText",
              label: "Change Text",
              placeholder: "Type to change text3",
              content: "this is my new content 4",
              disabled: inputValue === "disabled"
            },
            {
              id: "toolbarButton",
              content: "this is my new content 5",
              type: "button",
              onClick: () => {
                console.log("button clicked");
              },
              value: "dawdawd",
              config: {
                text: "save"
              }
            }
          ]
        }
      ]
    }
  ];
};
