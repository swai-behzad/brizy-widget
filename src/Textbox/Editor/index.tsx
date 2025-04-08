import React from "react";

interface TextboxEditorInterface {
  content: string;
  onChange: (value: string) => void;
}

export function TextboxEditor(props: any) {
  return (
    //  <div
    //    contentEditable
    //    suppressContentEditableWarning
    //    onInput={(e) => onChange(e.currentTarget.textContent || "")}
    //    style={{
    //      padding: "10px",
    //      minHeight: "40px",
    //      border: "1px dashed #ccc"
    //        ...(typography?.style || {}),
    //        color: color?.value || 'inherit',
    //    }}
    //    className={typography?.className}
    //  >
    //    {content} &nbsp;---&nbsp; Editor Component
    //  </div>
    <div>
      <p>this is p</p>
      <button
        onClick={() => {
          console.log(props);
        }}
      >
        click
      </button>
    </div>
  );
}
