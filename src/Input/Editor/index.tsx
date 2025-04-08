import { JSX } from "react";

interface Props {
  value: string;
  onChange: (v: string) => string;
}

export const InputEditor = (props: Props): JSX.Element => {
  console.log(props);

  const { value } = props;

  return (
    <div className="brz-input">
      <input
        type="text"
        value={value}
        onChange={() => console.log("changed", value)}
      />
      <button
        onClick={() => {
          console.log(props);
        }}
      ></button>
    </div>
  );
};
