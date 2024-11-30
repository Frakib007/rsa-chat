// src/pages/Sender.jsx
import { useState } from "react";
import useFirebase from "../hooks/useFirebase";
import ChatInput from "../components/ChatInput";
import MessageList from "../components/MesssageList";


export default function Sender() {
  const { messages, sendMessage } = useFirebase();
  const [receiverPublicKey, setReceiverPublicKey] = useState(""); // Receiver's public key

  const handleSend = (text) => {
    if (!receiverPublicKey) {
      alert("Receiver's public key is not set!");
      return;
    }
    // Add encryption logic if needed here
    sendMessage({ text, sender: "Sender" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-2xl font-bold mt-4">Sender</h1>
      <div className="w-1/2 bg-white p-4 rounded-lg shadow mt-4">
        <p>Receiver s Public Key:</p>
        <textarea
          className="w-full h-32 border p-2 mt-2"
          placeholder="Enter Receiver's Public Key"
          onChange={(e) => setReceiverPublicKey(e.target.value)}
        />
      </div>
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}



// import React, { useState, useEffect } from "react";
// import { encryptMessage, generateKeys } from "../utils/rsa";
// import { database } from "../firebase";
// import { ref, push } from "firebase/database";

// const Sender = () => {
//   const [message, setMessage] = useState("");
//   const [receiverPublicKey, setReceiverPublicKey] = useState("");
//   const [keys, setKeys] = useState({ publicKey: "", privateKey: "" });

//   useEffect(() => {
//     // Generate RSA keys for the sender when the component loads
//     const generatedKeys = generateKeys();
//     setKeys(generatedKeys);
//     console.log("Sender Public Key:", generatedKeys.publicKey);
//   }, []);

//   const sendMessage = async () => {
//     if (!message || !receiverPublicKey) return;

//     // Encrypt the message using the receiver's public key
//     const encryptedMessage = encryptMessage(message, receiverPublicKey);

//     // Save encrypted message to Firebase
//     const messagesRef = ref(database, "messages");
//     await push(messagesRef, {
//       encryptedMessage,
//       senderPublicKey: keys.publicKey, // Send the sender's public key as well
//     });

//     setMessage(""); // Clear the message input
//   };

//   return (
//     <div>
//       <h1>Sender</h1>
//       <textarea
//         placeholder="Enter receiver's public key"
//         value={receiverPublicKey}
//         onChange={(e) => setReceiverPublicKey(e.target.value)}
//       ></textarea>
//       <br />
//       <textarea
//         placeholder="Type your message"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>
//       <br />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default Sender;
