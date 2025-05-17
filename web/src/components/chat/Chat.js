import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatHistory from '../ChatHistory/ChatHistory';
import axios from 'axios';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['clonegpt'] = 'yy5pBpergq0btN9M5f6WW2N52gpAXI';

const Chat = () => {
  const [chats, setChats] = useState([{ title: 'Chat 01', messages: [] }]);
  const [activeChatIndex, setActiveChatIndex] = useState(0);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const sendMessage = async (message, messages, id) => {
    try {
      const response = await axios.post('http://localhost:5555/api/prompt', { prompt: message });
      if (!response.data || !response.data.data || response.data.data.trim() === '') {
        return 'Desculpe, não consegui processar sua mensagem.';
      }
      console.log('Response:', response.data.data);
      return response.data.data;
    } catch (error) {
      console.error('Error sending message:', error);
      return 'Desculpe, não consegui processar sua mensagem.';
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    // Adiciona a mensagem do usuário
    const userMsg = { text: input, type: 'user' };
    const updatedChatsUser = chats.map((chat, idx) =>
      idx === activeChatIndex
        ? { ...chat, messages: [...chat.messages, userMsg, { text: '...', type: 'bot' }] }
        : chat
    );
    setChats(updatedChatsUser);
    setInput('');

    // Aguarda a resposta do bot
    const botResponse = await sendMessage(input, updatedChatsUser[activeChatIndex].messages, activeChatIndex);


    // Adiciona a mensagem do bot
    setTimeout(() => {
      updatedChatsUser[activeChatIndex].messages.pop(); // Remove o bot temporário

      const botMsg = { text: botResponse, type: 'bot' };
      const updatedChatsBot = updatedChatsUser.map((chat, idx) =>
        idx === activeChatIndex
          ? { ...chat, messages: [...chat.messages, botMsg] }
          : chat
      );
      setChats(updatedChatsBot);
    }, 5000);
  };

  const handleNewChat = () => {
    const newTitle = `Chat ${chats.length + 1}`;
    setChats([...chats, { title: newTitle, messages: [] }]);
    setActiveChatIndex(chats.length);
    setInput('');
  };

  const loadConversation = (chat) => {
    const index = chats.findIndex((c) => c.title === chat.title);
    if (index !== -1) {
      setActiveChatIndex(index);
      setInput('');
    }
  };

  return (
    <div className="chat-layout">
      <div className="chat-container">
        <div className="chat-wrapper">
          {chats[activeChatIndex]?.messages.length === 0 && <ChatHeader />}
          <div className="chat-box">
            <ChatMessages
              messages={chats[activeChatIndex]?.messages}
              messagesEndRef={messagesEndRef}
            />
            <ChatInput
              input={input}
              setInput={setInput}
              handleSend={handleSend}
            />
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
    </div>
  );
}

export default Chat;




