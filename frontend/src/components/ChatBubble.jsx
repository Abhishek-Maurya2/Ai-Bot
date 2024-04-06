import React from "react";
import {
  FiClipboard,
  FiDelete,
  FiEdit,
  FiMoreVertical,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";

function ChatBubble({ chat }) {
  return (
    <div className="text-white flex items-center justify-center">
      <div className="flex flex-col w-[60vw]">
        <div className="flex gap-6 items-center bg-zinc-800 rounded-xl rounded-b-none py-4 px-4 border-[1px] border-gray-600">
          <img
            src="https://source.unsplash.com/random/40x40"
            alt="avatar"
            className="rounded-full"
          />
          <p>{chat.query}</p>
        </div>
        <div className="flex gap-6 items-center bg-zinc-900 rounded-xl rounded-t-none py-6 px-4 border-[1px] border-gray-600 border-t-0">
          <img
            src="https://source.unsplash.com/random/40x40"
            alt="avatar"
            className="rounded-full"
          />
          <p>{chat.response}</p>
        </div>
        {/* options */}
        <div className="flex gap-4 p-4">
          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full">
            <FiThumbsUp />
          </button>
          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full">
            <FiThumbsDown />
          </button>
          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full">
            Copy
            <FiClipboard />
          </button>
          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full">
            <FiEdit />
            Edit
          </button>
          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full">
            <FiDelete />
            Delete
          </button>

          <button className="flex gap-2  items-center text-white bg-zinc-800 px-4 py-2 rounded-full">
            <FiMoreVertical />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
