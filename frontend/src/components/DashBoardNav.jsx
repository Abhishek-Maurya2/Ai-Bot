import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";

function DashBoardNav() {
  
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <nav className="relative flex justify-between items-cente px-6 py-2 w-full text-white">
      <p className="text-2xl font-bold">Luna</p>
      <div className="flex items-center bg-zinc-700 rounded-full pr-2">
        <input
          type="text"
          placeholder="Search"
          className="bg-zinc-700 text-white p-2 rounded-full w-60"
        />
        <FiSearch />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        <div className="flex items-center gap-2">
          <img
            src={user.picture}
            alt={user.name}
            className="w-8 h-8 rounded-full"
          />
          <p className="ml-2">{user.name}</p>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
}

export default DashBoardNav;
