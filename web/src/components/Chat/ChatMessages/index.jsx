import React from 'react';
import ChatMessage from '../ChatMessage';

const ChatMessages = () => {
  return (
    <div className="w-full h-100 flex-wrap">
      <div className="flex flex-col w-full h-full overflow-y-auto">
        <div className="flex flex-col space-y-4 p-4">
          <ChatMessage message="Hello, how can I help you?" isUser={false} />
          <ChatMessage message="I need assistance with my order." isUser={true} />
          <ChatMessage message="Sure, can you provide me with your order number?" isUser={false} />
          <ChatMessage message="My order number is 12345." isUser={true} />
        </div>
      </div>
    </div>
  );
}

export default ChatMessages;