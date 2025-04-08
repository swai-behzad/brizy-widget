import { JSX } from "react";

interface Props {
  toolbarInput: string;
  onChange: (v: string) => void;
}

export const InputEditor = (props: Props): JSX.Element => {
  const { toolbarInput, onChange } = props;

  return (
    <div className="brz-input">
      <input
        type="text"
        value={toolbarInput}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        onClick={() => {
          console.log(props);
        }}
      >
         click
      </button>
    </div>
  );
};
