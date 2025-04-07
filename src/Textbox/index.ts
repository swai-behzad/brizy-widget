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
//   options: {
//     content: {
//       type: "text",
//       defaultValue: "Type something here..."
//     },
//     options: {
//       content: {
//         type: "text",
//         label: "Text",
//         defaultValue: "Type something here..."
//       },
//       typography: {
//         type: "typography",
//         label: "Typography",
//         defaultValue: {}
//       },
//       color: {
//         type: "colorPicker",
//         label: "Text Color",
//         defaultValue: "#000000"
//       },
//       padding: {
//         type: "padding",
//         label: "Padding",
//         defaultValue: {
//           top: "10px",
//           right: "10px",
//           bottom: "10px",
//           left: "10px"
//         }
//       },
//       shadow: {
//         type: "textShadow",
//         label: "Text Shadow",
//         defaultValue: "none"
//       },
//       alignment: {
//         type: "alignment",
//         label: "Text Alignment",
//         defaultValue: "left"
//       }
//     }
//   }
});
