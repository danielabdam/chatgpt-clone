import React, { useState } from 'react';
import './ChatHistory.css';

const ChatHistory = ({ history, onSelect, onNewChat }) => {
  const [isOpen, setIsOpen] = useState(false);  // Controle do estado de visibilidade do histórico

  const toggleHistory = () => {
    setIsOpen(!isOpen);  // Alterna entre mostrar e esconder o histórico
  };

  return (
    <div className="chat-history-container">
      {/* Botão para abrir/fechar o histórico */}
      <button className="history-toggle-btn" onClick={toggleHistory}>
        {isOpen ? 'X' : '☰'} {/* Muda o ícone conforme o estado */}
      </button>
      {isOpen && (  // Exibe o histórico somente quando 'isOpen' for verdadeiro
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
