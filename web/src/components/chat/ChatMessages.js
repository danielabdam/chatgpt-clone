import React from 'react';

const ChatMessages = ({ messages, messagesEndRef }) => {
  // Força re-renderização quando messages mudar
  React.useEffect(() => {}, [messages]);

  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.type}`}>
          {msg.text}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;