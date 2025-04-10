import { Modal } from "./../_components/Modal/index";
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
              }
            ]
          }
        ]
      }
    ];
  }
});
