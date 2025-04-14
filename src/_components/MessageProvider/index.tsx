import { useEffect, useState } from "react";

type MessagePayload = {
  userId: number;
  token: string;
};

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MessagePayload | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
       console.log(event.origin);
       if (event.origin !== "http://localhost:8080") return;
       console.log(event.data);

      if (event.data?.type === "INIT_DATA") {
        console.log("📥 Data received in iframe:", event.data.payload);
        setData(event.data.payload);

        // ACK back to parent
      //   window.parent.postMessage({ type: "MESSAGE_RECEIVED" }, event.origin);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

//   if (!data) return null; // or a loader

  return (
    // Your provider logic goes here
    <>{children}</>
  );
};