import { Brizy } from "@brizy/core";
import { ImageModalEditor } from "./Editor";
import { ImageModalView } from "./View";

Brizy.registerComponent({
  id: "ThirdParty.ImageModal",
  title: "ImageModal",
  category: "custom",
  component: {
    editor: ImageModalEditor,
    view: ImageModalView
  },
  options: () => {
    const getToolbarContols = ({ getValue }: any) => {
      const videoType = getValue("videoType");

      return [
        {
          id: "modalButton",
          type: "button",
          onClick: () => {
            console.log("show modal clicked!");
          },
          config: {
            text: "show modal"
          }
        },
        {
          id: "videoType",
          type: "select",
          choices: [
            { title: "Youtube", value: "youtube" },
            { title: "Custom", value: "custom" }
          ]
        },
        {
          id: "duplicate",
          type: "button",
          onClick: () => {},
          disabled: videoType === "custom"
        }
      ];
    };

    return [
      {
        toolbar: [
          {
            id: "modalPopover",
            type: "popover",
            position: 100,
            devices: "all",
            config: {
              placement: "bottom",
              size: "auto",
              icon: "nc-image"
            },
            options: [
              {
                id: "modalButton",
                type: "button",
                onClick: () => {
                  console.log("show modal clicked!");
                },
                config: {
                  text: "show modal"
                }
              },
              {
                id: "videoType",
                type: "select",
                choices: [
                  { title: "Youtube", value: "youtube" },
                  { title: "Custom", value: "custom" }
                ]
              },
              {
                id: "duplicate",
                type: "button",
                onClick: () => {}
              }
            ]
          }
        ]
      }
    ];
  }
});
