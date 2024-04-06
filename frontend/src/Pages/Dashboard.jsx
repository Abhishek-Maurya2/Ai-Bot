import React, { useState, useRef } from "react";
import SideNav from "./../components/SideNav";
import BottomDock from "../components/BottomDock";
import DashBoardNav from "../components/DashBoardNav";
import ChatBubble from "../components/ChatBubble";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  
  
  return (
    <div className="flex flex-row">
      <SideNav />
      <div className="w-full h-screen bg-zinc-900 flex flex-col">
        <DashBoardNav />
        {/* gemini responses */}
        <div className="flex flex-col overflow-auto gap-4">
          <ChatBubble />
        </div>

        {/* bootom search dock */}
        <BottomDock />
      </div>
    </div>
  );
}

export default Dashboard;
