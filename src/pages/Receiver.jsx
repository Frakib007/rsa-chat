// src/pages/Receiver.jsx
import { useEffect, useState } from "react";
import useFirebase from "../hooks/useFirebase";
import ChatInput from "../components/ChatInput";
import MessageList from "../components/MesssageList";


export default function Receiver() {
  const { messages, sendMessage } = useFirebase();
  const [senderPublicKey, setSenderPublicKey] = useState(""); // Sender's public key

  const handleSend = (text) => {
    if (!senderPublicKey) {
      alert("Sender's public key is not set!");
      return;
    }
    // Add encryption logic if needed here
    sendMessage({ text, sender: "Receiver" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold mt-4">Receiver</h1>
      <div className="w-1/2 bg-white p-4 rounded-lg shadow mt-4">
        <p>Senders Public Key:</p>
        <textarea
          className="w-full h-32 border p-2 mt-2"
          placeholder="Enter Sender's Public Key"
          onChange={(e) => setSenderPublicKey(e.target.value)}
        />
      </div>
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
