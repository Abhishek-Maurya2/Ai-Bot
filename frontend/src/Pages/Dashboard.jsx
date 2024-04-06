import React, { useEffect, useRef } from "react";
import SideNav from "./../components/SideNav";
import BottomDock from "../components/BottomDock";
import DashBoardNav from "../components/DashBoardNav";
import ChatBubble from "../components/ChatBubble";
import { chatHandler } from "../handler/chatHandler";

function Dashboard() {
  const { chatMessages } = chatHandler();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [chatMessages]);

  console.log("Chat Messages : ", chatMessages);
  return (
    <div className="flex flex-row">
      <SideNav chat={chatMessages} />
      <div className="w-full h-screen bg-zinc-900 flex flex-col">
        <DashBoardNav />
        {/* gemini responses */}
        <div className="flex flex-col overflow-auto gap-4 p-4 h-[80vh]">
          {chatMessages.map((chat, index) => (
            <ChatBubble key={index} chat={chat} />
          ))}
          <div className="h-[20vh] w-[2vw]"></div>
          <div ref={messagesEndRef} />
          {/* empty space so that only latest chat is visible */}
        </div>

        {/* bootom search dock */}
        <BottomDock />
      </div>
    </div>
  );
}

export default Dashboard;
