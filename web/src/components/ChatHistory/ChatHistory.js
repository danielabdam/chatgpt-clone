import React from 'react';
import './ChatHistory.css';

const ChatHistory = ({ history, onSelect, handleNewChat }) => {
    return (
      <aside className="chat-history-box">
        <div className="chat-header">
          <button className="new-chat-btn" onClick={handleNewChat}>+</button>
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
      </aside>
    );
  };

export default ChatHistory;
