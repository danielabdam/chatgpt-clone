import React from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

function Chat() {
  return (
    <div className="w-full h-full flex flex-1 md:flex-2/3 flex-col items-center justify-end  pb-10">
      <div className="max-w-full md:max-w-2/3 w-full bg-neutral-700 self-center-safe flex flex-col h-full rounded-lg shadow-lg">
        <ChatMessages />
        <ChatInput/>
      </div>
      
    </div>
  );
}

export default Chat;