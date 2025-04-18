import React, { useState } from "react";

interface ModalInterface {
  show: boolean;
  setShow: (value: boolean) => void;
}

export const Modal: React.FC<ModalInterface> = ({ show, setShow }) => {
  return (
    <div
      onClick={() => setShow(false)}
      style={{
        width: "100vw",
        height: "100vh",
        display: show ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3f4f6",
        position: "absolute",
        zIndex: "99999"
      }}
    >
      <div
        style={{
          width: "30%",
          height: "30$",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>this is modal</h2>
      </div>
    </div>
  );
};
