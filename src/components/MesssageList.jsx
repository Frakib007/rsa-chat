// src/components/MessageList.jsx
export default function MessageList({ messages }) {
  return (
    <div className="flex flex-col space-y-4 p-4 bg-gray-100 h-96 overflow-y-auto">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex ${
            msg.sender === "Sender" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`px-4 py-2 rounded-lg ${
              msg.sender === "Sender"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
    </div>
  );
}
