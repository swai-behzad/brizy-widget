import React from 'react';

interface TextboxViewInterface {
   content: string
}

export function TextboxView({ content }: TextboxViewInterface) {
//   const { content, typography, color } = options;

  return (
   //  <p
   //    style={{
   //      ...(typography?.style || {}),
   //      color: color?.value || 'inherit',
   //    }}
   //    className={typography?.className}
   //  >
   //    {content}
   //  </p>
   <p>
      {content} &nbsp;---&nbsp;
      View Component
   </p>
  );
}
