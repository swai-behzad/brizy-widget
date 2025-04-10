import React from "react";
import { ImageModalInterface } from "../type";
import { Modal } from "../../_components/Modal";

export function ImageModalEditor(props: ImageModalInterface) {
  return (
    <div>
      <Modal />
      <p>ImageModal widget</p>
    </div>
  );
}
