import React from "react";
import { TextboxInterface } from "../type";

export function TextboxEditor(props: TextboxInterface) {
  return (
    <div>
      <p>typography</p>
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
