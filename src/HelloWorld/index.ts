import { Brizy } from '@brizy/core';
import { HelloWorldEditor, HelloWorldView } from './HelloWorld';

Brizy.registerComponent({
  id: 'ThirdParty.HelloWorld',
  component: {
    editor: HelloWorldEditor,
    view: HelloWorldView,
  },
  title: 'Hello World Button',
});
