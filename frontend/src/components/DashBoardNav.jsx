import React, { useState } from "react";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./dash.css";
import { FiPlus, FiRotateCcw, FiHelpCircle, FiSettings } from "react-icons/fi";
import { chatHandler } from "../handler/chatHandler";

function DashBoardNav({ chat }) {
  const auth = useAuth();
  const { handleDeleteChats } = chatHandler();
  const handleDelete = async () => {
    handleDeleteChats();
  };
  const [modal, setModal] = useState(false);
  const handleSideBarToggle = () => {
    setModal(!modal);
  };
  return (
    <>
      <nav className="relative flex justify-between items-cente px-6 py-2 w-full text-white z-10">
        <div className="flex flex-row items-center justify-center gap-2">
          <button className="menu" onClick={handleSideBarToggle}>
            <FiMenu />
          </button>
          <a href="/" className="text-2xl font-bold">
            Luna
          </a>
        </div>

        <div className="flex gap-3">
          {/* <FiUser /> */}
          {auth.isLoggedIn ? (
            <>
              <button className="text-2xl">
                <FiUser />
              </button>
              <button
                onClick={() => {
                  auth.logout();
                }}
              >
                <Link to="/" className="text-md font-light">
                  Logout
                </Link>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-md font-light">
                Login
              </Link>
              <Link to="/signup" className="text-md font-light">
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
      {/*  */}
      {modal && (
        <div className="h-screen w-full flex flex-row z-10 fixed">
          <div className="h-screen w-[200px] flex flex-col items-start justify-between bg-zinc-800 p-2 text-white">
            <div className="flex flex-col items-start">
              <button
                className="p-3 rounded-full text-xl hover:bg-zinc-600"
                onClick={handleSideBarToggle}
              >
                <FiMenu />
              </button>
              <button className="flex items-center p-3 mt-10 rounded-full text-xl bg-zinc-900 hover:bg-zinc-700">
                <FiPlus />
                <p className="text-[14px] ml-2 whitespace-nowrap">New Chat</p>
              </button>
            </div>

            {/* history */}
            <div className="max-h-[35vh] overflow-hidden overflow-y-auto w-full">
              <div>
                <p className="text-[24px] ml-2">History</p>
              </div>

              {chat.map((chat, index) => (
                <p className="text-[14px] ml-2 p-1 text-gray-300 whitespace-nowrap overflow-hidden overflow-ellipsis rounded-full cursor-pointer hover:bg-zinc-500">
                  {chat.query}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <button
                className="flex items-center p-3 rounded-full text-xl hover:bg-zinc-600"
                onClick={handleDelete}
              >
                <FiRotateCcw />
                <p className="text-[14px] ml-2">Clear History</p>
              </button>
              <button className="flex items-center p-3 rounded-full text-xl hover:bg-zinc-600">
                <FiHelpCircle />
                <p className="text-[14px] ml-2">Help</p>
              </button>
              <button className="flex items-center p-3 mb-2 rounded-full text-xl hover:bg-zinc-600">
                <FiSettings />

                <p className="text-[14px] ml-2">Settings</p>
              </button>
              <p className="text-[13px] text-gray-300 my-2 whitespace-nowrap">
                Developed by Abhishek ❤️
              </p>
            </div>
          </div>
          <div className="w-full bg-[#0000005f]"></div>
        </div>
      )}
    </>
  );
}

export default DashBoardNav;
