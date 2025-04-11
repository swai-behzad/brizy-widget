import { ReactElement } from "react";
import { Props } from "../types";

export const View = (props: Props): ReactElement => {
  const { source } = props;

  return (
    <div className="swai-image" >
      <img src={source} alt="Image" />
    </div>
  );
};
