import { Brizy } from "@brizy/core";
import { TextboxEditor } from "./Editor";
import { TextboxView } from "./View";

Brizy.registerComponent({
   id: 'ThirdParty.Textbox',
   title: 'Textbox',
   category: 'custom',
   component: {
     editor: TextboxEditor,
     view: TextboxView,
   },
   options: {
     content: {
       type: 'text',
       defaultValue: 'Type something here...',
     },
     typography: true,
     color: true,
     background: true,
     padding: true,
     alignment: true,
     shadow: true,
   },
 });