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
    const { getValue } = props;
    let inputValue = getValue("toolbarInput");
    let disabled = false;

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
                placeholder: "Type to change text3",
                value: inputValue,
                default: {
                  value: "default value"
                },
                disabled: inputValue === "disbaled"
              },
              {
                id: "toolbarButton",
                type: "button",
                onClick: () => {
                  console.log(props);
                  inputValue = "disbaled";
                  console.log(inputValue);
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

const getToolbarContols = ({ getValue }: any) => {
  const inputValue = getValue("toolbarInput");
  let disabled = false;

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
                disabled = true;
                console.log(disabled);
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
