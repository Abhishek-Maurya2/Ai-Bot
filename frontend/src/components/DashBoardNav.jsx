import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function DashBoardNav() {
  const auth = useAuth();
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
  );
}

export default DashBoardNav;
