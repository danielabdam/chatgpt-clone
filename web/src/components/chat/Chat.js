import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';
import ChatHistory from '../ChatHistory/ChatHistory';

const Chat = () => {
  const [chats, setChats] = useState([{ title: 'Chat 01', messages: [] }]);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [input, setInput] = useState('');
  const [isConversing, setIsConversing] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
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
    setIsConversing(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleNewChat = () => {
    const newTitle = `Chat ${chats.length + 1}`;
    setChats([...chats, { title: newTitle, messages: [] }]);
    setActiveChatIndex(chats.length);
    setInput('');
    setIsConversing(false);
  };

  const loadConversation = (chat) => {
    const index = chats.findIndex(c => c.title === chat.title);
    if (index !== -1) {
      setActiveChatIndex(index);
      setInput('');
      setIsConversing(true);
    }
  };

  return (
    <div className={`chat-layout ${isConversing ? 'expanded' : ''}`}>
      <div className="chat-wrapper">
        {!isConversing && (
          <div className="chat-header">
            <h2>Como posso ajudar?</h2>
          </div>
        )}
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

      <ChatHistory
        history={chats.map((chat) => ({
          title: chat.title,
          timestamp: new Date().toLocaleString(),
        }))}
        onSelect={loadConversation}
        onNewChat={handleNewChat}
      />
    </div>
  );
};

export default Chat;
