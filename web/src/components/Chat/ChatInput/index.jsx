import React from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
const ChatInput = () => {
  return (
    <div className="flex items-center justify-center p-6 w-full ">
      <div className="flex w-full items-center justify-center">
        <input
          type="text"
          placeholder="O que está pensando?"
          className="w-full p-2 border flex-2/3 border-neutral-600 rounded-lg bg-neutral-700 text-white rounded-tr-none rounded-br-none"
        />
        <button className="ml-0 px-4 py-2 w-auto bg-violet-600 text-white rounded-lg rounded-tl-none rounded-bl-none">
          <PaperAirplaneIcon className="text-white size-7 p-1/4" />

        </button>
      </div>


    </div>
  );
}

export default ChatInput;