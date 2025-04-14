import { useEffect, useState } from "react";

type MessagePayload = {
  userId: number;
  token: string;
};

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [data, setData] = useState<MessagePayload | null>(null);

  useEffect(() => {
    console.log("👀 MessageProvider mounted");

    const handleMessage = (event: MessageEvent) => {
      console.log("📥 Message received:", event);

      if (event.origin !== "http://localhost:8080") return;
      if (event.data?.type === "INIT_DATA") {
        console.log("✅ INIT_DATA received:", event.data.payload);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  //   useEffect(() => {
  //      console.log("inside use effect");
  //     const handleMessage = (event: MessageEvent) => {
  //        console.log("event: ", event.origin);
  //        console.log("event.origin: ", event.origin);
  //        if (event.origin !== "http://localhost:8080") return;
  //        console.log(event.data);

  //       if (event.data?.type === "INIT_DATA") {
  //         console.log("📥 Data received in iframe:", event.data.payload);
  //         setData(event.data.payload);

  //         // ACK back to parent
  //       //   window.parent.postMessage({ type: "MESSAGE_RECEIVED" }, event.origin);
  //       }
  //     };

  //     window.addEventListener("message", handleMessage);
  //     return () => window.removeEventListener("message", handleMessage);
  //   }, []);

  //   if (!data) return null; // or a loader

  return (
    // Your provider logic goes here
    <>{children}</>
  );
};
