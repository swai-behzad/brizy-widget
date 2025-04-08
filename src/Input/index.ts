import classNames from "classnames";
import React, { JSX } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export const Input = (props: Props): JSX.Element => {
  const { value, onChange } = props;
  return (
    <div className="brz-input">
      <input type="text" value={value} onChange={({ target: { value } }): void => onChange(value)} />
    </div>
  );
};

Brizy.registerComponent(Input, {
  id: "ThirdParty.Input",
  title: "My Input",
  options: (props) => {
    return [
      {
        selector: ".brz-input",
        toolbar: [
          {
            id: "toolbarCurrentElement",
            type: "popover",
            config: {
              icon: "nc-input",
              title: "Input"
            },
            devices: "desktop",
            options: [
              {
                id: "link",
                type: "inputText",
                devices: "desktop"
              }
            ]
          }
        ]
      }
    ];
  }
});