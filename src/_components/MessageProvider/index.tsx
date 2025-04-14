import React, { createContext, useContext, useEffect, useState } from "react";

// Types
type MessagePayload = {
  userId: number;
  token?: string;
  message?: string;
};

type MessageEventData = {
  type: string;
  payload: MessagePayload;
};

// Context type
interface MessageContextType {
  data: MessagePayload | null;
}

// Create context
const MessageContext = createContext<MessageContextType>({ data: null });

// Provider
export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<MessagePayload | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "http://localhost:8080") return;
      const msg = event.data as MessageEventData;
      if (msg?.type === "INIT_DATA") {
        console.log("PostMessage received:", msg.payload);
        setData(msg.payload);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  console.log(data);

  return (
    <MessageContext.Provider value={{ data }}>
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook to use the context
export const useMessageData = () => useContext(MessageContext);