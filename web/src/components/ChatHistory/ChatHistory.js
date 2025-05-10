import React, { useState } from 'react';
import './ChatHistory.css';

const ChatHistory = ({ history, onSelect, onNewChat }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHistory = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat-history-container">
      <button className="history-toggle-btn" onClick={toggleHistory}>
        ☰
      </button>
      {isOpen && (
        <div className="chat-history-box">
          <div className="chat-header">
            <button className="new-chat-btn" onClick={onNewChat}>+</button>
            <h3>Chats</h3>
          </div>
          <hr />
          <ul>
            {history.map((chat, index) => (
              <li key={index} onClick={() => onSelect(chat)}>
                <div className="chat-info">
                  <span className="chat-icon">{'>'}</span>
                  <span className="chat-label">{chat.title}</span>
                </div>
                <span className="chat-time">{chat.timestamp}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChatHistory;
