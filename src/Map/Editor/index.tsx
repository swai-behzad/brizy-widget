import { ReactElement } from "react";
import { Props } from "../types";

export const Editor = (props: Props): ReactElement => {
  const { address, zoom = 13, height, widthSuffix } = props;
  const URL = "https://www.google.com/maps/embed/v1/place";
  const KEY = "AIzaSyCcywKcxXeMZiMwLDcLgyEnNglcLOyB_qw";
  const iframeSrc = `${URL}?key=${KEY}&q=${address}&zoom=${zoom}`;

  return (
    <div
      className="mapThirdComponent"
      style={{ pointerEvents: "none", height: `${height}${widthSuffix}` }}
    >
      <iframe src={iframeSrc} title="map" />
    </div>
  );
};
