import React, { useState, useRef, useEffect } from 'react';
import '../../styles/main.css';
import './Chat.css';
import ChatHistory from '../ChatHistory/ChatHistory';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['clonegpt'] = 'yy5pBpergq0btN9M5f6WW2N52gpAXI';

const Chat = () => {
  const [chats, setChats] = useState([{ title: 'Chat 01', messages: [] }]);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [input, setInput] = useState('');
  const [isConversing, setIsConversing] = useState(false);
  const [typing, setTyping] = useState(false); // Controla o efeito de digitação
  const [botMessage, setBotMessage] = useState(''); // Armazena a resposta do bot
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [chats, botMessage]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  // Função para simular digitação
  const typeMessage = (message) => {
    setTyping(true);
    let index = 0;
    setBotMessage(''); // Limpa a mensagem anterior

    const interval = setInterval(() => {
      setBotMessage((prev) => prev + message[index]);
      index++;

      if (index === message.length) {
        clearInterval(interval);
        setTyping(false);
      }
    }, 100); // 100ms de intervalo entre cada letra
  };

  const sendMessage = async (message, messages, id) => {
    try {
      const response = await axios.post('https://n8n.dev.salesol.com.br/webhook/clonegpt/chat', { message, messages, id });
      return response.data.output;
    } catch (error) {
      console.error('Error sending message:', error);
      return 'Desculpe, não consegui processar sua mensagem.';
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, type: 'user' };
    const updatedChats = [...chats];
    updatedChats[activeChatIndex].messages.push(userMsg);

    setChats(updatedChats);
    setInput('');
    setIsConversing(true);

    // Obtém a resposta do bot e simula a digitação
    const botResponse = await sendMessage(input, chats[activeChatIndex].messages, activeChatIndex);
    typeMessage(botResponse); // Chama a função de digitação
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
    const index = chats.findIndex((c) => c.title === chat.title);
    if (index !== -1) {
      setActiveChatIndex(index);
      setInput('');
      setIsConversing(chats[index].messages.length > 0);
    }
  };

  return (
    <div className={`chat-layout ${chats[activeChatIndex]?.messages.length > 0 ? 'expanded' : ''}`}>
      <div className="chat-wrapper">
        {chats[activeChatIndex]?.messages.length === 0 && (
          <div className="chat-header">
            <h2>Como posso ajudar?</h2>
          </div>
        )}
        <div className="chat-box">
          <div className="messages">
            {chats[activeChatIndex]?.messages.map((msg, index) => (
              <div key={index} className={`message-container ${msg.type}`}>
                <div className={`message ${msg.type}`}>{msg.text}</div>
              </div>
            ))}
            {/* Exibe a resposta do bot como se estivesse sendo digitada */}
            {typing ? (
              <div className="message bot">{botMessage}</div>
            ) : (
              <div className="message bot">{botMessage}</div>
            )}
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