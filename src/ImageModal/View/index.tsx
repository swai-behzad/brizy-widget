import React, { useEffect, useState } from "react";
import { ImageModalInterface, SwaiResponse } from "../type";
import { getLocalStorageValue } from "../../utils/helper";

export function ImageModalView({
  _id: widgetId,
  device,
  thirdPartyId: widgetType
}: ImageModalInterface) {
  const [data, setData] = useState<SwaiResponse | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const swid = getLocalStorageValue("swid");
        const res = await fetch(
          "https://f183-172-191-160-209.ngrok-free.app/widget/getByWidgetId",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${swid}`
            }
          }
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const result: SwaiResponse = await res.json();
        setData(result);
        console.log("Fetched data:", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [widgetId]);

  return <div widget_Id={data?.data.id}>this is just for test</div>;
}
