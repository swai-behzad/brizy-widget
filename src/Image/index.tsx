import { Brizy } from "@brizy/core";
import { Editor } from "./Editor";
import { View } from "./View";
import "./index.scss";

const Map = { Editor, View };

export default Map;

Brizy.registerComponent({
  id: "Brizy.ThirdParty.SwaiImage",
  component: {
    editor: Editor,
    view: View
  },
  title: "SWAI Image",
  category: "custom",
  options: () => {
    return [
      {
        selector: ".imageView",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-picture",
              title: "Select Image"
            },
            devices: "desktop",
            position: 90,
            options: [
              {
                id: "tabsCurrentElement",
                type: "tabs",
                tabs: [
                  {
                    id: "tabCurrentElement",
                    label: "Image",
                    options: [
                      {
                        id: "source",
                        label: "Source",
                        type: "inputText",
                        placeholder: "Enter Image URL",
                        default: {
                          value: ""
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
});
