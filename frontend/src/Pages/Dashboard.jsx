import React, { useState } from "react";
import SideNav from "./../components/SideNav";
import BottomDock from "../components/BottomDock";
import DashBoardNav from "../components/DashBoardNav";
function Dashboard() {
  return (
    <div className="flex flex-row">
      <SideNav />
      <div className="w-full h-screen bg-zinc-900 flex flex-col">
        <DashBoardNav />
        {/* gemini responses */}
        
        {/* bootom search dock */}
        <BottomDock />
      </div>
    </div>
  );
}

export default Dashboard;
