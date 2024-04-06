import React from "react";

function ChatBubble() {
  return (
    <div className="text-white flex items-center justify-center">
      <div className="flex flex-col max-w-[70vw]">
        <div className="flex gap-6 items-center bg-slate-900 rounded-xl rounded-b-none py-4 px-4 border-[1px] border-gray-600">
          <img
            src="https://source.unsplash.com/random/40x40"
            alt="avatar"
            className="rounded-full"
          />
          <p>This is user's question?</p>
        </div>
        <div className="flex gap-6 items-center bg-slate-800 rounded-xl rounded-t-none py-6 px-4 border-[1px] border-gray-600 border-t-0">
          <img
            src="https://source.unsplash.com/random/40x40"
            alt="avatar"
            className="rounded-full"
          />
          <p>
            This is Gemini Response Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ipsam commodi natus aliquid nisi aut? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Accusantium sit
            perspiciatis veritatis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatBubble;
