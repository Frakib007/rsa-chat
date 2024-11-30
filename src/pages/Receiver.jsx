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







// import React, { useState, useEffect } from "react";
// import { decryptMessage, generateKeys } from "../utils/rsa";
// import { database } from "../firebase";
// import { ref, onValue } from "firebase/database";

// const Receiver = () => {
//   const [messages, setMessages] = useState([]);
//   const [keys, setKeys] = useState({ publicKey: "", privateKey: "" });

//   useEffect(() => {
//     // Generate RSA keys for the receiver when the component loads
//     const generatedKeys = generateKeys();
//     setKeys(generatedKeys);
//     console.log("Receiver Public Key:", generatedKeys.publicKey);

//     // Listen to new messages in Firebase
//     const messagesRef = ref(database, "messages");
//     onValue(messagesRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const messagesArray = Object.values(data);
//         setMessages(messagesArray);
//       }
//     });
//   }, []);

//   const decryptReceivedMessage = (encryptedMessage) => {
//     try {
//       return decryptMessage(encryptedMessage, keys.privateKey);
//     } catch (error) {
//       return "Failed to decrypt.";
//     }
//   };

//   return (
//     <div>
//       <h1>Receiver</h1>
//       <p>Your Public Key: <br /> {keys.publicKey}</p>
//       <div>
//         <h2>Received Messages:</h2>
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <p>Sender Public Key: {msg.senderPublicKey}</p>
//             <p>
//               Encrypted Message: <br /> {msg.encryptedMessage}
//             </p>
//             <p>
//               Decrypted Message: <br /> {decryptReceivedMessage(msg.encryptedMessage)}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Receiver;
