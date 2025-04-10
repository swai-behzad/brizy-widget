import React, { useEffect, useState } from "react";
import { ImageModalInterface, SwaiResponse } from "../type";
import { Modal } from "../../_components/Modal";
import { getLocalStorageValue } from "../../utils/helper";

export const ImageModalEditor: React.FC<any> = (
  // {
  //   _id: widgetId,
  //   device
  // }
  props
) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState<SwaiResponse | null>(null);
  const [value, setValue] = useState<string>("");

  //   useEffect(() => {
  //     const fetchData = async (): Promise<void> => {
  //       try {
  //         const swid = getLocalStorageValue("swid");
  //         const res = await fetch("/api/widgets", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${swid}`
  //           },
  //           body: JSON.stringify({
  //             widgetId,
  //             value: value,
  //             device
  //           })
  //         });

  //         if (!res.ok) throw new Error("Failed to fetch");

  //         const result: SwaiResponse = await res.json();
  //         setData(result);
  //         console.log("Fetched data:", result);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     };

  //     fetchData();
  //   }, [widgetId]);

  const handleWidget = async () => {
    console.log("focus out!!!");

    //  try {
    //    const swid = getLocalStorageValue("swid");
    //    const res = await fetch("/api/widgets", {
    //      method: "PUT",
    //      headers: {
    //        "Content-Type": "application/json",
    //        Authorization: `Bearer ${swid}`
    //      },
    //      body: JSON.stringify({
    //        id: data?.data.id,
    //        value
    //      })
    //    });

    //    if (!res.ok) throw new Error("Failed to update widget");

    //    const result: SwaiResponse = await res.json();
    //    console.log("Updated widget:", result);
    //  } catch (error) {
    //    console.error("Error updating widget:", error);
    //  }
  };

  return (
    <div>
      <Modal show={show} setShow={setShow} />
      <p>ImageModal widget</p>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => handleWidget()}
      />
      <button onClick={() => setShow(true)}>show modal</button>
      {/* <button onClick={() => console.log(widgetId, device)}>log props</button> */}
      <button onClick={() => console.log(props)}>log props</button>
    </div>
  );
};
