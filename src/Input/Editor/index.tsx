import { JSX } from "react";

interface Props {
   value: string;
   onChange: (v: string) => void;
 }

export const InputEditor = (props: Props): JSX.Element => {
   const { value, onChange } = props;
   return (
     <div className="brz-input">
       <input type="text" value={value} onChange={({ target: { value } }): void => onChange(value)} />
     </div>
   );
 };