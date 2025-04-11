import { ReactElement } from "react";
import { Props } from "../types";

export const View = (props: Props): ReactElement => {
  const { source } = props;
  // const URL = "https://www.google.com/maps/embed/v1/place";
  // const KEY = "AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw";
  // const iframeSrc = `${URL}?key=${KEY}&q=${address}&zoom=${zoom}`;

  return (
    <div className="swai-image" >
      <img src={source} alt="Image" />
    </div>
  );
};
