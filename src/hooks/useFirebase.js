import { useState, useEffect } from "react";
import { ref, push, onValue } from "firebase/database"; // Correct import
import { messagesRef } from "../firebase"; // Reference to the messages node

export default function useFirebase() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listen for messages in real-time
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(data ? Object.values(data) : []);
    });
  }, []);

  const sendMessage = (message) => {
    // Add a new message to the database
    push(messagesRef, message);
  };

  return { messages, sendMessage };
}
