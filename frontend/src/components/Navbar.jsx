import React from "react";
import Dashboard from "./../Pages/Dashboard";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const auth = useAuth();
  return (
    <div className="fixed z-[999] w-full px-20 py-6 flex justify-between items-center backdrop-blur-sm">
      <div className="logo">
        <a className="text-[25px] font-semibold" href="#">
          Ochi
        </a>
      </div>
      <div className="links flex gap-10">
        {["Home", "About", "Services", "Contact"].map((link, index) => (
          <a key={index} href="#" className="text-md font-light">
            {link}
          </a>
        ))}
        {/* <Link to="/login" className="text-md font-light">
          Login
        </Link> */}
        {auth.isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-md font-light">
              DashBoard
            </Link>

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
    </div>
  );
}

export default Navbar;
