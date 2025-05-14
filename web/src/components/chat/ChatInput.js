import React from 'react';

const ChatInput = ({ input, setInput, handleSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Digite sua mensagem..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSend}>➤</button>
    </div>
  );
};

export default ChatInput;