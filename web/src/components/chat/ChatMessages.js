import React from 'react';

const ChatMessages = ({ messages, messagesEndRef }) => {
  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatMessages;