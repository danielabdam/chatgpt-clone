import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';
import ChatHistory from '../ChatHistory/ChatHistory';

const Chat = () => {
  const [chats, setChats] = useState([]); // array de sessões de chat
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [input, setInput] = useState('');

  const messagesEndRef = useRef(null);

  // Inicializa com um chat vazio
  useEffect(() => {
    if (chats.length === 0) {
      setChats([{ title: 'Chat 01', messages: [] }]);
    }
  }, [chats]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, type: 'user' };
    const botMsg = { text: `Você disse: ${input}`, type: 'bot' };

    const updatedChats = [...chats];
    updatedChats[activeChatIndex].messages.push(userMsg, botMsg);

    setChats(updatedChats);
    setInput('');
    scrollToBottom();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleNewChat = () => {
    const newTitle = `Chat ${chats.length + 1}`;
    setChats([...chats, { title: newTitle, messages: [] }]);
    setActiveChatIndex(chats.length);
    setInput('');
  };

  const loadConversation = (index) => {
    setActiveChatIndex(index);
    setInput('');
  };

  return (
    <div className="chat-layout">
      {/* Chat principal */}
      <div className="chat-wrapper">
        <h2>Como posso ajudar?</h2>
        <div className="chat-box">
          <div className="messages">
            {chats[activeChatIndex]?.messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
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
        </div>
      </div>

      {/* Histórico */}
      <ChatHistory
        history={chats.map((chat, i) => ({
          title: chat.title,
          timestamp: new Date().toLocaleString(), // você pode armazenar isso por chat se preferir
          index: i,
        }))}
        onSelect={(item) => loadConversation(item.index)}
        handleNewChat={handleNewChat}
      />
    </div>
  );
};

export default Chat;
