import React, { useState } from "react";
import { ImageModalInterface } from "../type";
import { Modal } from "../../_components/Modal";

export function ImageModalEditor(props: any) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Modal show={show} setShow={setShow} />
      <p>ImageModal widget</p>
      <button onClick={() => setShow(true)}>show modal</button>
      <button onClick={() => console.log(props)}>log props</button>
    </div>
  );
}
