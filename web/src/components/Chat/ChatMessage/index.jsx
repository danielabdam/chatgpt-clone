import React from "react";

const ChatMessage = ({ message, isUser }) => {
  return (
    <div
      className={`flex items-start mb-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`rounded-lg p-2 max-w-xs ${
          isUser ? "bg-violet-500 text-white" : "bg-neutral-200 text-neutral-800"
        }`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;