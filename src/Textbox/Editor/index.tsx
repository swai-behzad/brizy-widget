import React from 'react';

// interface TextboxEditorInterface {
//    content: string
// }

export function TextboxEditor({ options, setOptionValue, content }: any) {
//   const { content, typography, color } = options;

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onInput={(e) => setOptionValue('content', e.currentTarget.textContent)}
      style={{
        padding: '10px',
        minHeight: '40px',
        border: '1px dashed #ccc',
      //   ...(typography?.style || {}),
      //   color: color?.value || 'inherit',
      }}
      // className={typography?.className}
    >
      {content}
    </div>
  );
}