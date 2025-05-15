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
      await axios.post('/api/prompt', { prompt: message });
      if (!response.data || !response.data.data || response.data.data.trim() === '') {
        return 'Desculpe, não consegui processar sua mensagem.';
      }
      return response.data.data;
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

    const botResponse = await sendMessage(input, chats[activeChatIndex].messages, activeChatIndex);
    const botMsg = { text: botResponse, type: 'bot' };
    updatedChats[activeChatIndex].messages.push(botMsg);

    setChats(updatedChats);
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
      <div className="chat-wrapper">
        {chats[activeChatIndex]?.messages.length === 0 && <ChatHeader />}
        <ChatMessages messages={chats[activeChatIndex]?.messages} messagesEndRef={messagesEndRef} />
        <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
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